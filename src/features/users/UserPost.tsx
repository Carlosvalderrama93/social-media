import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

function UserPost({ userId }: { userId: string }) {
  const user = useSelector((state: RootState) => {
    return state.users.find((user) => user.id === userId);
  });
  return (
    <div>
      <span>by {user ? user.name : "Unknown author"}</span>
    </div>
  );
}

export default UserPost;
