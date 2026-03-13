import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    movieId: Number,
    rating: Number,
    comment: String
});

export default mongoose.model("Review", reviewSchema);