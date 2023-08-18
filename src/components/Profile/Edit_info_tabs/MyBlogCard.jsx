import React from "react";
import { Link } from "react-router-dom";

const MyBlogCard = ({ blog }) => {
  return (
    <div className="Blog_card border-2 border-gray-300 shadow-xl px-3 py-2 w-full sm:w-11/12 rounded-lg mx-auto bg-gradient-to-r from-blue-200 to-sky-200">
      {/* card */}
      <p className="Blog_title font-bold text-2xl line-clamp-2 overflow-hidden mb-2">
        {blog.title}
      </p>
      <p className="Blog_body line-clamp-5 overflow-hidden mb-3 text-md">
        {blog.description}
      </p>
      <p className="text-md mb-3 font-semibold text-gray-500">
        Last updated at : {new Date(blog.updatedAt).toDateString()}
      </p>
      <Link
        to={`/post-item/${blog._id}`}
        className="bg-black px-3 py-2 text-white rounded-lg block w-fit hover:text-gray-300"
      >
        Read More
      </Link>
    </div>
  );
};

export default MyBlogCard;
