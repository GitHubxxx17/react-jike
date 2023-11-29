import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Login from "@/pages/Login";
import Layout from "@/pages/Layout";

import AuthRoute from "@/components/AuthRoute";

const Publish = lazy(() => import("@/pages/Publish"));
const Article = lazy(() => import("@/pages/Article"));
const Home = lazy(() => import("@/pages/Home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthRoute>
        <Layout />
      </AuthRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={"加载中"}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "article",
        element: (
          <Suspense fallback={"加载中"}>
            <Article />
          </Suspense>
        ),
      },
      {
        path: "publish",
        element: (
          <Suspense fallback={"加载中"}>
            <Publish />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
