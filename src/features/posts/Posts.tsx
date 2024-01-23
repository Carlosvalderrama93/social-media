import { useSelector } from "react-redux";
import { PostType } from "./postSlice";
import { RootState } from "../../app/store";
import Post from "./Post";

function PostsList() {
  const posts: PostType[] = useSelector((state: RootState) => state.posts);

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {posts.map((post) => {
        return <Post data={post} edit={false} key={post.id} />;
      })}
    </section>
  );
}

export default PostsList;
