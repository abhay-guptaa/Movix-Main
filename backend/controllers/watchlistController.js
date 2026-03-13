import Watchlist from "../models/Watchlist.js";

export const addWatchlist = async (req, res) => {

    const { movieId, mediaType } = req.body;

    const exists = await Watchlist.findOne({
        userId: req.user.id,
        movieId
    });

    if (exists) {
        return res.json({ message: "Already added" });
    }

    const item = await Watchlist.create({
        userId: req.user.id,
        movieId,
        mediaType
    });

    res.json(item);
};

export const getWatchlist = async (req, res) => {

    const list = await Watchlist.find({
        userId: req.user.id
    });

    res.json(list);
};

export const deleteWatchlist = async (req, res) => {

    await Watchlist.deleteOne({
        userId: req.user.id,
        movieId: req.params.movieId
    });

    res.json({ message: "Removed" });
};