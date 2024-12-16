import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import Swal from "sweetalert2";

function SingleReview() {
  const { user } = useContext(AuthContext);
  const reviewData = useLoaderData();
  const [isDisabled, setIsDisabled] = useState(false);
  const { cover, title, description, rating, publishingYear, genre, userName } =
    reviewData;

    const watchlistData = {...reviewData, currentUser: user.email}


    const handleAddWatchlist =()=>{
      fetch("https://gameverse-server-side.vercel.app/watchlist", {
        method: "POST",
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(watchlistData),
      })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        if(data.acknowledged){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Added to Watchlist",
            showConfirmButton: false,
            timer: 1000
          });
        }
        setIsDisabled(true);
      })
    }

  return (
    <div className="card bg-base-100 max-w-xl shadow-xl mx-auto mt-6">
      <figure className="w-full h-[300px]">
        <img className="w-full h-full object-cover object-center"
          src={cover}
          alt={`${title} image`}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Rating: {rating}</p>
        <p>Reviewer: {userName}</p>
        <p>Genre: {genre}</p>
        <p>Publishing Year: {publishingYear}</p>
        <p>{description}</p>
        <div className="card-actions justify-center mt-4">
          <button onClick={handleAddWatchlist} disabled={isDisabled} className="btn btn-primary">{
            isDisabled ? "Already Added" : "Add To Watchlist"
            }</button>
        </div>
      </div>
    </div>
  );
}

export default SingleReview;
