import React, { Fragment, Suspense, useEffect } from "react";
import "./Nav.css";
import { ShowPopuler } from "./ShowPopuler";

const populermoviepromies = fetch(
  "https://api.themoviedb.org/3/movie/popular?api_key=b731525bf6922f19e1e6f4d73c910c73"
).then((res) => res.json());
export const Nav = () => {
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
          <input type="search" className="input " placeholder="Search Movie" />
        </div>
      </nav>

      <main className="p-4 py-6 mt-10">
        <Suspense fallback={<h1>Loading......</h1>}>
          <ShowPopuler populermoviepromies={populermoviepromies}></ShowPopuler>
        </Suspense>
      </main>
    </Fragment>
  );
};
