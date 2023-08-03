import React from "react";
import "./uploader.css";
import { addPost } from "./apiCall";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const PostBody = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [postDet, setPostDet] = React.useState({ title: "", description: "" });
  const [tagValue, setTagValue] = React.useState("");
  const [tag, setTag] = React.useState([]);
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [image, setImage] = React.useState(null);
  const [fileName, setFileName] = React.useState("No selected file");

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    console.log(e.target.files[0]);
    e.target.files[0] && setFileName(e.target.files[0].name);
    if (e.target.files) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleAddTag = () => {
    const newTag = tagValue.trim().toLowerCase();
    if (
      newTag !== "" &&
      !tag.map((item) => item.toLowerCase()).includes(newTag)
    ) {
      setTag([...tag, newTag]);
      setTagValue("");
    }
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (selectedFile) {
      var formData = new FormData();
      formData.append("file", selectedFile);
    }
    addPost(postDet, tag, formData, navigate, dispatch);
  };

  return (
    <>
      <form onSubmit={handlePostSubmit} className="my-14">
        <div className="px-2">
          {/* image upload */}
          <div
            onClick={() => document.querySelector(".input-field").click()}
            className="PostImageUpload md:mx-auto"
          >
            <label htmlFor="post_ImageUpload">Add Blog Image</label>
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
        <div className="flex flex-col my-7 px-2">
          {/* title */}
          <label
            htmlFor="Post_title"
            className="font-bold text-3xl mb-2 sm:w-10/12 sm:mx-auto"
          >
            Blog Title
          </label>
          <input
            type="text"
            name="title"
            id="Post_title"
            value={postDet.title}
            onChange={(e) => setPostDet({ ...postDet, title: e.target.value })}
            placeholder="Enter blog title here..."
            required={true}
            className="block h-10 sm:w-10/12 sm:mx-auto rounded-sm px-2 py-1 outline-none placeholder:text-gray-600 shadow-lg shadow-gray-300 font-semibold"
          />
        </div>
        <div className="flex flex-col my-7 px-2">
          {/* content */}
          <label
            htmlFor="Blog_description"
            className="font-bold text-3xl mb-2 sm:w-10/12 sm:mx-auto"
          >
            Blog Content
          </label>
          <textarea
            name="description"
            id="Blog_description"
            value={postDet.description}
            onChange={(e) =>
              setPostDet({ ...postDet, description: e.target.value })
            }
            // cols="180"
            rows="30"
            placeholder="Enter blog content here..."
            required={true}
            className="block sm:mx-auto sm:w-10/12 placeholder:text-gray-600 placeholder:font-semibold px-2 py-2 outline-none rounded-md"
          ></textarea>
        </div>
        <div className="flex flex-col my-7 px-2">
          {/* tags */}
          <div className="flex flex-col mx-auto w-full sm:w-3/4 md:w-[450px]">
            <label
              htmlFor="Post_tagValue"
              className="font-bold text-3xl mb-2 sm:w-10/12 sm:me-auto"
            >
              Enter the tags
            </label>
            <input
              type="text"
              name="tagValue"
              id="Post_tagValue"
              value={tagValue}
              onChange={(e) => setTagValue(e.target.value)}
              placeholder="Enter tag here..."
              className="block h-10 rounded-sm px-2 py-1 mb-2 outline-none placeholder:text-gray-600 shadow-lg shadow-gray-300 font-semibold"
            />
            <button
              type="button"
              onClick={handleAddTag}
              className="px-4 py-2 mx-auto w-36 text-base font-medium text-white bg-blue-600 border border-blue-700 rounded-md shadow-md hover:bg-blue-700 outline-none"
            >
              Add Tag
            </button>
          </div>
          <section className="flex flex-wrap justify-center mx-auto my-5 sm:w-[450px]">
            {tag.map((item, index) => (
              <span key={index} className="mx-0.5 my-1 px-4 py-1 bg-gray-600 text-white font-semibold rounded-xl">{item}</span>
            ))}
          </section>
        </div>
        <div className="my-5">
          {/* save post */}
          <button
            type="submit"
            className="block relative px-6 py-3 font-bold text-white hover:text-black rounded-lg group mx-auto"
          >
            <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-black ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-gray-400 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen text-white hover:text-black"></span>
            <span className="relative">
              <i className="fa-solid fa-plus"></i>Add Post
            </span>
          </button>
        </div>
      </form>
    </>
  );
};

export default PostBody;
