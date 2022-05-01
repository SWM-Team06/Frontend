import React from "react";
import style from "./ProfileBody.module.css";
import { useNavigate } from "react-router-dom";

export default function ProfileBody({ props }) {
  let navigate = useNavigate();
  const onClick = (event) => {
    navigate("/Detail", { post_id: event.post_id });
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
    </>
  );
}
