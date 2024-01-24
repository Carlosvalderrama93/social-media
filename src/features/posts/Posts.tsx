import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

import Post, { PostType } from "./Post";

function PostsList() {
  const posts: PostType[] = useSelector((state: RootState) => state.posts);

  const sortedPost: PostType[] = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {sortedPost.map((post) => {
        return <Post data={post} edit={false} key={post.id} />;
      })}
    </section>
  );
}

export default PostsList;
