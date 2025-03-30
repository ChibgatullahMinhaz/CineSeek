import React, { use } from "react";
import { ShowUpcomming } from "./ShowUpcomming";

export const Upcomming = ({ upcommingmovies }) => {
  const resolved = use(upcommingmovies);
  const Results = resolved.results;

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 w-11/12 mx-auto py-9 gap-3">
        {Results.map((movie) => (
          <ShowUpcomming key={movie.id} movie={movie}></ShowUpcomming>
        ))}
      </div>
    </div>
  );
};
