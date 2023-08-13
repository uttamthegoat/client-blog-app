import React from "react";
const Home = React.lazy(() => import("../pages/Home"));
const EditPost = React.lazy(() => import("../pages/EditPost"));
const PostItem = React.lazy(() => import("../pages/PostItem"));
const Posts = React.lazy(() => import("../pages/Posts"));
const AddPost = React.lazy(() => import("../pages/AddPost"));
const Authenticate = React.lazy(() => import("../pages/Authenticate"));
const Profile = React.lazy(() => import("../pages/Profile"));
const Search = React.lazy(() => import("../pages/Search"));
const About = React.lazy(() => import("../pages/About"));
const Redirect = React.lazy(() => import("../pages/Redirect"));

export const routes = [
  {
    id: 1,
    path: "/auth",
    element: <Authenticate />,
    status: true,
  },
  {
    id: 2,
    path: "/",
    element: <Home />,
    status: false,
  },
  {
    id: 3,
    path: "/user-profile",
    element: <Profile />,
    status: false,
  },
  {
    id: 4,
    path: "/search",
    element: <Search />,
    status: false,
  },
  {
    id: 5,
    path: "/about",
    element: <About />,
    status: true,
  },
  {
    id: 6,
    path: "*",
    element: <Redirect />,
    status: true,
  },
  {
    // just for testing
    id: 7,
    path: "/posts",
    element: <Posts />,
    status: "whocares",
  },
  {
    id: 8,
    path: "/add-post",
    element: <AddPost />,
    status: true,
  },
  {
    id: 9,
    path: "/post-item/:id",
    element: <PostItem />,
    status: true,
  },
  {
    id: 10,
    path: "/edit-post/:id",
    element: <EditPost />,
    status: true,
  },
];
