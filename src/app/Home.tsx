import AddPostForm from "../features/posts/AddPost";
import PostsList from "../features/posts/Posts";

function Home() {
  return (
    <section>
      <PostsList />
      <AddPostForm />
    </section>
  );
}

export default Home;
