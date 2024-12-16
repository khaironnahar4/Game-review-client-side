import { useLoaderData } from "react-router-dom"
import ReviewCard from "../Components/ReviewCard";
import SortOptions from "../Components/SortOptions";
import { useState } from "react";
import FilterOptions from "../Components/FilterOptions";


function AllReviews() {
  const reviewData = useLoaderData();
  const [reviews, setReviews] = useState(reviewData)
  console.log(reviews);
  
  return (
    <div>
      <h1 className="text-2xl text-center my-6 font-bold">All Reviews</h1>
      <div className="flex gap-2 items-center z-50">
        <SortOptions reviews={reviewData} setReviews={setReviews}></SortOptions>
        <FilterOptions reviews={reviewData} setReviews={setReviews}></FilterOptions>
      </div>
      <div>
        {
          reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
        }
      </div>
    </div>
  )
}

export default AllReviews;