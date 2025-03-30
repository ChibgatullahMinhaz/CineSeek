import React, { Fragment, Suspense } from "react";
import "./Nav.css";
import { ShowPopuler } from "./ShowPopuler";
import { Upcomming } from "./Upcomming";
import { TopRated } from "./TopRated";

// api key
const api_key = "b731525bf6922f19e1e6f4d73c910c73";

// popular movies
const populermoviepromies = fetch(
  `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`
).then((res) => res.json());

// upcoming movies
const upcommingmovies = fetch(
  `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`
).then((res) => res.json());

// top rated movies
const top_rated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`;
const topratedmoviespromise = fetch(top_rated).then(res => res.json());
export const Nav = () => {

  const handleQuery = (e) => {
    const query = e.target.value;
    console.log(query);
  };
  return (
    <Fragment>
      <nav className="p-3 flex justify-between items-center shadow-2xl">
        <h1
          id="logo"
          className="text-red-200 text-xl lg:text-5xl sm:text-3xl  "
        >
          CineSeek
        </h1>
        <div>
          <input
            onChange={handleQuery}
            type="search"
            className="input "
            placeholder="Search Movie"
          />
        </div>
      </nav>

      <main className="p-4 py-6 mt-10">
        <Suspense fallback={<h1>Upcoming Movies Loading......</h1>}>
          <Upcomming upcommingmovies={upcommingmovies}></Upcomming>
        </Suspense>
        <Suspense fallback={<h1>Top Rated Movies Loading......</h1>}>
          <TopRated topratedmoviespromise={topratedmoviespromise} ></TopRated>
        </Suspense>
        <Suspense fallback={<h1>Popular Movies Loading......</h1>}>
          <ShowPopuler populermoviepromies={populermoviepromies}></ShowPopuler>
        </Suspense>
      </main>
    </Fragment>
  );
};
