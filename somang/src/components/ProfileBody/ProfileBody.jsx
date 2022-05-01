import React from "react";
import style from "./ProfileBody.module.css";

export default function ProfileBody({ props }) {
  const onClick = (event) => {
    console.log(event.post_id);
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
