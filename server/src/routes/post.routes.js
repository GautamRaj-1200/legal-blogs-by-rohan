import { Router } from "express";
const router = Router();
import { verifyJWT } from "../middlewares/auth.middleware.js";

import {
  createPost,
  allPosts,
  singlePost,
  updatePost,
  deletePost,
} from "../controllers/post.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

router
  .route("/create")
  .post(verifyJWT, upload.single("coverImage"), createPost);
router.route("/all-posts").get(allPosts);
router.route("/post/:id").get(singlePost);
router.route("/update/:id").patch(verifyJWT, updatePost);
router.route("/delete/:id").delete(verifyJWT, deletePost);
export default router;
