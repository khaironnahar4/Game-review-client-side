import { useLoaderData } from "react-router-dom";
import WatchListRow from "../Components/WatchlistRow";
import { useState } from "react";
import Swal from "sweetalert2";

function Watchlist() {
  const watchlistData = useLoaderData();
  const [watchlistDatas, setWatchlistDatas] = useState(watchlistData);
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
        fetch(`https://gameverse-server-side.vercel.app/watchlist/delete/${_id}`,{
          method:"DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            
            if (data.deletedCount > 0) {
              const remaining = watchlistDatas.filter(
                (data) => data._id !== _id
              );
              setWatchlistDatas(remaining);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold my-6">
        My Reviews: {watchlistDatas.length}
      </h1>

      <div className="overflow-x-auto">
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
            {watchlistDatas.map((watchlist) => (
              <WatchListRow
                key={watchlist._id}
                handleDelete={handleDelete}
                watchlist={watchlist}
              ></WatchListRow>
            ))}

            {/* row 1 */}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
}

export default Watchlist;
