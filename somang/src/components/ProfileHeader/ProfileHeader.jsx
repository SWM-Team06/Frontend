import React from "react";
import style from "./ProfileHeader.module.css";
export default function ProfileHeader({ props }) {
  console.log(style);
  console.log(props.data);
  return (
    <div className={style.main}>
      <div className={style.header}>
        <img
          style={{
            width: 150,
            height: 150,
            borderRadius: "50%",
            marginRight: 30,
          }}
          src={props.data.profile_url}
        />
      </div>
      <div>
        <p className={style.team_name}>{props.data.team_name}</p>
        <p className={style.project_name}>팀명 :{props.data.project_name}</p>
        <p className="description">설명 : {props.data.description}</p>
      </div>
    </div>
  );
}
