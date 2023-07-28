import axios from "../../utils/axiosConfig";
import {
  getUser,
  changeImage,
  updateUserInfo,
} from "../../features/user/userSlice";
import {
  addSocialMedia,
  getSocialMedia,
} from "../../features/social-media/socialMediaSlice";

export const getUser_apiCall = async (navigate, dispatch) => {
  try {
    const res = await axios.get("/auth/getUserDetails");
    const { user } = res.data;
    dispatch(getUser({ user }));
  } catch (error) {
    console.log(error);
    if (error.response.data.status === "logout") navigate("/");
  }
};

export const imageChange_apiCall = async (navigate, dispatch, formData) => {
  try {
    const res = await axios.post("/image/image-upload", formData);
    const { image } = res.data;
    dispatch(changeImage({ image }));
  } catch (error) {
    console.log(error);
    if (error.response.data.status === "logout") navigate("/");
  }
};

export const handleUserInfoUpdate = async (
  navigate,
  dispatch,
  userName,
  userBio
) => {
  try {
    const res = await axios.put("/auth/profile-update", {
      name: userName,
      bio: userBio,
    });
    const { bio, name } = res.data.user;
    dispatch(updateUserInfo({ name, bio }));
  } catch (error) {
    console.log(error);
    if (error.response.data.status === "logout") navigate("/");
  }
};

export const get_SocialMedia = async (navigate, dispatch) => {
  try {
    const res = await axios.get("/social-media/get-social-media");
    const { socialMedia } = res.data;
    dispatch(getSocialMedia({ socialMedia }));
  } catch (error) {
    console.log(error);
    if (error.response.data.status === "logout") navigate("/");
  }
};

export const update_SocialMedia = async (navigate, dispatch, socialLinks) => {
  try {
    const res = await axios.put("/social-media/add-social-media", socialLinks);
    dispatch(addSocialMedia(socialLinks));
  } catch (error) {
    console.log(error);
    if (error.response.data.status === "logout") navigate("/");
  }
};
