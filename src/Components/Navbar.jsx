import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { ThemeContext } from "../utils/ThemeProvider";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const { theme, setTheme } = useContext(ThemeContext);

  const navLinks = (
    <>
      <li>
        <Link
          to={"/"}
          className={`${({ isActive }) =>
            isActive
              ? "text-black font-bold dark:text-gray-100 dark:border-gray-100"
              : "text-gray-800 dark:text-gray-400"}`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to={"/all-reviews"}
          className={`${({ isActive }) =>
            isActive
              ? "text-black font-bold dark:text-gray-100 dark:border-gray-100"
              : "text-gray-800 dark:text-gray-400"}`}
        >
          All Reviews
        </Link>
      </li>
      {user && user.email && (
        <>
          <li>
            <Link
              to={"/add-review"}
              className={`${({ isActive }) =>
                isActive
                  ? "text-black font-bold dark:text-gray-100 dark:border-gray-100"
                  : "text-gray-800 dark:text-gray-400"}`}
            >
              Add Review
            </Link>
          </li>
          <li>
            <Link
              to={`/my-reviews/${user.email}`}
              className={`${({ isActive }) =>
                isActive
                  ? "text-black font-bold dark:text-gray-100 dark:border-gray-100"
                  : "text-gray-800 dark:text-gray-400"}`}
            >
              My Review
            </Link>
          </li>
          <li>
            <Link
              to={`/watchlist/${user.email}`}
              className={`${({ isActive }) =>
                isActive
                  ? "text-black font-bold dark:text-gray-100 dark:border-gray-100"
                  : "text-gray-800 dark:text-gray-400"}`}
            >
              Game Watchlist
            </Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 dark:bg-gray-800 dark:text-gray-200">
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
        <a className="btn btn-ghost text-xl">GameVerse</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul
          className={`menu menu-horizontal px-1 
          ${({ isActive }) =>
            isActive &
            "text-black font-bold dark:text-gray-100 dark:border-gray-100"}`}
        >
          {navLinks}
        </ul>
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
            <button
              onClick={logout}
              className="btn ms-4 dark:bg-gray-800 dark:text-gray-200"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to={"/login"}
              className="btn dark:bg-gray-800 dark:text-gray-200"
            >
              Login
            </Link>
            <Link
              to={"/register"}
              className="btn ms-4 dark:bg-gray-800 dark:text-gray-200"
            >
              Register
            </Link>
          </>
        )}
        <button
          onClick={() => setTheme(!theme)}
          className="btn ms-4 rounded bg-gray-800 text-white dark:bg-gray-200 dark:text-black"
        >
          {theme ? "Light" : "Dark"} Mode
        </button>
      </div>
    </div>
  );
}

export default Navbar;
