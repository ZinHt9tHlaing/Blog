import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import AuthPage from "../pages/AuthPage";
import ErrorPage from "../components/Error";
import HomePage from "../pages/HomePage";
import PostDetailPage from "../pages/PostDetailPage";
import EditPostPage from "../pages/EditPostPage";
import CreatePostPage from "../pages/CreatePostPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/auth",
        element: <AuthPage />,
      },
      {
        path: "/post/:id",
        element: <PostDetailPage />,
      },
      {
        path: "/post-create",
        element: <CreatePostPage />,
      },
      {
        path: "/post-edit/:id",
        element: <EditPostPage />,
      },
    ],
  },
]);
