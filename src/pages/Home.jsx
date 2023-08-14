import React from "react";
import { Link } from "react-router-dom";
import AllPosts from "../components/Home/AllPosts";

const Home = () => {
  return (
    <div className="mb-10">
      <div className="mt-4 sm:mt-8 flex justify-end">
        <Link
          to="/add-post"
          className="block w-fit border px-3 py-2 bg-blue-600 text-white rounded-md me-3 sm:hidden"
        >
          📝New Blog
        </Link>
        <Link
          to="/add-post"
          className="w-fit border px-3 py-2 bg-blue-600 text-white rounded-md me-3 hidden sm:block"
        >
          📝Create a new Blog
        </Link>
      </div>
      <div>
        {/* posts */}
        <AllPosts />
      </div>
    </div>
  );
};

export default Home;
