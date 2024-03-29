import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "./postSlice";
import { RootState } from "../../app/store";

function AddPostForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector((state: RootState) => state.users);
  const usersOptions = users.map(({ id, name }) => (
    <option key={id} value={id}>
      {name}
    </option>
  ));

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  function onAuthorChanged(e: React.ChangeEvent<HTMLSelectElement>): void {
    setUserId(e.target.value);
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
    userId,
  }: {
    title: string;
    content: string;
    userId: string;
  }): void {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
    }
  }

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
          required
        />
        <label htmlFor="postAuthor">Author:</label>
        <select
          id="postAuthor"
          value={userId}
          onChange={onAuthorChanged}
          required
        >
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
          required
        />
        <button
          type="button"
          onClick={() => onSavePostClicked({ userId, content, title })}
          disabled={!canSave}
        >
          Save Post
        </button>
      </form>
    </section>
  );
}

export default AddPostForm;
