import React, { useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import Img from "../../components/lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";

import { getUser } from "../../utils/auth";
import { getWatchlist } from "../../utils/apiBackend";

const Watchlist = () => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchWatchlist = async () => {
            const user = getUser();

            if (!user) {
                alert("Please login first");
                navigate("/login");
                return;
            }

            try {
                const res = await getWatchlist(user.token);
                setMovies(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchWatchlist();
    }, []);

    return (
        <div className="watchlistPage">
            <ContentWrapper>
                <h2 className="pageTitle">My Watchlist</h2>

                {movies.length === 0 ? (
                    <div className="empty">
                        No movies in your watchlist yet.
                    </div>
                ) : (
                    <div className="moviesGrid">
                        {movies.map((item) => (
                            <div
                                key={item._id}
                                className="movieCard"
                                onClick={() =>
                                    navigate(`/${item.mediaType}/${item.movieId}`)
                                }
                            >
                                <div className="posterBlock">
                                    <Img
                                        src={item.poster || PosterFallback}
                                    />
                                </div>

                                <div className="textBlock">
                                    <span className="title">
                                        {item.title || "Movie"}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </ContentWrapper>
        </div>
    );
};

export default Watchlist;