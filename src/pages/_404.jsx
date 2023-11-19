import underconstruction from "../assets/underconstruction.svg";
const _404 = () => {
  return (
    <div>
      NotFound
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
          <img
            src={underconstruction}
            alt="underconstruction"
            width={"250px"}
          />
        </div>
        <label>Under Construction</label>
      </div>
    </div>
  );
};
export default _404;
