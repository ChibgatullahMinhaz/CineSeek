import React, { useState } from 'react';

export const ShowTopRated = ({ movie }) => {
  const { title, release_date, poster_path, vote_average, id } = movie;
  const baseUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  const [showPopup, setShowPopup] = useState(false);

  const handleDetails = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false); 
  };

  return (
    <div>
      {/* Movie card */}
      <div onClick={handleDetails} className="shadow-2xl shadow-blue-200 rounded-lg p-2 cursor-pointer">
        <img src={baseUrl} alt={title} />
        <h1 className="font-bold text-red-300 text-xl">{title}</h1>
        <p>Release Date: {release_date}</p>
        <p className="text-red-300">Rating: {vote_average.toFixed(1)}</p>
      </div>

      {/* DaisyUI Modal */}
      {showPopup && (
        <dialog open className="modal modal-open">
          <div className="modal-box">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="mt-2">Release Date: {release_date}</p>
            <p className="mt-2">Rating: {vote_average.toFixed(1)}</p>
            <img className="mt-4 rounded" src={baseUrl} alt={title} />
            <p className="mt-4">Movie details here...</p>
            <div className="flex justify-between mt-4">
              <button onClick={closePopup} className="btn btn-error">Close</button>
              <button className="btn btn-primary">Play Movie</button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};
