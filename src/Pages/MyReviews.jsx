import { useLoaderData } from "react-router-dom";
import MyReviewRow from "../Components/MyReviewRow";
import { useState } from "react";

function MyReviews() {
  const myReviews = useLoaderData();
  const [reviews, setReviews] = useState(myReviews)
  // const {title, description, rating, publishingYear, genre} = myReviews;
  return (
    <div>
      <h1 className="text-2xl font-bold my-6">
        My Reviews: {myReviews.length}
      </h1>

      <div className="overflow-x-auto dark:text-gray-200">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="dark:text-gray-200">
              
              <th>Title</th>
              <th>Rating</th>
              <th>Description</th>
              <th>Genre</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

            {
              reviews.map(review => 
              <MyReviewRow 
                key={review._id} 
                review={review} 
                reviews={reviews} 
                setReviews={setReviews}>

                </MyReviewRow>
              )
            }

            {/* row 1 */}
           
         
            
           
          </tbody>
          {/* foot */}
       
        </table>
      </div>
    </div>
  );
}

export default MyReviews;
