import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { Post } from "../models/post.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Category } from "../models/category.model.js";
import { userIdToName } from "../utils/userIdToName.js";

// Handler for Creating post
const createPost = asyncHandler(async (req, res) => {
  const { title, desc, categories } = req.body;
  const coverImageUrl = req.file
    ? (await uploadOnCloudinary(req.file.path)).url
    : null;

  if (!(title && desc)) {
    throw new ApiError(400, "User should provide title and description");
  }

  // Convert category names to category IDs
  const categoryIds = [];
  for (const categoryName of categories) {
    let category = await Category.findOne({ category: categoryName });
    if (!category) {
      // If category doesn't exist, create it
      category = await Category.create({ category: categoryName });
    }
    categoryIds.push(category._id);
  }

  const newPost = await Post.create({
    title,
    desc,
    coverImage: coverImageUrl,
    username: req.user?._id,
    categories: categoryIds,
  });

  if (!newPost) {
    throw new ApiError(400, "Post could not be created");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, newPost, "Post created successfully"));
});

// Handler for fetching all posts
const allPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find().populate("categories");
  return res.json(
    new ApiResponse(200, posts, "All posts fetched successfully")
  );
});

// Handler for fetching a single post by ID
const singlePost = asyncHandler(async (req, res) => {
  const postId = req.params.id;
  const post = await Post.findById(postId).populate("categories");
  //convert user id to name
  const convertedUsername = await userIdToName(post?.username);
  console.log(convertedUsername);
  if (!post) {
    throw new ApiError(404, "Post not found");
  }
  return res.json(
    new ApiResponse(
      200,
      { post, convertedUsername },
      "Post fetched successfully"
    )
  );
});

// Handler for updating a post by ID
const updatePost = asyncHandler(async (req, res) => {
  const postId = req.params.id;
  const { title, desc, categories } = req.body;

  // Convert category names to category IDs
  if (categories) {
    const categoryIds = [];
    for (const categoryName of categories) {
      let category = await Category.findOne({ category: categoryName });
      if (!category) {
        // If category doesn't exist, create it
        category = await Category.create({ category: categoryName });
      }
      categoryIds.push(category._id);
    }
  }
  const post = await Post.findById(postId);

  if (!post) {
    throw new ApiError(404, "Post not found");
  }

  // Check if the authenticated user is the owner of the post
  if (post.username.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "Unauthorized to update this post");
  }

  const updatedPost = await Post.findByIdAndUpdate(postId, req.body, {
    new: true,
  }).populate("categories");

  if (!updatedPost) {
    throw new ApiError(404, "Post not found");
  }

  return res.json(
    new ApiResponse(200, updatedPost, "Post updated successfully")
  );
});

// Handler for deleting a post by ID
const deletePost = asyncHandler(async (req, res) => {
  const postId = req.params.id;

  const post = await Post.findById(postId);

  if (!post) {
    throw new ApiError(404, "Post not found");
  }

  // Check if the authenticated user is the owner of the post
  if (post.username.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "Unauthorized to delete this post");
  }

  const deletedPost = await Post.findByIdAndDelete(postId);
  if (!deletedPost) {
    throw new ApiError(404, "Post not found");
  }
  return res.json(new ApiResponse(200, {}, "Post deleted successfully"));
});

export { createPost, allPosts, singlePost, updatePost, deletePost };
