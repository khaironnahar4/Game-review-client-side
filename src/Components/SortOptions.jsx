import { useState } from "react";

function SortOptions({ reviews, setReviews }) {
  const [sortOption, setSortOption] = useState("");

  const handleSort = (criteria) => {
    console.log(criteria);
    let sortedReviews = [...reviews];
    if (criteria === "rating-asc") {
      sortedReviews.sort((a, b) => a.rating - b.rating);
      setSortOption("Rating: Low to High");
    } else if (criteria === "rating-desc") {
      sortedReviews.sort((a, b) => b.rating - a.rating);
      setSortOption("Rating: High to Low");
    } else if (criteria === "year-asc") {
      sortedReviews.sort((a, b) => a.publishingYear - b.publishingYear);
      setSortOption("Year: Old to New");
    } else if (criteria === "year-desc") {
      sortedReviews.sort((a, b) => b.publishingYear - a.publishingYear);
      setSortOption("Year: New to Old");
    }
    setReviews(sortedReviews);
  };

  return (
      <div className="dropdown z-50">
        <button className="btn border border-gray-200 bg-white dark:bg-gray-800 dark:text-gray-200">
          Sort by {sortOption ? sortOption : "Select"}
        </button>
        <ul className="menu dropdown-content p-2 shadow bg-base-100 dark:bg-gray-700 rounded-box w-52">
          <li>
            <button
              className="dropdown-item"
              onClick={() => handleSort("rating-asc")}
            >
              Rating: Low to High
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => handleSort("rating-desc")}
            >
              Rating: High to Low
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => handleSort("year-asc")}
            >
              Year: Old to New
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => handleSort("year-desc")}
            >
              Year: New to Old
            </button>
          </li>
        </ul>
      </div>
  );
}

export default SortOptions;
