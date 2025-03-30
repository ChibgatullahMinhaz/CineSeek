import React, { use } from "react";
import { ShowTopRated } from "./ShowTopRated";

export const TopRated = ({topratedmoviespromise}) => {
    const resolve = use(topratedmoviespromise)
    const Results = resolve.results

    console.log(Results);
  return (
    <div>
      <h1 className="text-3xl text-red-400 font-bold"> Top Rated Movies⭐</h1>
        <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 w-11/12 mx-auto py-9 gap-3'>
                      {
                                 Results.map(movie => <ShowTopRated key={movie.id} movie={movie}></ShowTopRated>)
                          
                      }
                    </div>
    </div>
  );
};
