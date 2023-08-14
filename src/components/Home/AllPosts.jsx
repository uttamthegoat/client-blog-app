import React from "react";
import { useNavigate } from "react-router-dom";

const AllPosts = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full px-2 sm:w-11/12 md:w-10/12 mx-auto mt-8 border border-black">
      <h1 className="text-4xl text-center font-bold">Blogs</h1>
    </div>
  );
};

export default AllPosts;
