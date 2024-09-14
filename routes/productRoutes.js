import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  brainTreePaymentController,
  braintreeTokenController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productListController,
  productPhotoController,
  realtedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/productController.js";
import formidable from "express-formidable";
import braintree from "braintree";

const router = express.Router();

// routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
// Update Product
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//get Products
router.get("/get-product", getProductController);

//Single Products
router.get("/get-product/:slug", getSingleProductController);

// get photo
router.get("/product-photo/:pid", productPhotoController);

//Delete Products
router.delete("/delete-product/:pid", deleteProductController);

// Product Count
router.get("/product-count", productCountController);

//Product Per Page
router.get("/product-list/:page", productListController);

//Search Product
router.get("/search/:keyword", searchProductController);

//similar Product 

router.get("/related-product/:pid/:cid", realtedProductController);

// Category Wise Productz
router.get("/product-category/:slug", productCategoryController);

// Payment Route
//Token
router.get("/braintree/token", braintreeTokenController);
  
// Payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

// Cancel Order 

export default router;
