import axios from "../../utils/axiosConfig";
import { showAlert } from "../../features/alert/alertSlice";

export const addPost = async (postDet, tags, formData, navigate, dispatch) => {
  try {
    let success;
    let msg;
    // creating post
    const res1 = await axios.post("/posts/createPost", postDet);
    const postId = res1.data.result._id;
    success = res1.data.success;
    msg = res1.data.message;

    // creating tag
    const res2 = await axios.post("/tags/add-tag", { tag: tags, id: postId });
    success = res2.data.success;

    // add image
    if (formData) {
      formData.append("id", postId);
      const res3 = await axios.post("/image/image-upload-post", formData);
      success = res3.data.success;
    }
    if (success) {
      const message = res1.data.message,
        type = "success";
      dispatch(showAlert({ message, type }));
      navigate("/user-profile");
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

// if(success){
//     navigate('/profile')
// }
