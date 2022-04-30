import Post from "../components/Post/Post";
import Header from "../components/Topbar/Topbar";

// 들어오는 임시 데이터들 나중에 변경 예정
const data = {
  PostUser: {
    id: 12,
    image: "https://picsum.photos/32/32",
    teamName: "somang",
  },
  imgURL: "https://picsum.photos/250/250",
  click: false,
  commentTitle: `중간 끝 라면 시작 \n어지럽다 어지러워

개꿀 개꿀
호
  `,
};
export default function Home() {
  return (
    <>
      <Header />
      <Post props={data} />
    </>
  );
}
