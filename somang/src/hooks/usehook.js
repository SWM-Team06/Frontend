import axios from "axios";
import { useQuery } from "react-query";
import { GET_FEED, GET_MYPAGE } from "../constants/url";

const getMyPage = async () => {
  const result = await axios.get(GET_MYPAGE, {
    params: {
      token: "reverseplane123_1234asdf",
    },
  });
  return result.data;
};

export const useGetMyPage = () => {
  return useQuery("Mypage", getMyPage);
};

const getFeed = async () => {
  const result = await axios.get(GET_FEED, {
    params: {
      token: "reverseplane123_1234asdf",
    },
  });
  return result.data;
};

export const useGetFeed = () => {
  return useQuery("getFeed", getFeed);
};
