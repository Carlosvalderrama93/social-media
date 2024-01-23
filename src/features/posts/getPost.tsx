import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

export default function getPost(postId: string) {
  return useSelector((state: RootState) =>
    state.posts.find(({ id }) => id === postId)
  );
}
