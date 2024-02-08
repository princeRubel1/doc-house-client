import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/pages/Home/Home/Home";
import DetailsProfile from "../components/pages/Home/ExpertDoc/DetailsProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "detailsprofile/:id",
        element: <DetailsProfile></DetailsProfile>,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/doctors/${params.id}`),
      },
    ],
  },
]);
