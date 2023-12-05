import UploadSVG from "../../assets/upload-cloud.svg";
import { useRef } from "react";
const InstaPost = () => {
  const fileInput = useRef(null);
  const handleClick = () => {
    fileInput.current.click();
  };
  const onContentChange = (e) => {
    console.log(e.target.files);
  };
  return (
    <div id="insta-post">
      <div className="upload" onClick={handleClick}>
        <img src={UploadSVG} alt="Upload" />
        <input
          type="file"
          name="file"
          id="file"
          style={{ display: "none" }}
          ref={fileInput}
          onChange={onContentChange}
        />
      </div>
    </div>
  );
};
export default InstaPost;
