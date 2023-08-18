import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserPosts } from "../apiCall";
import MyBlogCard from "./MyBlogCard";

const MyPosts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [myPosts, setMyPosts] = React.useState({
    totalResults: 0,
    results: [],
  });
  React.useEffect(() => {
    getUserPosts(navigate, dispatch, setMyPosts);
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-center text-4xl font-bold">My Posts</h1>
        <p className="text-xl font-semibold text-center my-4">Total: {myPosts.totalResults}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center">
          {/* <BlogCard blog={blog} /> */}
          {myPosts.results.map((blog) => {
            return (
              <div key={blog._id}>
                <MyBlogCard blog={blog} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
