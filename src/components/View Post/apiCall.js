import { showAlert } from "../../features/alert/alertSlice";
import axios from "../../utils/axiosConfig";

export const getPost = async (
  navigate,
  id,
  setPostItem,
  setAuthor,
  dispatch
) => {
  try {
    const res = await axios.get(`/posts/getPost/${id}`);
    const { title, description, image } = res.data.post,
      { tags } = res.data;
    setPostItem({ title, description, image, tags });
    var { _id, ...author } = res.data.author,
      { _id, ...socialMedia } = res.data.socialMedia;
    setAuthor({ ...author, socialMedia });
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

export const checkEditBlog = async (id, navigate, dispatch) => {
  try {
    const res = await axios.get(`/posts/check-user/${id}`);
    if (res.data.success) {
      navigate(`/edit-post/${id}`);
    }
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

export const deleteBlog = async (id, navigate, dispatch) => {
  try {
    const res = await axios.delete(`/posts/deletePost/${id}`);
    const { message } = res.data;
    if (res.data.success) {
      const type = "success";
      dispatch(showAlert({ message, type }));
      navigate("/");
    }
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
