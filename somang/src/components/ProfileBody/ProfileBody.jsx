import React from "react";
import style from "./ProfileBody.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Detail from "../Detail/Detail";
export default function ProfileBody({ props }) {
  const [post_data, setPost_data] = useState(null);
  const [check, setCheck] = useState(false);
  let navigate = useNavigate();
  const onClick = (event) => {
    setCheck(!check);
    setPost_data(event);
  };
  return (
    <>
      <div className={style.img}>
        {props.data.posts.map((item) => (
          <div
            style={{
              float: "left",
              width: 293,
              height: 293,
              marginRight: 18,
              marginBottom: 14,
              marginTop: 14,
            }}
            onClick={() => onClick(item)}
          >
            <img
              style={{
                width: 293,
                height: 293,
              }}
              src={item.img_url}
            />
          </div>
        ))}
      </div>
      {check ? <Detail props={post_data} /> : <></>}
    </>
  );
}
