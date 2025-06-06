import PostItem from "../components/PostItem";
import fakePosts from "../utils/fakePost";

const HomePage = () => {
  return (
    <div>
      {fakePosts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default HomePage;
