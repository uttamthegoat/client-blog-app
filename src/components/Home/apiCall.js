import axios from "../../utils/axiosConfig";
import { showAlert } from "../../features/alert/alertSlice";

export const getPosts_apiCall = async (setAllPosts, navigate, dispatch) => {
  try {
    const res = await axios.get("/posts?page=1&pageSize=6");
    const { results, totalResults } = res.data;
    setAllPosts({ totalResults, posts: results });
  } catch (error) {
    const message = error.response.data.message,
      type = "error";
    dispatch(showAlert({ message, type }));
    if (error.response.data.status === "logout") {
      navigate("/auth");
    }
  }
};
