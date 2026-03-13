import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const loginUser = (data) => {
    return API.post("/auth/login", data);
};

export const registerUser = (data) => {
    return API.post("/auth/register", data);
};

export const addWatchlist = (data, token) =>
  API.post("/watchlist/add", data, {
    headers: { Authorization: `Bearer ${token}` }
  });

export const getWatchlist = (token) =>
  API.get("/watchlist", {
    headers: { Authorization: `Bearer ${token}` }
  });

export const removeWatchlist = (movieId, token) =>
  API.delete(`/watchlist/${movieId}`, {
    headers: { Authorization: `Bearer ${token}` }
  });