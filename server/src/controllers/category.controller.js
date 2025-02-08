import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { Category } from "../models/category.model.js";

const fetchCategories = asyncHandler(async (req,res) =>{
    const categories = await Category.find();
    if (!categories) {
        throw new ApiError(400, "Categories could not be fetched");
      }
    return res.json(new ApiResponse(200, categories, "All Categories fetched successfully"));
});
export {fetchCategories};