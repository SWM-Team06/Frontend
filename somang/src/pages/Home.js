import Post from "../components/Post/Post";
import Header from "../components/Topbar/Topbar";
import { useGetFeed } from "../hooks/usehook";
import { useNavigate } from "react-router-dom";

// 들어오는 임시 데이터들 나중에 변경 예정
export default function Home() {
  const { data: feed, isLoading } = useGetFeed();
  let navigate = useNavigate();
  if (!isLoading) {
    return (
      <>
        <Header></Header>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            {feed.data.posts.map((item) => (
              <Post key={item.post_id} props={item} />
            ))}
          </div>
          {/* <Post props={data} /> */}
        </div>
      </>
    );
  }
}
