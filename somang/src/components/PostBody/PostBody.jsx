import React from "react";

import { BodyStyledpost } from "../../styles/styles";

export default function PostBody({ props }) {
  return (
    <BodyStyledpost>
      <img src={props.img_url} />
    </BodyStyledpost>
  );
}
