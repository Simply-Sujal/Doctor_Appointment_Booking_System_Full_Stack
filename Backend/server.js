import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoute.js";


// app config
const app = express();
const PORT = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// middlewares 
app.use(express.json());
app.use(cors());


// api endpoint
app.get("/", (req, res) => {
    res.json({ msg: "This is the home route." })
})

// localhost:3000/api/v1/admin
app.use("/api/v1/admin", adminRouter);

// localhost:3000/api/v1/doctor
app.use("/api/v1/doctor", doctorRouter);


app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})