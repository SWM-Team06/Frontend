import React from "react";

import { BodyStyledpost } from "../../styles/styles";

export default function PostBody({ props }) {
  console.log(props);
  return (
    <BodyStyledpost>
      <img src={props.PostUser.image} />
    </BodyStyledpost>
  );
}
