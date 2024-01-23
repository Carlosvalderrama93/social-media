import { Link, useParams } from "react-router-dom";

import getPost from "./getPost";
import UserPost from "../users/UserPost";
import DatePost from "./DatePost";
import { PostType } from "./Posts";

type propsType = {
  data: PostType;
  edit?: boolean;
};

function Post({ data, edit = true }: propsType) {
  const post = getPost(useParams()?.postId as string) ?? { ...data };
  const url = `/${edit ? "edit" : "posts"}/${post.id}`;

  return (
    <>
      <article className="post-excerpt">
        {post ? (
          <>
            <h2>{post.title}</h2>
            <p className="post-content">
              {edit ? post.content : post.content?.substring(0, 100)}
            </p>
            <Link to={url} className="button muted-button">
              {edit ? "Edit" : "View"} post
            </Link>
            <UserPost userId={post.user ?? ""} />
            <DatePost timestamp={post.date} />
          </>
        ) : (
          <h2>Post not found!</h2>
        )}
      </article>
    </>
  );
}

export default Post;
