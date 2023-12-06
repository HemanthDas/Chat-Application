import UploadSVG from "../../assets/upload-cloud.svg";

import { useEffect, useRef, useState } from "react";
import ProfileBlock from "../profileblock";
const InstaPost = () => {
  const fileInput = useRef(null);
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState(null);
  const [unsaved, setUnsaved] = useState(false);
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
    setUnsaved(true);
  };
  const handleBeforeUnload = (e) => {
    console.log("first");
    if (unsaved) {
      console.log("second");
      e.preventDefault();
      e.returnValue = "Are you sure you want to leave?";
    }
  };
  const handlePopstate = (e) => {
    if (unsaved) {
      const confirmationMessage = "Are you sure you want to leave?";
      e.returnValue = confirmationMessage;
      return confirmationMessage;
    }
  };
  const [count, setCount] = useState(0);
  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("popstate", handlePopstate);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handlePopstate);
    };
  }, [unsaved]);
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
              setUnsaved(false);
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
