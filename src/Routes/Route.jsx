import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AllReviews from "../Pages/AllReviews";
import AddReviews from "../Pages/AddReviews";
import MyReviews from "../Pages/MyReviews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import SingleReview from "../Pages/SingleReview";
import UpdateReview from "../Pages/UpdateReview";
import Watchlist from "../Pages/Watchlist";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: ()=> fetch("https://gameverse-server-side.vercel.app/reviews/highest-reated-six-data"),
        },
        {
          path: 'all-reviews',
          element: <AllReviews></AllReviews>,
          loader: ()=> fetch("https://gameverse-server-side.vercel.app/reviews"),
        },
        {
          path: 'all-reviews/:id',
          element: <SingleReview></SingleReview>,
          loader: ({params}) => fetch(`https://gameverse-server-side.vercel.app/reviews/${params.id}`)
        },
        {
          path: 'update-review/:id',
          element: <PrivateRoute><UpdateReview></UpdateReview></PrivateRoute>,
          loader: ({params})=> fetch(`https://gameverse-server-side.vercel.app/reviews/${params.id}`),
        },
        {
          path: 'add-review',
          // element: <AddReviews></AddReviews>
          element: <PrivateRoute> <AddReviews></AddReviews> </PrivateRoute>
        },
        {
          path: 'my-reviews/:email',
          element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
          loader: ({params})=> fetch(`https://gameverse-server-side.vercel.app/reviews/user/${params.email}`),
          // https://gameverse-server-side.vercel.app
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path: "watchlist/:email",
          element: <Watchlist></Watchlist>,
          loader: ({params})=> fetch(`https://gameverse-server-side.vercel.app/watchlist/${params.email}`)
        }
      ]
    },
    {
      path: '*',
      element: <ErrorPage></ErrorPage>
    }
  ]);

export default router;