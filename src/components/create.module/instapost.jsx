import UploadSVG from "../../assets/upload-cloud.svg";

import { useRef, useState } from "react";
import ProfileBlock from "../profileblock";
const InstaPost = () => {
  const fileInput = useRef(null);
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState(null);
  let image = file ? URL.createObjectURL(file) : UploadSVG;
  const handleClick = () => {
    fileInput.current.click();
  };
  const onContentChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };
  const handleCaption = (e) => {
    const text = e.target.value;
    if (text.length > 1000) return;
    setCaption(text);
    setCount(text.length);
  };

  const [count, setCount] = useState(0);

  return (
    <div id="insta-post">
      <div className="frame">
        <div className="upload" onClick={handleClick}>
          <img src={image} alt="Upload" />
          <input
            type="file"
            name="file"
            id="file"
            style={{ display: "none" }}
            ref={fileInput}
            onChange={onContentChange}
            accept="image/*"
          />
        </div>
        <div className="textarea">
          <ProfileBlock />
          <div className="content">
            <textarea
              placeholder="Write a caption..."
              onChange={handleCaption}
              value={caption}
              rows={10}
              cols={30}
            />
            <div className="count">{`${count}/1000`}</div>
          </div>
          <button
            className="post"
            onClick={() => {
              setCaption("");
              setCount(0);
              setFile(null);
            }}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};
export default InstaPost;
