import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
connectDB();

const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json()); // this middleware will parse JSON bodies: req.body

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log(`Server started at PORT: ${PORT}`);
});
