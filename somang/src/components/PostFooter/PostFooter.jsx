import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {
  CommentStyledpost,
  HeartStyled,
  TitleSpanStyledpost,
  TitleStyledpost,
  TitleTeam,
} from "../../styles/styles";
import { Hidden } from "@material-ui/core";
const onelineNumber = 40;
const countline = (data, onelineNumber) => {
  var len = Math.ceil(data.length / onelineNumber) || 1;
  return len;
};

export default function PostFooter({ props }) {
  const [heart, setHeart] = useState(props.click);
  const [text, setText] = useState("");
  const [scroll, setScroll] = useState("hidden");
  const [moreview, setMoreview] = useState(false);

  const linenumber = props.content.split("\n").length;
  const textSetValue = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };
  const Stringline = countline(text, onelineNumber);

  useEffect(() => {
    Stringline >= 4 ? setScroll("scroll") : setScroll("hidden");
  }, [text]);

  const onClick = () => {
    setHeart(!heart);
  };
  const onMore = () => {
    setMoreview(!moreview);
  };
  return (
    <>
      <TitleStyledpost length={moreview ? linenumber : 1}>
        <TitleTeam>{props.team_name}</TitleTeam>
        {moreview ? (
          <TitleSpanStyledpost length={linenumber}>
            {props.content}
          </TitleSpanStyledpost>
        ) : (
          <TitleSpanStyledpost length={1}>
            {props.content.slice(0, 5)}...
          </TitleSpanStyledpost>
        )}
        {moreview ? (
          <></>
        ) : (
          <span style={{ color: "gray" }} onClick={onMore}>
            더보기
          </span>
        )}
      </TitleStyledpost>
      <CommentStyledpost length={Stringline}>
        <HeartStyled>
          {heart ? (
            <FavoriteIcon style={{ fontSize: 32 }} onClick={onClick} />
          ) : (
            <FavoriteBorderIcon style={{ fontSize: 32 }} onClick={onClick} />
          )}
        </HeartStyled>
      </CommentStyledpost>
    </>
  );
}
