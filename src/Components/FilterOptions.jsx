import { useState } from "react"


function FilterOptions({reviews, setReviews }) {
    const [filterGenre, setFilterGenre]= useState('');
    const handleFilter =(option)=>{
        // console.log(option);
        const datas = [...reviews];
        const filteredData= datas.filter(data => data.genre === option);
        setFilterGenre(option);
        setReviews(filteredData)
        
    }

  return (
    <div className="dropdown z-50">
          <button className="btn border border-gray-200 bg-white dark:bg-gray-800 dark:text-gray-200">
            Filter by Genre {filterGenre ? `: ${filterGenre}` : ""}
          </button>
          <ul className="menu dropdown-content p-2 shadow bg-base-100 dark:bg-gray-700 rounded-box w-52">
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleFilter("Action")}
              >
                Action
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleFilter("RPG")}
              >
                RPG
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleFilter("Adventure")}
              >
                Adventure
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleFilter("Strategy")}
              >
                Strategy
              </button>
            </li>
          </ul>
        </div>
    
  )
}

export default FilterOptions