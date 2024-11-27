import express from "express";
import upload from "../middlewares/multer.js"; // Your multer configuration
import { addDoctor, allDoctor, loginAdmin } from "../controllers/adminController.js";
import authAdmin from "../middlewares/authAdmin.js";
import { changeAvailability } from "../controllers/doctorController.js";

const router = express.Router();

router.post("/add-doctor", authAdmin, upload.single("image"), addDoctor); // Use multer middleware here

router.post("/login", loginAdmin);
router.get("/all-doctors", authAdmin, allDoctor);
router.get("/change-availability", authAdmin, changeAvailability);

export default router;
