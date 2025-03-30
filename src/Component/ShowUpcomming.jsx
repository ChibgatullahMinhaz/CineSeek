import React from "react";

export const ShowUpcomming = ({ movie }) => {
  const { title, release_date, poster_path, vote_average } = movie;
  const baseUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  return (
    <div className="shadow-2xl shadow-blue-200 rounded-lg p-2 cursor-pointer">
      <img src={baseUrl} alt={title} />
      <h1 className="font-bold text-red-300 text-xl">{title}</h1>
      <p>Release Date: {release_date}</p>
      <p className="text-red-300">Rating: {vote_average.toFixed(1)}</p>
    </div>
  );
};
