import React from "react";
import PostBody from "../PostBody/PostBody";
import PostFooter from "../PostFooter/PostFooter";
import PostHeader from "../PostHeader/PostHeader";

export default function Post({ props }) {
  console.log(props);
  return (
    <>
      <PostHeader props={props} />
      <PostBody props={props} />
      <PostFooter props={props} />
    </>
  );
}
