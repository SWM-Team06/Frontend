import Post from "../components/Post/Post";
import Header from "../components/Topbar/Topbar";
// 들어오는 임시 데이터들 나중에 변경 예정
const data = {
  status: 200,
  success: true,
  message: "피드 불러오기 성공",
  data: {
    posts: [
      {
        post_id: 1,
        team_name: "벌이될래",
        profile_url:
          "https://storage.cloud.google.com/somang_storage_data/profile/flower_user.jpg",
        img_url:
          "https://storage.cloud.google.com/somang_storage_data/img/flower1.jpg",
        like_count: 4,
        content: "1주차입니다. 모두들 화이팅",
        liked: false,
      },
      {
        post_id: 2,
        team_name: "멍멍개",
        profile_url:
          "https://storage.cloud.google.com/somang_storage_data/profile/dog_user.jpg",
        img_url:
          "https://storage.cloud.google.com/somang_storage_data/img/dog1.jpg",
        like_count: 1,
        content: "우리 팀은 개가 좋아서 통역을 하기로했어요! ",
        liked: false,
      },
      {
        post_id: 3,
        team_name: "안날아요",
        profile_url:
          "https://storage.cloud.google.com/somang_storage_data/profile/airplane_user.jpg",
        img_url:
          "https://storage.cloud.google.com/somang_storage_data/img/airplane1.jpg",
        like_count: 1,
        content: "좋은 팀원분들과 비행기를 만들기로했어요! ",
        liked: false,
      },
      {
        post_id: 4,
        team_name: "벌이될래",
        profile_url:
          "https://storage.cloud.google.com/somang_storage_data/profile/flower_user.jpg",
        img_url:
          "https://storage.cloud.google.com/somang_storage_data/img/flower2.jpg",
        like_count: 1,
        content: "꽃에 대한 자료들을 수집하고있습니다. ",
        liked: false,
      },
      {
        post_id: 5,
        team_name: "안날아요",
        profile_url:
          "https://storage.cloud.google.com/somang_storage_data/profile/airplane_user.jpg",
        img_url:
          "https://storage.cloud.google.com/somang_storage_data/img/airplane2.jpg",
        like_count: 0,
        content: "벌써 설계가 얼추 끝나갑니다. ",
        liked: false,
      },
      {
        post_id: 6,
        team_name: "벌이될래",
        profile_url:
          "https://storage.cloud.google.com/somang_storage_data/profile/flower_user.jpg",
        img_url:
          "https://storage.cloud.google.com/somang_storage_data/img/flower3.jpg",
        like_count: 0,
        content: "꽃 사진 학습시키는중 ",
        liked: false,
      },
      {
        post_id: 7,
        team_name: "안날아요",
        profile_url:
          "https://storage.cloud.google.com/somang_storage_data/profile/airplane_user.jpg",
        img_url:
          "https://storage.cloud.google.com/somang_storage_data/img/airplane3.jpg",
        like_count: 0,
        content: "굴러다니는 비행기 모형을 만들어봤어요! ",
        liked: false,
      },
      {
        post_id: 8,
        team_name: "멍멍개",
        profile_url:
          "https://storage.cloud.google.com/somang_storage_data/profile/dog_user.jpg",
        img_url:
          "https://storage.cloud.google.com/somang_storage_data/img/dog2.jpg",
        like_count: 0,
        content: "오늘부터 앱 만들기 시작합니다 ",
        liked: false,
      },
      {
        post_id: 9,
        team_name: "벌이될래",
        profile_url:
          "https://storage.cloud.google.com/somang_storage_data/profile/flower_user.jpg",
        img_url:
          "https://storage.cloud.google.com/somang_storage_data/img/flower4.jpg",
        like_count: 0,
        content:
          "무슨무슨 기술을 써서 꽃 사진에 외모점수 부여하는데 성공했습니다. ",
        liked: false,
      },
      {
        post_id: 10,
        team_name: "불면증",
        profile_url:
          "https://storage.cloud.google.com/somang_storage_data/profile/sleep_user.jpg",
        img_url:
          "https://storage.cloud.google.com/somang_storage_data/img/sleep1.jpg",
        like_count: 2,
        content:
          " 다들 글 열심히쓰시길래 한문장 적어봅니다. 다같이 수면파 연구중 ",
        liked: false,
      },
      {
        post_id: 11,
        team_name: "안날아요",
        profile_url:
          "https://storage.cloud.google.com/somang_storage_data/profile/airplane_user.jpg",
        img_url:
          "https://storage.cloud.google.com/somang_storage_data/img/airplane4.jpg",
        like_count: 1,
        content: "비행기가 부서져서 이렇게저렇게 고쳤어요! ",
        liked: false,
      },
    ],
  },
};
export default function Home() {
  return (
    <>
      <Header></Header>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          {data.data.posts.map((item) => (
            <Post key={item.post_id} props={item} />
          ))}
        </div>
        {/* <Post props={data} /> */}
      </div>
    </>
  );
}
