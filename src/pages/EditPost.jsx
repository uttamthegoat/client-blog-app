import React from "react";
import { useParams } from "react-router-dom";
import EditContent from "../components/Edit Post/EditContent";

const EditPost = () => {
  const { id } = useParams();
  return (
    <div>
      <EditContent id={id} />
    </div>
  );
};

export default EditPost;
