import tmdb from "../config/tmdb.js";

export const getMovieDetails = async (req, res) => {

    const { id } = req.params;

    const movie = await tmdb.get(`/movie/${id}`);

    res.json(movie.data);
};