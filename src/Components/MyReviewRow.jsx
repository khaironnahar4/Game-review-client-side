import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function MyReviewRow({ review, reviews, setReviews }) {
  const { _id, cover, title, description, rating, publishingYear, genre } = review;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://gameverse-server-side.vercel.app/reviews/${_id}`,{
            method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            
            if (data.deletedCount > 0) {
                // console.log("deleted");
                
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remaining = reviews.filter((review) => review._id !== _id);
              setReviews(remaining);
            }
          });
      }
    });
  };

  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={cover} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-sm opacity-50">{publishingYear}</div>
          </div>
        </div>
      </td>
      <td>{rating}</td>
      <td>{description}</td>
      <td>{genre}</td>
      <th>
        <Link to={`/update-review/${_id}`} className="btn btn-ghost btn-sm">Edit</Link>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-ghost btn-sm ms-2"
        >
          Delete
        </button>
      </th>
    </tr>
  );
}

export default MyReviewRow;
