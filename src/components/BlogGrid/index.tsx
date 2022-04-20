import { FC } from "react";
import * as S from "./styles";
import PostCard from "../PostCard";
import { IPostItem } from "../../types/post";

interface IBlogGridProps {
  posts: IPostItem[];
}

const BlogGrid: FC<IBlogGridProps> = (props) => {
  return (
    <S.Ul>
      {props.posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          preface={post.preface}
        />
      ))}
    </S.Ul>
  );
};

export default BlogGrid;
