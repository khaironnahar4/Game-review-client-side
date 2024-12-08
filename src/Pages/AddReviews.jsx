import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";


function AddReviews() {
  const {user} = useContext(AuthContext);

  const genres = ["Action", "RPG", "Adventure", "Sports", "Strategy"];

  const handleForm = event =>{
    event.preventDefault();

    const form = event.target;
    const cover = form.gameCover.value;
    const title = form.gameTitle.value;
    const description = form.reviewDescription.value;
    const rating = form.rating.value;
    const publishingYear = form.publishingYear.value;
    const genre = form.genre.value;
    const userName = user.displayName;
    const email = user.email;

    const reviewData ={cover, title, description, rating, publishingYear, genre, userName, email};
    console.log(reviewData);

    fetch('https://game-reviewer-server-side.vercel.app/reviews',{
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(reviewData),
    })
    .then(res => res.json())
    .then(data => console.log(data))

  }

  return (
    <form onSubmit={handleForm}
    className="max-w-xl mx-auto p-6 shadow-lg bg-white rounded-lg space-y-4 mt-16"
    // onSubmit={handleSubmit}
  >
    <h2 className="text-2xl font-bold text-center mb-4">Give Your Review</h2>
    
    {/* Game Cover */}
    <div className="form-control">
      <label className="label font-semibold">Game Cover Image (URL)</label>
      <input
        type="text"
        name="gameCover"
        placeholder="Enter game cover URL"
        className="input input-bordered w-full"
        required
      />
    </div>
    
    {/* Game Title */}
    <div className="form-control">
      <label className="label font-semibold">Game Title</label>
      <input
        type="text"
        name="gameTitle"
        placeholder="Enter game title"
        className="input input-bordered w-full"
        required
      />
    </div>
    
    {/* Review Description */}
    <div className="form-control">
      <label className="label font-semibold">Review Description</label>
      <textarea
        name="reviewDescription"
        placeholder="Write your detailed review"
        className="textarea textarea-bordered w-full"
        rows="4"
        required
      ></textarea>
    </div>
    
    {/* Rating */}
    <div className="form-control">
      <label className="label font-semibold">Rating (1-10)</label>
      <input
        type="number"
        name="rating"
        placeholder="Enter rating (1-10)"
        min="1"
        max="10"
        className="input input-bordered w-full"
        required
      />
    </div>
    
    {/* Publishing Year */}
    <div className="form-control">
      <label className="label font-semibold">Publishing Year</label>
      <input
        type="number"
        name="publishingYear"
        placeholder="e.g., 2024"
        className="input input-bordered w-full"
        required
      />
    </div>
    
    {/* Genres */}
    <div className="form-control">
      <label className="label font-semibold">Genre</label>
      <select
        name="genre"
        className="select select-bordered w-full"
        required
      >
        <option value="" disabled>
          Select a genre
        </option>
        {genres.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
    
    {/* User Email */}
    <div className="form-control">
      <label className="label font-semibold">User Email</label>
      <input
        type="email"
        value={user.email}
        readOnly
        className="input input-bordered w-full bg-gray-200 cursor-not-allowed"
      />
    </div>
    
    {/* User Name */}
    <div className="form-control">
      <label className="label font-semibold">User Name</label>
      <input
        type="text"
        value={user.displayName}
        readOnly
        className="input input-bordered w-full bg-gray-200 cursor-not-allowed"
      />
    </div>
    
    {/* Submit Button */}
    <div className="form-control">
      <button type="submit" className="btn btn-primary w-full">
        Submit Review
      </button>
    </div>
  </form>
  )
}

export default AddReviews