import express from "express";
import { doctorList } from "../controllers/doctorController.js";

const doctorRouter = express.Router();

// list of doctor 
doctorRouter.get("/list", doctorList);

export default doctorRouter;