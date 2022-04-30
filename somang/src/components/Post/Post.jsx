import React from "react";
import { PostStyled } from "../../styles/styles";
import PostBody from "../PostBody/PostBody";
import PostFooter from "../PostFooter/PostFooter";
import PostHeader from "../PostHeader/PostHeader";

export default function Post({ props }) {
  return (
    <PostStyled>
      <PostHeader props={props} />
      <PostBody props={props} />
      <PostFooter props={props} />
    </PostStyled>
  );
}
