import React from "react";

export const Populermovies = ({ movie }) => {
  console.log(movie);
  const { title, backdrop_path, poster_path } = movie;
  const baseUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`
  return (
    <div className="shadow-2xl shadow-blue-200 rounded-lg p-2 cursor-pointer">
      <img src={baseUrl} alt={title} />
      <h1>{title}</h1>
    </div>
  );
};
