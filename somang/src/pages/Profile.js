import Header from "../components/Topbar/Topbar";
import ProfileHeader from "../components/ProfileHeader/ProfileHeader";
import ProfileBody from "../components/ProfileBody/ProfileBody";
import { useGetMyPage } from "../hooks/usehook";
const data = {
  status: 200,
  success: true,
  data: {
    team_id: 6,
    team_name: "somang",
    project_name: "프로젝트 진행상항 공유 플랫폼",
    description: "소마 활동을 기록할 수 있는 플랫폼 입니다~!",
    profile_url:
      "https://storage.cloud.google.com/somang_storage_data/profile/sleep_user.jpg",
    posts: [
      {
        post_id: 38,
        img_url: "https://googlecloud.com/...",
      },
      {
        post_id: 21,
        img_url: "https://googlecloud.com/…",
      },
      {
        post_id: 2,
        img_url: "https://googlecloud.com/…",
      },
      {
        post_id: 2,
        img_url: "https://googlecloud.com/…",
      },
      {
        post_id: 2,
        img_url: "https://googlecloud.com/…",
      },
      {
        post_id: 2,
        img_url: "https://googlecloud.com/…",
      },
    ],
  },
};
export default function profile() {
  //const { data, isLoading } = useGetMyPage();
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <Header></Header>
        <div>
          <ProfileHeader props={data} />
          <ProfileBody props={data} />
        </div>
      </div>
    </div>
  );
}
