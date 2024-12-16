import { Link } from "react-router-dom";


function ReviewCard({review}) {
    const {_id,cover, title, rating, genre, publishingYear, userName} = review ;
    // console.log(typeof(_id));
    
  return (
    <div className="card lg:card-side w-2/3 mx-auto my-6 bg-base-100 dark:bg-gray-700 shadow-xl">
    <figure className="w-1/2">
      <img
      className="w-full h-[350px] object-fill object-center"
        src={cover}
        alt={`${title} cover image`} />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p>Rating: {rating}/10</p>

      <p>Reviewer: {userName}</p>
      <p>Genre: {genre}</p>
      <p>Publishing Year: {publishingYear}</p>

      <div className="card-actions">
        <Link to={`/all-reviews/${_id}`} className="btn btn-primary">See more</Link>
      </div>
    </div>
  </div>
  )
}

export default ReviewCard