import { useEffect, useState } from "react";
import { useRouter, Link } from "@tanstack/react-router";
import InstaPost from "../components/create.module/instapost";

const Create = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  useEffect(() => {
    document.title = "Create Post";
    setSearch(router.state.location.search);
  }, [router.state.location.search]);

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
      <div className="option">
        <Link search={{ type: "post" }}>Post</Link>
        <Link search={{ type: "tweet" }}>Tweet</Link>
        <hr />
      </div>
      <RenderComponent />
    </div>
  );
};

export default Create;
