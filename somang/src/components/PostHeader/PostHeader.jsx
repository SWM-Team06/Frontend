import React from "react";

import {
  HeaderStyledpost,
  HeaderleftStyledpost,
  HeaderRightStyledpost,
} from "../../styles/styles";
const userId = 22;
export default function PostHeader({ props }) {
  console.log(props);
  return (
    <HeaderStyledpost>
      <HeaderleftStyledpost>
        <img src={props.PostUser.image} />
        <span>{props.PostUser.teamName}</span>
      </HeaderleftStyledpost>
      <HeaderRightStyledpost>
        {props.PostUser.id === userId ? "삭제" : "..."}
      </HeaderRightStyledpost>
    </HeaderStyledpost>
  );
}
