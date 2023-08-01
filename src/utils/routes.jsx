import React from 'react'
const Home = React.lazy(() => import("../pages/Home"));
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
  },
  {
    id: 2,
    path: "/",
    element: <Home />,
  },
  {
    id: 3,
    path: "/user-profile",
    element: <Profile />,
  },
  {
    id: 4,
    path: "/search",
    element: <Search />,
  },
  {
    id: 5,
    path: "/about",
    element: <About />,
  },
  {
    id: 6,
    path: "*",
    element: <Redirect />,
  },
  {
    // just for testing
    id: 7,
    path: "/posts",
    element: <Posts />,
  },
  {
    // just for testing
    id: 8,
    path: "/add-post",
    element: <AddPost />,
  },
];
