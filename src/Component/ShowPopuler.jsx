import React, { use } from "react";
import { Populermovies } from "./Populermovies";

export const ShowPopuler = ({ populermoviepromies }) => {
  const popularMovies = use(populermoviepromies);
  const Results = popularMovies.results;
  return (
    <div>
      <h1 className="text-3xl text-red-400 font-bold"> Popular Movies </h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 w-11/12 mx-auto py-9 gap-3">
        {Results.map((movie) => (
          <Populermovies key={movie.id} movie={movie}></Populermovies>
        ))}
      </div>
    </div>
  );
};
