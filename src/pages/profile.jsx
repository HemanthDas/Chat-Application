import underconstruction from "../assets/underconstruction.svg";
const Profile = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div className="some">
        <img src={underconstruction} alt="underconstruction" width={"250px"} />
      </div>
      <label>Under Construction</label>
    </div>
  );
};

export default Profile;
