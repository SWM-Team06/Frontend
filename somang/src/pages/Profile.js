import Header from "../components/Topbar/Topbar";
import ProfileHeader from "../components/ProfileHeader/ProfileHeader";
import ProfileBody from "../components/ProfileBody/ProfileBody";
import { useGetMyPage } from "../hooks/usehook";

export default function Profile() {
  const { data: profile, isLoading } = useGetMyPage();
  if (!isLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <Header></Header>
          <div>
            <ProfileHeader props={profile} />
            <ProfileBody props={profile} />
          </div>
        </div>
      </div>
    );
  }
}
