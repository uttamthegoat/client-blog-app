import React from "react";
import { checkEditBlog, deleteBlog, getPost } from "./apiCall";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./ViewPost.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { fieldValue, socialLinks } from "../../assets/constants";

const ViewPost = ({ id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [postItem, setPostItem] = React.useState({
    title: "",
    description: "",
    image: "",
    tags: [],
  });
  const [author, setAuthor] = React.useState({
    name: "",
    email: "",
    image: "",
    socialMedia: {},
  });

  React.useEffect(() => {
    getPost(navigate, id, setPostItem, setAuthor, dispatch);
  }, []);

  const handleEditBlog = () => {
    checkEditBlog(id, navigate, dispatch);
  };

  const handleDeleteBlog = () => {
    deleteBlog(id, navigate, dispatch);
  };

  return (
    <div className="my-12">
      <div className="flex justify-end">
        {/* buttons */}
        <button
          onClick={handleEditBlog}
          className="px-3 py-2 font-semibold rounded-md shadow-md text-md sm:text-lg border border-green-500 text-green-500 hover:text-black bg-black hover:bg-green-600 me-3"
        >
          Edit Blog
        </button>
        <button
          onClick={handleDeleteBlog}
          className="px-3 py-2 font-semibold rounded-md shadow-md text-md sm:text-lg border border-red-500 text-red-500 hover:text-black bg-black hover:bg-red-600 me-3"
        >
          Delete Blog
        </button>
      </div>
      <div className="my-3 pt-2">
        {/* title */}
        <h1 className="text-2xl md:text-3xl font-bold text-center underline text-with-shadow">
          {postItem.title}
        </h1>
      </div>
      <div className="my-2 p-2">
        {/* image */}
        <div className="max-w-[700px] mx-auto">
          <LazyLoadImage
            src={postItem.image}
            alt="post_Image"
            className="rounded-lg cursor-pointer"
          />
        </div>
      </div>
      <div>
        {/* author's details */}
        <section className="w-10/12 flex flex-col md:flex-row md:items-center md:justify-between mx-auto bg-blue-100 rounded-xl px-2">
          <div className="flex justify-center my-2">
            <div className="w-[90px]">
              <LazyLoadImage
                src={author.image}
                alt="what"
                className="rounded-md"
              />
            </div>
            <div className="flex flex-col justify-center ps-3 text-lg font-semibold">
              <span>{author.name}</span>
              <span>{author.email}</span>
            </div>
          </div>
          <div className="flex justify-center my-2">
            {socialLinks.map((link) => {
              return (
                <a
                  key={link.id}
                  target="_blank"
                  href={fieldValue(author.socialMedia, link.alt) ?? "#"}
                  disabled={fieldValue(author.socialMedia, link.alt)}
                  className={`mx-2 flex items-center justify-center rounded-xl ${
                    fieldValue(author.socialMedia, link.alt)
                      ? ""
                      : "pointer-events-none opacity-25"
                  }`}
                >
                  <LazyLoadImage
                    src={link.src}
                    alt={link.alt}
                    className="w-14"
                  />
                </a>
              );
            })}
          </div>
        </section>
        <p className="text-xl text-center font-bold mt-3">
          <span className="fontasstrabold text-xl"> ▲ </span>Author
        </p>
      </div>
      <div className="my-8 px-2">
        {/* tags */}
        <div className="w-full sm:w-10/12 md:w-2/3 mx-auto bg-blue-300 px-3 py-4 rounded-lg flex flex-wrap justify-center items-center">
          {postItem.tags.map((tag, index) => {
            return (
              <span
                key={index}
                className="mx-2 my-1 px-3 py-1 bg-blue-600 font-semibold rounded-xl text-white cursor-pointer"
              >
                {tag}
              </span>
            );
          })}
        </div>
        <p className="text-center font-bold text-xl mt-3"> ▲ All Tags</p>
      </div>
      <div>
        {/* description */}
        <div className="w-full sm:w-11/12 md:w-9/12 mx-auto px-2">
          <pre className="whitespace-pre-wrap font-[500] text-md bg-blue-300 px-4 sm:px-8 py-6 sm:py-10 rounded-md">
            {postItem.description}
          </pre>
          <p className="text-center font-bold text-xl mt-3"> ▲ Description</p>
        </div>
      </div>
    </div>
  );
};

export default ViewPost;
