import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  const navLinks = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/all-reviews"}>All Reviews</Link>
      </li>
      {user && user.email && (
        <>
          <li>
            <Link to={"/add-review"}>Add Review</Link>
          </li>
          <li>
            <Link to={"/my-review"}>My Review</Link>
          </li>
          <li>
            <Link>Game Watchlist</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Game Review</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user && user?.email ? (
          <>
            <div
              className="tooltip tooltip-bottom"
              data-tip={`${user?.displayName}`}
            >
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar border"
              >
                <div className="w-10 rounded-full">
                  <img alt="user photo" src={user.photoURL} />
                </div>
              </div>
            </div>
            <button onClick={logout} className="btn ms-4">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to={"/login"} className="btn">
              Login
            </Link>
            <Link to={"/register"} className="btn ms-4">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
