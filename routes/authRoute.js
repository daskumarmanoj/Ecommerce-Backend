import express from "express";
import {
  forgotPasswordController,
  getAllOrdersController,
  getOrdersController,
  loginController,
  registerController,
  testController,
  updateProfileController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

// route Object
const router = express.Router();

//Routeing

//REGISTER || Method - POST
router.post("/register", registerController);
//LOGIN || Method -POST
router.post("/login", loginController);

// FORGET Password || Post
router.post("/forgot-password", forgotPasswordController);
// TEST Route
router.get("/test", requireSignIn, isAdmin, testController);

//Protected User Route Auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//Protected Admin Route Route Auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

// Update Profile
router.put("/profile", requireSignIn, updateProfileController);

// Orders
router.get("/orders", requireSignIn, getOrdersController);

// Orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

export default router;
