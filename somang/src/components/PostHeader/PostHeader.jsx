import React from "react";

import { HeaderStyledpost } from "../../styles/styles";

export default function PostHeader({ props }) {
  console.log(props);
  return (
    <HeaderStyledpost>
      <img src={props.PostUser.image} />
      <span>{props.PostUser.teamName}</span>
    </HeaderStyledpost>
  );
}
