import { createBrowserRouter } from "react-router-dom";
import Login from "@/pages/Login";
import Layout from "@/pages/Layout";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/",
    element: <Layout></Layout>,
  },
]);

export default router;
