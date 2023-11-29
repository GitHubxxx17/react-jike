import { createBrowserRouter } from "react-router-dom";
import Login from "@/pages/Login";
import Layout from "@/pages/Layout";
import AuthRoute from "@/components/AuthRoute";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/",
    element: (
      <AuthRoute>
        <Layout></Layout>
      </AuthRoute>
    ),
  },
]);

export default router;
