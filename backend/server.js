import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();

// Initialize Express app
const app = express();

// Set up port from environment variables or use 5000
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON payloads
app.use(express.json());

// Middleware to parse cookies
app.use(cookieParser());

// Route middleware
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// Start server and connect to MongoDB
app.listen(PORT, () => {
	connectToMongoDB();
	console.log(`Server Running on port ${PORT}`);
});
