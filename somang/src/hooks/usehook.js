import axios from "axios";
import { useQuery } from "react-query";
import { GET_FEED, GET_MYPAGE } from "../constants/url";

const getMyPage = async () => {
  const result = await axios.get(GET_MYPAGE, {
    params: {
      token:
        "team06/03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4",
    },
  });

  console.log(result);
  return result.data;
};

export const useGetMyPage = () => {
  return useQuery("Mypage", getMyPage);
};

const getFeed = async () => {
  const result = await axios.get(GET_FEED, {
    params: {
      token:
        "team06/03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4",
    },
  });
  return result.data;
};

export const useGetFeed = () => {
  return useQuery("getFeed", getFeed);
};
