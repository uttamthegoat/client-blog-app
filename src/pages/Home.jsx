import axios from "../utils/axiosConfig";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [post, setPost] = useState({ title: "", description: "", image: "" });
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchUser = () => {
      axios
        .get("/posts/g")
        .then((res) => {
          const { title, description, image } = res.data.post;
          const { tags } = res.data;
          setPost({ ...post, title, description, image });
          setTags(tags);
        })
        .catch((error) => {
          if (error.response.data.status === "logout") navigate("/auth");
        });
    };
    // fetchUser();
  }, []);

  return (
    <div>
      <Link
        to="/add-post"
        className="block w-40 border px-3 py-2 bg-blue-600 text-white rounded-md"
      >
        Create a new Blog
      </Link>
    </div>
  );
};

export default Home;


