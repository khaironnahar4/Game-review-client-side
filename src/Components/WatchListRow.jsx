import { Link } from "react-router-dom";


function watchlistRow({watchlist, handleDelete}) {

    const { _id, cover, title, description, rating, publishingYear, genre } = watchlist;
    
   

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
          <Link to={`/all-reviews/${_id}`} className="btn btn-ghost btn-sm">See Review</Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-ghost btn-sm ms-2"
          >
            Delete
          </button>
        </th>
      </tr>
  )
}

export default watchlistRow