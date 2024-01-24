import { useDispatch } from "react-redux";
import { PostType } from "./Post";
import { reactionAdded } from "./postSlice";
import { useEffect, useState } from "react";

function ReactionButton({ post }: { post: PostType }) {
  const dispatch = useDispatch();
  const [reaction, setReaction] = useState("");

  useEffect(() => {
    dispatch(reactionAdded({ postId: post.id, type: reaction }));
    setReaction("");
  }, [reaction]);

  return post.reactions.map(({ id, type, total, emoticon }) => {
    return (
      <button
        key={id}
        type="button"
        className="muted-button reaction-button"
        onClick={() => setReaction(type)}
      >
        {total}:{emoticon}
      </button>
    );
  });
}

export default ReactionButton;
