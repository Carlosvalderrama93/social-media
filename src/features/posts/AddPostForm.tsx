import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postSlice";
import { nanoid } from "@reduxjs/toolkit";

type VoidFn = (e: any) => void;

function AddPostForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChanged: VoidFn = (e) => setTitle(e.target.value);
  const onContentChanged: VoidFn = (e) => setContent(e.target.value);

  function onSavePostClicked() {
    if (title && content) {
      const arg = { id: nanoid(), title, content };
      dispatch(postAdded(arg));
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
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </section>
  );
}

export default AddPostForm;
