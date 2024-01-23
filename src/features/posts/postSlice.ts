import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";

export type PostType = {
  id: string;
  title: string;
  content: string;
};

const initialState: PostType[] = [
  { id: "1", title: "First Post!", content: "Hello!" },
  { id: "2", title: "Second Post", content: "More text" },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action: PayloadAction<PostType>) {
        state.push(action.payload);
      },
      prepare(
        title: string,
        content: string
      ): { payload: { id: string; title: string; content: string } } {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload;
      const post = state.find((post) => id === post.id);
      if (post) {
        post.title = title;
        post.content = content;
      }
    },
  },
});

export const { postAdded, postUpdated } = postsSlice.actions;

export default postsSlice.reducer;
