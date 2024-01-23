import { useDispatch, useSelector } from "react-redux";
import { PostType, postUpdated } from "./postSlice";
import { RootState } from "../../app/store";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const postId = useParams()?.postId;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const post: PostType | undefined = useSelector((state: RootState) => {
    return state.posts.find(({ id }) => id === postId);
  });

  if (!post) {
    return <p>Not found Post</p>;
  }

  function onTitleChanged(e: React.ChangeEvent<HTMLInputElement>): void {
    setTitle(e.target.value);
  }

  function onContentChanged(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    setContent(e.target.value);
  }

  function onSavePostClicked() {
    if (title && content) {
      dispatch(postUpdated({ id: postId, title, content }));
      navigate(`/posts/${postId}`);
    }
  }

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
      </form>
      <button type="button" onClick={onSavePostClicked}>
        Save Post
      </button>
    </section>
  );
}

export default EditPost;
