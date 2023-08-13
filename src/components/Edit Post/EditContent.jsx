import React from "react";
import { changePost, getPost } from "./apiCall";
import "../Add Post/uploader.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const EditContent = ({ id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [tag, setTag] = React.useState("");
  const [fileName, setFileName] = React.useState("No selected file");
  const [image, setImage] = React.useState(null);
  const [postImage, setPostImage] = React.useState(null);
  const [postDet, setPostDet] = React.useState({
    title: "",
    description: "",
    tags: [],
  });
  React.useEffect(() => {
    getPost(id, setPostDet, navigate, dispatch);
  }, []);

  const handleFileChange = (e) => {
    setPostImage(e.target.files[0]);
    e.target.files[0] && setFileName(e.target.files[0].name);
    if (e.target.files) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleDetailsChange = (e) => {
    setPostDet({ ...postDet, [e.target.name]: e.target.value });
  };

  const handleUpdateTag = () => {
    const newTag = tag.trim().toLowerCase();
    if (newTag !== "" && !postDet.tags.includes(newTag)) {
      setPostDet((prevPostDet) => ({
        ...prevPostDet,
        tags: [...prevPostDet.tags, newTag],
      }));
      setTag("");
    }
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (postImage) {
      var formData = new FormData();
      formData.append("file", postImage);
    }
    changePost(id, postDet, formData, navigate, dispatch);
  };

  return (
    <form onSubmit={handlePostSubmit}>
      <div className="mt-16">
        {/* image change */}
        <div className="px-2">
          <div
            onClick={() => document.querySelector(".input-field").click()}
            className="PostImageUpload sm:mx-auto"
          >
            <label htmlFor="post_ImageUpload" className="font-semibold text-xl">
              Change Blog Image
            </label>
            <input
              type="file"
              accept="image/*"
              name="file"
              id="post_ImageUpload"
              className="input-field"
              hidden
              onChange={handleFileChange}
            />

            {image ? (
              <img src={image} alt={fileName} />
            ) : (
              <>
                <i
                  className="fa-solid fa-cloud-arrow-up"
                  color="#1475cf"
                  size={60}
                ></i>
                <p>Browse Files to upload</p>
              </>
            )}
          </div>

          <section className="uploaded-row my-3 sm:mx-auto px-2">
            <i className="fa-regular fa-file-image" color="#1475cf"></i>
            <span className="upload-content">
              {fileName} -
              <i
                className="fa-sharp fa-solid fa-trash cursor-pointer"
                onClick={() => {
                  setFileName("No selected File");
                  setImage(null);
                  setSelectedFile(null);
                }}
              ></i>
            </span>
          </section>
        </div>
      </div>
      <div className="mt-10">
        {/* change post title */}
        <div className="px-2 w-full sm:w-11/12 md:w-9/12 mx-auto">
          <label
            htmlFor="editPost_title"
            className="font-semibold text-xl sm:text-2xl"
          >
            Change Title
          </label>
          <input
            type="text"
            name="title"
            id="editPost_title"
            value={postDet.title}
            onChange={handleDetailsChange}
            className="w-full rounded-md h-10 font-semibold px-3 outline-blue-300 placeholder:text-gray-600 mt-2"
            placeholder="Enter blog title here..."
            required={true}
          />
        </div>
      </div>
      <div className="mt-10">
        {/* change post description */}
        <div className="px-2 w-full sm:w-11/12 md:w-9/12 mx-auto">
          <label
            htmlFor="editPost_content"
            className="font-semibold text-xl sm:text-2xl"
          >
            Change Post Description
          </label>
          <textarea
            name="description"
            id="editPost_content"
            rows="20"
            placeholder="Enter blog content here..."
            value={postDet.description}
            onChange={handleDetailsChange}
            required={true}
            className="w-full placeholder:text-gray-600 placeholder:font-semibold px-2 py-2 outline-none rounded-md mt-2"
          ></textarea>
        </div>
      </div>
      <div className="mt-7">
        {/* change post tags */}
        <div className="mb-2 flex flex-col items-center w-full sm:w-10/12 md:w-9/12 mx-auto px-2">
          <label
            htmlFor="tagNameAdd"
            className="font-semibold text-xl sm:text-2xl"
          >
            Tags
          </label>
          <input
            type="text"
            id="tagNameAdd"
            placeholder="Enter tag here..."
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="placeholder:text-gray-600 px-2 h-10 rounded-md w-full sm:w-9/12 md:w-1/2 mb-3 outline-blue-300 mt-2"
          />
          <button
            type="button"
            onClick={handleUpdateTag}
            className="flex items-center justify-center px-3 py-2 text-base font-medium leading-6 text-gray-200 whitespace-no-wrap bg-black border-2 border-transparent rounded-lg shadow-sm hover:bg-transparent hover:text-black hover:border-white focus:outline-none"
          >
            Add tags
          </button>
        </div>
        <section className="w-full sm:w-11/12 md:w-9/12 mx-auto px-2">
          <p className="font-semibold text-xl sm:text-2xl mb-2 ms-2">
            All Tags
          </p>
          <div className="flex justify-start flex-wrap bg-gray-300 rounded-xl py-3 px-2 mt-2">
            {postDet.tags.map((tagItem, index) => {
              return (
                <span
                  key={index}
                  className="mx-0.5 my-1 px-4 py-1 bg-gray-600 text-white font-semibold rounded-xl"
                >
                  {tagItem}
                </span>
              );
            })}
          </div>
        </section>
      </div>
      <div className="mt-3">
        {/* change post */}
        <div className="flex justify-center py-4">
          <button
            type="submit"
            className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-white"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-white via-blue-300 to-gray-700"></span>
            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-blue-800 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
            <span className="relative text-white">Update Blog</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditContent;
