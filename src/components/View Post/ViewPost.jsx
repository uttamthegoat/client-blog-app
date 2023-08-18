import React from "react";
import {
  addComment,
  checkEditBlog,
  deleteBlog,
  getComments,
  getPost,
} from "./apiCall";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./ViewPost.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { fieldValue, socialLinks } from "../../assets/constants";
import { selectUser } from "../../features/user/userSlice";

const ViewPost = ({ id }) => {
  const user = useSelector(selectUser);
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
  const [postComments, setPostComments] = React.useState({
    totalComments: 0,
    all_Comments: [],
  });
  const [newComment, setNewComment] = React.useState("");

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment !== "") {
      addComment(id, newComment, navigate, dispatch, setPostComments);
    }
  };

  React.useEffect(() => {
    getPost(navigate, id, setPostItem, setAuthor, dispatch);
    getComments(id, setPostComments, navigate, dispatch);
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
          {postItem.image && (
            <LazyLoadImage
              src={postItem.image}
              alt="post_Image"
              className="rounded-lg cursor-pointer"
            />
          )}
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
      <div className="mt-10">
        {/* comments */}
        <div className="w-full sm:w-10/12 md:w-9/12 mx-auto px-2">
          {/* add comment */}
          <form onSubmit={handleAddComment}>
            <label
              htmlFor="comment_Post"
              className="font-semibold text-lg sm:text-xl"
            >
              Write your comment
            </label>
            <textarea
              name="comment"
              id="comment_Post"
              rows="1"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write your comment..."
              className="mt-2 w-full h-10 placeholder:text-gray-700 outline-none rounded-lg p-2 bg-blue-200"
            ></textarea>
            <button
              type="submit"
              className="border-2 border-black rounded-md px-3 py-2 text-sm font-semibold hover:bg-black hover:text-sky-400 mx-auto block mt-2"
            >
              Add comment
            </button>
          </form>
        </div>
        <div className="w-full sm:w-10/12 md:w-9/12 mx-auto mt-8 rounded-md px-2">
          {/* all comments */}
          <p className="font-semibold text-2xl text-center underline mb-6">
            Total Comments:- {postComments.totalComments}
          </p>
          {postComments.all_Comments.map((commentItem, index) => {
            return (
              <div key={index} className="mb-2">
                <div className="flex flex-col sm:flex-row">
                  <span className="flex items-center bg-[#85b1f2] font-semibold rounded-t-lg sm:rounded-none sm:rounded-s-lg p-2 border-b-2 sm:border-b-0 sm:border-e-2 border-black">
                    {commentItem.user}
                  </span>
                  <pre className="p-2 whitespace-pre-wrap rounded-b-lg sm:rounded-none sm:rounded-e-lg bg-[#85b1f2] flex-grow">
                    {commentItem.comment}
                  </pre>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ViewPost;
