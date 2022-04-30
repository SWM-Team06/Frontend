import React from "react";

import {
  HeaderStyledpost,
  HeaderleftStyledpost,
  HeaderRightStyledpost,
} from "../../styles/styles";
const userId = 22;
export default function PostHeader({ props }) {
  return (
    <HeaderStyledpost>
      <HeaderleftStyledpost>
        <img src={props.profile_url} />
        <span>{props.team_name}</span>
      </HeaderleftStyledpost>
      <HeaderRightStyledpost>
        {props.post_id === userId ? "삭제" : "..."}
      </HeaderRightStyledpost>
    </HeaderStyledpost>
  );
}
