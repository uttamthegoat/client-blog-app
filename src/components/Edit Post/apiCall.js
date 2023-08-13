import { showAlert } from "../../features/alert/alertSlice";
import axios from "../../utils/axiosConfig";

export const getPost = async (id, setPostDet, navigate, dispatch) => {
  try {
    const res = await axios.get(`/posts/getPost/${id}`);
    const { title, description } = res.data.post,
      { tags } = res.data;
    setPostDet({ title, description, tags });
    console.log(res.data);
  } catch (error) {
    console.log(error);
    if (error.response.data.status === "logout") {
      const message = error.response.data.message,
        type = "error";
      dispatch(showAlert({ message, type }));
      navigate("/auth");
    }
  }
};

export const changePost = async (id, postDet, formData, navigate, dispatch) => {
  try {
    let success;
    if (formData) {
      formData.append("id", id);
      const res3 = await axios.post("/image/image-upload-post", formData);
      success = res3.data.success;
      console.log(res3.data.message);
    }
    const res = await axios.put(`/posts/editPost/${id}`, postDet);
    success = res.data.success;
    const { message } = res.data;
    console.log(res.data);
    if (success) {
      const type = "success";
      dispatch(showAlert({ message, type }));
      navigate(`/post-item/${id}`);
    }
  } catch (error) {
    console.log(error);
    if (error.response.data.status === "logout") {
      const message = error.response.data.message,
        type = "error";
      dispatch(showAlert({ message, type }));
      navigate("/auth");
    }
  }
};
