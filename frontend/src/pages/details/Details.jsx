import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./style.scss";

import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import VideosSection from "./videosSection/VideosSection";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recommendation";

import { addWatchlist } from "../../utils/apiBackend";
import { getUser } from "../../utils/auth";

const Details = () => {
    const { mediaType, id } = useParams();
    const navigate = useNavigate();

    const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
    const { data: credits, loading: creditsLoading } = useFetch(
        `/${mediaType}/${id}/credits`
    );

    // Watchlist Handler
    const handleWatchlist = async () => {
    const user = getUser();

    if (!user) {
        alert("Please login first");
        navigate("/login");
        return;
    }

    try {
        await addWatchlist(
            {
                movieId: id,
                mediaType: mediaType
            },
            user.token
        );

        alert("Added to Watchlist 🔖");
    } catch (error) {
        console.error("Watchlist error:", error);
        alert("Something went wrong");
    }
};


// Like Handler
const handleLike = async () => {
    const user = getUser();

    if (!user) {
        alert("Please login first");
        navigate("/login");
        return;
    }

    try {
        console.log("Liked movie:", id);
        alert("Movie Liked ❤️");
    } catch (error) {
        console.error("Like error:", error);
    }
};

    return (
        <div>

            <DetailsBanner
                video={data?.results?.[0]}
                crew={credits?.crew}

                // Passing action handlers
                onWatchlist={handleWatchlist}
                onLike={handleLike}
            />

            <Cast data={credits?.cast} loading={creditsLoading} />

            <VideosSection data={data} loading={loading} />

            <Similar mediaType={mediaType} id={id} />

            <Recommendation mediaType={mediaType} id={id} />

        </div>
    );
};

export default Details;