import axios from "../../utils/axiosConfig";

export const getPost = async (navigate, id, setPostItem, setAuthor) => {
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
    if (error.response.data.status === "logout") {
      navigate("/auth");
    }
  }
};
