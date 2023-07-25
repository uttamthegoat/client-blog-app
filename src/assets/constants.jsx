import React from "react";
const Home = React.lazy(() => import("../pages/Home"));
const Authenticate = React.lazy(() => import("../pages/Authenticate"));
const Profile = React.lazy(() => import("../pages/Profile"));
const Search = React.lazy(() => import("../pages/Search"));
const About = React.lazy(() => import("../pages/About"));
const Redirect = React.lazy(() => import("../pages/Redirect"));

export const Links = [
  {
    id: 1,
    name: "Home",
    to: "/",
    icon: <i className="fa-solid fa-house"></i>,
  },
  {
    id: 2,
    name: "Search",
    to: "/search",
    icon: <i className="fa-solid fa-magnifying-glass"></i>,
  },
  {
    id: 3,
    name: "About",
    to: "/about",
    icon: <i className="fa-solid fa-circle-info"></i>,
  },
  {
    id: 4,
    name: "Profile",
    to: "/user-profile",
    icon: <i className="fa-solid fa-user"></i>,
  },
];

export const routes = [
  {
    id: 1,
    path: "/",
    element: <Authenticate />,
  },
  {
    id: 2,
    path: "/home",
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
];
