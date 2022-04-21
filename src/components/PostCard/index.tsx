import { FC } from "react";
import Link from "next/link";

import * as S from "./styles";
import { IPostItem } from "../../types/post";

const PostCard: FC<IPostItem> = ({ id, title, preface }) => {
  return (
    <S.Li>
      <Link href={`/post/${id}`}>
        <S.Link href={id} aria-label={`Navigate to "${title}" post`}>
          <article>
            <S.Headline>{title}</S.Headline>
            <S.Text>{preface}</S.Text>
            <S.Arrow>→</S.Arrow>
          </article>
        </S.Link>
      </Link>
    </S.Li>
  );
};

export default PostCard;
