import axios from "../../../utils/axiosConfig";
import React from "react";
import { useDispatch } from "react-redux";
import { changeImage } from "../../../features/user/userSlice";
const MyInfo = () => {
  const dispatch = useDispatch();

  const [selectedFile, setSelectedFile] = React.useState(null);
  
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("type", "User");
      formData.append("email", "uttam@gmail.com");
      axios
        .post("/image/image-upload", formData)
        .then((response) => {
          const { image } = response.data;
          dispatch(changeImage({ image }));
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
        });
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        name="file"
        id="file"
        onChange={handleFileChange}
      />
      <button
        onClick={handleUpload}
        className="border border-black bg-green-400"
      >
        Upload
      </button>
      {/* <img src={srcImg} alt="profilePic" /> */}
    </div>
  );
};

export default MyInfo;
