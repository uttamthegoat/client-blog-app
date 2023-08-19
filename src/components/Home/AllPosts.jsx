import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPosts_apiCall } from "./apiCall";
import BlogCard from "./BlogCard";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../static/Spinner";
import axios from "../../utils/axiosConfig";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AllPosts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [allPosts, setAllPosts] = React.useState({
    totalResults: 0,
    posts: [],
  });

  React.useEffect(() => {
    getPosts_apiCall(setAllPosts, navigate, dispatch);
  }, []);

  const fetchMore = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`/posts?page=${page + 1}&pageSize=6`);
      const { results } = res.data;
      setAllPosts({ ...allPosts, posts: allPosts.posts.concat(results) });
      setLoading(false);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.log(error);
      const message = error.response.data.message,
        type = "error";
      dispatch(showAlert({ message, type }));
      if (error.response.data.status === "logout") {
        navigate("/auth");
      }
    }
  };

  return (
    <div className="w-full px-2 sm:w-11/12 md:w-10/12 mx-auto mt-8">
      <h1 className="text-4xl text-center font-bold mb-10 underline">Blogs</h1>
      <InfiniteScroll
        dataLength={allPosts.posts.length}
        next={fetchMore}
        hasMore={allPosts.posts.length !== allPosts.totalResults}
        loader={<Spinner />}
      >
        {!allPosts.posts.length && (
          <div>
            <LazyLoadImage
              src="https://img.memegenerator.net/instances/61821090.jpg"
              alt="nigga?"
              className="block mx-auto rounded-lg mb-2"
            />
            <p className="text-center text-2xl font-semibold">
              Write some blogs nigga!
            </p>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center">
          {allPosts.posts.map((blog) => {
            return (
              <div key={blog._id}>
                <BlogCard blog={blog} />
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default AllPosts;
