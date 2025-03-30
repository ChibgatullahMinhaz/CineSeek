import React, { useState } from "react";

export const ShowUpcomming = ({ movie }) => {
  const { title, release_date, poster_path, vote_average, id } = movie;
  const baseUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  const [showPopup, setShowPopup] = useState(false);
  const [details, setDetails] = useState([]);

  const handleDetails = (id) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=b731525bf6922f19e1e6f4d73c910c73`
    ).then((res) => res.json().then((data) => setDetails(data)));
    setShowPopup(true);
  };
  console.log(details);

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
        <p>Release Date: {release_date}</p>
        <p className="text-red-300">Rating: {vote_average.toFixed(1)}</p>
      </div>

      {/* DaisyUI Modal */}
      {showPopup && (
        <dialog open className="modal modal-open">
          <div className="modal-box w-full max-w-none h-screen">
           <div className="grid grid-cols-1 sm:grid-cols-2">
           <img className="mt-4 sm:max-w-sm rounded" src={baseUrl} alt={title} />
           <div>
           <h2 className="text-2xl font-bold">{title}</h2>
            <p className="mt-2">Release Date: {release_date}</p>
            <p className="mt-2">Rating: {vote_average.toFixed(1)}</p>
            <p className="mt-4">Movie details here...</p>
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
