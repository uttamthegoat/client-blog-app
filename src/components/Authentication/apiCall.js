import axios from "../../utils/axiosConfig";

export const signup_User = (loginDet, navigate) => {
  axios
    .post("/auth/signup", loginDet)
    .then((res) => {
      if (res.data.success) {
        console.log(res.data.message);
        navigate("/home");
      }
    })
    .catch((error) => {
      console.log(error);
      alert(error.response.data.message);
    });
};

export const login_User = (loginDet, navigate) => {
  axios
    .post("http://localhost:5002/api/v1/blog-app/auth/login", loginDet)
    .then((res) => {
      if (res.data.success) {
        console.log(res.data.message);
        navigate("/home");
      }
    })
    .catch((error) => {
      console.log(error);
      // alert(error.response.data.message);
    });
};
