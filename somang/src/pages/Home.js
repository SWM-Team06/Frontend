import Post from "../components/Post/Post";
import Header from "../components/Topbar/Topbar";
import { useGetFeed } from "../hooks/usehook";
import { useNavigate } from "react-router-dom";

// 들어오는 임시 데이터들 나중에 변경 예정
export default function Home({ isLogin, setIsLogin, hascode, setHascode }) {
  const { data, isLoading } = useGetFeed();
  console.log(data);
  let navigate = useNavigate();
  const navigation = () => {
    navigate("/login");
  };
  return (
    <>
      {isLogin && (
        <>
          <Header></Header>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {/* <Post props={data} /> */}
          </div>
        </>
      )}
      {!isLogin && navigation()}
    </>
  );
}
