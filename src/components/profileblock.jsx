import Profile from "../assets/profile.svg";
const ProfileBlock = () => {
  return (
    <div className="profile">
      <img src={Profile} alt="" />
      <div className="name">Username</div>
    </div>
  );
};

export default ProfileBlock;
