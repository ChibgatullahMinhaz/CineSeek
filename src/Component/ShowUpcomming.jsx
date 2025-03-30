import React, { useState } from "react";

export const ShowUpcomming = ({ movie }) => {
  const { title, release_date, vote_average, id } = movie;
  const baseUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  const [showPopup, setShowPopup] = useState(false);
  const [details, setDetails] = useState([]);
  const {
    status,
    budget,
    runtime,
    overview,
    popularity,
    production_companies,
    production_countries,
    spoken_languages,
    tagline,
    poster_path,
  } = details;
  const posterurl = `https://image.tmdb.org/t/p/w500/${poster_path}`;


  const handleDetails = (id) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=b731525bf6922f19e1e6f4d73c910c73`
    ).then((res) => res.json().then((data) => setDetails(data)));
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {/* Movie card */}
      <div
        onClick={() => handleDetails(id)}
        className="shadow-2xl shadow-blue-200 rounded-lg p-2 cursor-pointer"
      >
        <img src={baseUrl} alt={title} />
        <h1 className="font-bold text-red-300 text-xl">{title}</h1>
        <p className="text-orange-500">Release Date: {release_date}</p>
        <p className="text-red-300">Rating: {vote_average.toFixed(1)}</p>
      </div>

      {/* DaisyUI Modal */}
      {showPopup && (
        <dialog open className="modal modal-open">
          <div className="sm:bg-[#242424]  modal-box w-full max-w-none sm:h-screen">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <img
                className="mt-4 sm:max-w-sm rounded"
                src={posterurl}
                alt={title}
              />
              <div>
                <p className="mt-4 text-blue-900 sm:text-red-300 font-bold text-2xl ">
                  {details.title}
                </p>
                <p className="mt-4 text-blue-900 sm:text-red-300 font-bold text-xl">
                  Description: <br />
                  <span className="text-sm text-blue-900 sm:text-sky-500">
                    {overview}
                  </span>
                </p>
                <p className="mt-4 text-blue-900  sm:text-sky-600 font-bold text-xl">
                  Tagline: <span className="text-sm">{tagline}</span>
                </p>
                <h2 className="text-xl text-blue-900 sm:text-orange-100 font-bold">
                  Movie Type:
                  <span className="text-sm text-blue-900 sm:text-orange-700">
                    {details?.adult ? "18+ movie" : "Not Adult"}
                  </span>
                </h2>

                <p className="mt-2 text-blue-900 sm:text-red-400">
                  Total Time: {runtime}
                </p>
                <p className="mt-2 text-blue-900 sm:text-red-400">
                  Budgets: {budget}
                </p>

                <p className="mt-2 text-blue-900 sm:text-red-400">
                  Popularity: {popularity}
                </p>

                <p className="mt-2 text-blue-900 sm:text-red-400">
                  Rating: {vote_average.toFixed(1)}
                </p>
                <p className="mt-2 text-blue-900 sm:text-white">
                  Status: {status}
                </p>
                <p className="mt-2 text-blue-900 sm:text-white">
                  Release Date: {release_date}
                </p>

                <h2 className="text-xl text-blue-900 sm:text-orange-100 font-bold">
                  Production Companies:
                </h2>
                <div className="flex justify-center items-center gap-3 flex-wrap mt-4">
                  {details.length !== 0
                    ? production_companies.map((company) => (
                        <h1 className="border rounded-lg p-2 text-blue-900 sm:text-white "> {company.name}</h1>
                      ))
                    : []}
                </div>
                

                <h2 className="text-xl text-blue-900 sm:text-orange-100 font-bold">
                  Production countries:
                </h2>
                <div className="flex justify-center items-center gap-3 flex-wrap mt-4">
                  {details.length !== 0
                    ? production_countries.map((company) => (
                        <h1 className="border rounded-lg p-2 text-blue-900 sm:text-white "> {company.name}</h1>
                      ))
                    : []}
                </div>

                <h2 className="text-xl text-blue-900 sm:text-orange-100 font-bold">
                  Languages:
                </h2>
                <div className="flex justify-center items-center gap-3 flex-wrap mt-4">
                  {details.length !== 0
                    ? spoken_languages.map((company) => (
                        <h1 className="border rounded-lg p-2 text-blue-900 sm:text-white "> {company.name}</h1>
                      ))
                    : []}
                </div>

              </div>
              
            </div>
            <div className="flex justify-between mt-4">
              <button onClick={closePopup} className="btn btn-error">
                Close
              </button>
              <button className="btn btn-primary">Play Movie</button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};
