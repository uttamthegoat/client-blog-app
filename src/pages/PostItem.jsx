import React from "react";
import { useParams } from "react-router-dom";
import ViewPost from "../components/View Post/ViewPost";

const PostItem = () => {
  const { id } = useParams();

  return (
    <div>
      <ViewPost id={id} />
    </div>
  );
};

export default PostItem;

