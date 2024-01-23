import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import { RootState } from "../../app/store";
import { postUpdated } from "./postSlice";
import { PostType } from "./Posts";

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

  function onSavePostClicked({
    title,
    content,
    postId,
  }: {
    title: string;
    content: string;
    postId: string | undefined;
  }): void {
    if (title && content && postId) {
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
      <button
        type="button"
        onClick={() => onSavePostClicked({ title, content, postId })}
      >
        Save Post
      </button>
    </section>
  );
}

export default EditPost;
