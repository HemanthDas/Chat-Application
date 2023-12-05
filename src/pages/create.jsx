import { useEffect, useState } from "react";
import { useRouter, useNavigate } from "@tanstack/react-router";
import InstaPost from "../components/create.module/instapost";

const Create = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Create Post";
    setSearch(router.state.location.search);
  }, [router.state.location.search]);

  const handleInput = (e) => {
    if (e.target.value === "post") {
      navigate({ to: "/create", search: { type: "post" } });
    } else if (e.target.value === "tweet") {
      navigate({ to: "/create", search: { type: "tweet" } });
    }
  };

  const RenderComponent = () => {
    switch (search.type) {
      case "post":
        return <InstaPost />;
      case "tweet":
        return <h1>Post Type 1</h1>;
      default:
        return <h1>Please Select Post Type</h1>;
    }
  };

  return (
    <div id="create">
      <label htmlFor="post">Post/Video</label>
      <input
        type="radio"
        value={"post"}
        name="set"
        id="post"
        onChange={handleInput}
        checked={search.type === "post"}
      />
      <label htmlFor="tweet">Tweet</label>
      <input
        type="radio"
        value={"tweet"}
        name="set"
        id="tweet"
        onChange={handleInput}
        checked={search.type === "tweet"}
      />
      <RenderComponent />
    </div>
  );
};

export default Create;
