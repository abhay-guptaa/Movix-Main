import mongoose from "mongoose";

const watchlistSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    movieId: Number,
    mediaType: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("Watchlist", watchlistSchema);