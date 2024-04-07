import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ShowMovies from "../Component/NormalCompo/Shows/ShowMovies";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/movies",
          element:<ShowMovies></ShowMovies>
        }
      ]
    },
  ]);

export default router;