import axios from "../../utils/axiosConfig";

export const searchString = async (
  navigate,
  dispatch,
  searchValue,
  setSearchPosts
) => {
  try {
    const res = await axios.get(
      `/search-tags/${searchValue}?page=1&pageSize=6`
    );
    // console.log(res.data);
    const { totalResults, results } = res.data;
    setSearchPosts({ totalResults, results });
  } catch (error) {
    const message = error.response.data.message,
      type = "error";
    dispatch(showAlert({ message, type }));
    if (error.response.data.status === "logout") {
      navigate("/auth");
    }
  }
};
