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

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: 'all-reviews',
          element: <AllReviews></AllReviews>
        },
        {
          path: 'add-review',
          // element: <AddReviews></AddReviews>
          element: <PrivateRoute> <AddReviews></AddReviews> </PrivateRoute>
        },
        {
          path: 'my-review',
          element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        }
      ]
    },
    {
      path: '*',
      element: <ErrorPage></ErrorPage>
    }
  ]);

export default router;