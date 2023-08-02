import axios from "../utils/axiosConfig";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState("No user");
  const [bio, setBio] = useState("");

  useEffect(() => {
    const fetchUser = () => {
      axios
        .get("/auth/getUserDetails")
        .then((res) => {
          setUser(res.data.user.name);
          setBio(res.data.user.bio);
        })
        .catch((error) => {
          if (error.response.data.status === "logout") navigate("/auth");
        });
    };
    fetchUser();
  }, []);

  return <div></div>;
};

export default Home;
