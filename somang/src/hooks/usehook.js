import axios from "axios";
import { useQuery } from "react-query";
import { GET_FEED, GET_MYPAGE } from "../constants/url";

const getMyPage = async () => {
  const result = await axios.get(GET_MYPAGE);
  return result.data;
};

export const useGetMyPage = () => {
  return useQuery("Mypage", getMyPage);
};

const getFeed = async () => {
  const result = await axios.get(GET_MYPAGE);
  return result.data;
};

export const useGetFeed = () => {
  return useQuery("getFeed", getFeed);
};
