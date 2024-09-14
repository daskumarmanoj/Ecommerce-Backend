import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import {
  categoryController,
  CreateCategoryController,
  deleteCategoryController,
  singlecategoryController,
  updateCategoryController,
} from "../controllers/categoryController.js";

const router = express.Router();

//Routes
//create Category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  CreateCategoryController
);

//  update Category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);
// GetAll Category
router.get("/get-category", categoryController);

//Single Category
router.get("/single-category/:slug", singlecategoryController);

//Deletecategory Controller
router.delete("/delete-category/:id", deleteCategoryController);

export default router;
