import React from "react";
import {
  Search,
  Person,
  Send,
  Chat,
  Notifications,
  Home,
  FavoriteBorder,
  InsertEmoticon,
} from "@material-ui/icons";
import "./Detail.css";

const data = {
  status: 200,
  success: true,
  data: {
    detail: {
      post_id: 42,
      project_name: "걸어다니는 비행기",
      team_name: "비행비행",
      img_url:
        "https://storage.cloud.google.com/somang_storage_data/img/flower1.jpg",
      like_count: 31,
      content: "1주차에는비행기가걸어다녀요",
      uploded_at: "2022-06-12 08:55:23",
      liked: true,
    },
  },
};

const getApi = () => {
  //
};

function Detail({ props }) {
  console.log(props.post_id);
  return (
    <div className="container">
      <div className="card">
        <img
          src="https://storage.cloud.google.com/somang_storage_data/img/flower1.jpg"
          alt=""
          className="image"
        />
        <div className="section">
          <img
            src="https://storage.cloud.google.com/somang_storage_data/profile/dog_user.jpg"
            alt=""
            className="logo_image"
          />
          <div className="team_name">{data.data.detail.team_name}</div>
          <div className="desc">소마 활동을 기록할 수 있는 플랫폼 입니다~!</div>
          <div className="content">{data.data.detail.content}</div>
        </div>
        <FavoriteBorder className="heart" />
        <div className="like_num">
          {data.data.detail.like_count}명이 좋아합니다!
        </div>
        <div className="upload_at">{data.data.detail.uploded_at}</div>
      </div>
    </div>
  );
}

export default Detail;
