import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPosts_apiCall } from "./apiCall";
import BlogCard from "./BlogCard";

const AllPosts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [allPosts, setAllPosts] = React.useState({
    totalResults: 0,
    posts: [],
  });

  React.useEffect(() => {
    getPosts_apiCall(setAllPosts, navigate, dispatch);
  }, []);

  return (
    <div className="w-full px-2 sm:w-11/12 md:w-10/12 mx-auto mt-8">
      <h1 className="text-4xl text-center font-bold mb-10">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center">
        {/* <BlogCard id="2" /> */}
        {allPosts.posts.map((blog) => {
          return (
            <div key={blog._id}>
              <BlogCard blog={blog} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllPosts;
