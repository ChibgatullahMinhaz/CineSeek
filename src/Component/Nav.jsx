import React, { Fragment, Suspense, use, useEffect, useState } from "react";
import "./Nav.css";

import { Loader } from "./Loader";
import { MainContent } from "./MainContent";
import { Footer } from "./Footer";

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
const topratedmoviespromise = fetch(top_rated).then((res) => res.json());

// published
const featuredpromise = fetch(
  `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`
).then((res) => res.json());

export const Nav = () => {
  const [query, setQuery] = useState("");

  // searching
  const Search_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`;

  const res = fetch(Search_url).then((res) => res.json());

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
            onChange={(e) => setQuery(e.target.value)}
            type="search"
            className="input bg-blue-800 text-white "
            placeholder="Search Movie"
          />
        </div>
      </nav>
      <Suspense fallback={<Loader></Loader>}>
        <MainContent
          featuredpromise={featuredpromise}
          upcommingmovies={upcommingmovies}
          topratedmoviespromise={topratedmoviespromise}
          populermoviepromies={populermoviepromies}
          searchPromise={res}
        ></MainContent>
        <Footer></Footer>
      </Suspense>
    </Fragment>
  );
};
