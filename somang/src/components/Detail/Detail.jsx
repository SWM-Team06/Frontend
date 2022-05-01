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
import { useQuery } from "react-query";
import axios from "axios";

const getDetail = async (id) => {
  const result = await axios.get(`http://127.0.0.1:8000/post/detail/${id}`, {
    params: {
      token: "reverseplane123_1234asdf",
    },
  });

  return result.data;
};
const useGetDetail = (id) => {
  return useQuery(["getDetail", id], () => getDetail(id));
};
function Detail({ props }) {
  console.log(props.post_id);
  const { data: getdetaildata, isLoading } = useGetDetail(props.post_id);
  if (!isLoading) {
    console.log(getdetaildata);
    return (
      <div className="container">
        <div className="card">
          <img src={getdetaildata.data.img_url} alt="" className="image" />
          <div className="section">
            <img
              src="https://storage.cloud.google.com/somang_storage_data/profile/dog_user.jpg"
              alt=""
              className="logo_image"
            />
            <div className="team_name">{getdetaildata.data.team_name}</div>
            <div className="desc">
              소마 활동을 기록할 수 있는 플랫폼 입니다~!
            </div>
            <div className="content">{getdetaildata.data.content}</div>
          </div>
          <FavoriteBorder className="heart" />
          <div className="like_num">
            {getdetaildata.data.like_count}명이 좋아합니다!
          </div>
          <div className="upload_at">{getdetaildata.data.uploded_at}</div>
        </div>
      </div>
    );
  }
}

export default Detail;
