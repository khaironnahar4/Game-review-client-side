import { Link } from "react-router-dom";


function Card({review}) {
    const {_id, cover, title, rating, genre, userName, publishingYear} = review;
    return (
        <div className="card bg-base-100 dark:bg-gray-700 shadow-xl">
        <figure className="w-full h-[300px]">
          <img 
          className="w-full h-full object-fill object-center overflow-hidden"
            src={cover}
            alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Category: {genre}</p>
          <p>Rating: {rating}</p>
          <p>Publishing Year: {publishingYear}</p>
          <p>Reviewer: {userName}</p>
          <div className="card-actions justify-center mt-6">
          <Link to={`/all-reviews/${_id}`} className="btn btn-primary">See more</Link>
          </div>
        </div>
      </div>
  )
}

export default Card