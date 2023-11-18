import PostCard from "../components/postcard";
import Suggestion from "../components/suggestion";
const DashBoard = () => {
  const fakePosts = [1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div className="dashboard">
      <div className="posts">
        {fakePosts.map((post) => {
          return <PostCard key={post} />;
        })}
      </div>
      <Suggestion />
    </div>
  );
};

export default DashBoard;
