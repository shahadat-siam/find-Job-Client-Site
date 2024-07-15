import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Component/Home";
import AddJobs from "../Component/Pages/AddJob";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/add-job',
            element: <AddJobs/>
        }
      ]
    },
  ]);