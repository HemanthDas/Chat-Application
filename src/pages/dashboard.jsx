import React from "react";
import PostCard from "../components/postcard";
const DashBoard = () => {
  const fakePosts = [1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div>
      {fakePosts.map((post) => {
        return <PostCard key={post} />;
      })}
    </div>
  );
};

export default DashBoard;
