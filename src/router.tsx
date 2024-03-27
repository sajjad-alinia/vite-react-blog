import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/homepage";
import Layout from "./components/HomePageLayout";
import PostList from "./pages/postlist";
import PostInfo from "./pages/postInfo";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/postList",
        element: <PostList />,
      },
      {
        path: "/postInfo/:id",
        element: <PostInfo />,
      },
    ],
  },
]);

export default router;
