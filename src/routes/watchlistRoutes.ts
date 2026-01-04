import express from "express";
import {
    addToWatchlist,
    removeFromWatchlist,
    updateWatchlistItem,
} from "../controllers/watchlistController";
import { authMiddleware } from "../middleware/authMiddleware";
import { validateRequest } from "../middleware/validateRequest";
import { addToWatchlistSchema } from "../validators/watchlistValidators";

const router = express.Router();

router.use(authMiddleware);

router.post("/", validateRequest(addToWatchlistSchema), addToWatchlist);
router.put("/:id", updateWatchlistItem);
router.delete("/:id", removeFromWatchlist);

export default router;