import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { parseISO, sub } from "date-fns";

import { PostType } from "./Post";
import createEmoticons from "./createEmoticons";

const initialState: PostType[] = [
  {
    id: "1",
    title: "First Post!",
    content: "Hello!",
    date: sub(new Date(), { minutes: 10 }).toString(),
    reactions: createEmoticons(),
  },
  {
    id: "2",
    title: "Second Post",
    content: "More text",
    date: sub(new Date(), { minutes: 5 }).toString(),
    reactions: createEmoticons(),
  },
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
        content: string,
        userId: string
      ): {
        payload: PostType;
      } {
        return {
          payload: {
            date: parseISO(new Date().toISOString()).toString(),
            id: nanoid(),
            title,
            content,
            user: userId,
            reactions: createEmoticons(),
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
    reactionAdded(state, action) {
      const { postId, type: rType } = action.payload;
      const _Post = state.find((post) => post.id === postId);
      const reaction = _Post?.reactions.find(({ type }) => type === rType);
      if (reaction) reaction.total++;
    },
  },
});

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
