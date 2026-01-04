import express from 'express';
import { config } from 'dotenv';
import { connectDB, disconnectDB } from './config/db';

// Import Routes
import movieRoutes from "./routes/movieRoutes";
import authRoutes from "./routes/authRoutes";
import watchlistRoutes from "./routes/watchlistRoutes";

config();
connectDB();

const app = express();

// Body parsing middlwares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/movies", movieRoutes);
app.use("/auth", authRoutes);
app.use("/watchlist", watchlistRoutes);

const PORT = process.env.PORT ? Number(process.env.PORT) : 5001;
if (isNaN(PORT)) throw new Error("PORT must be a number");

const server = app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on PORT ${PORT}`);
});

// Handle unhandled promise rejections (e.g., database connection errors)
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});

// Handle uncaught exceptions
process.on("uncaughtException", async (err) => {
  console.error("Uncaught Exception:", err);
  await disconnectDB();
  process.exit(1);
});

// Graceful shutdown
process.on("SIGTERM", async () => {
  console.log("SIGTERM received, shutting down gracefully");
  server.close(async () => {
    await disconnectDB();
    process.exit(0);
  });
});