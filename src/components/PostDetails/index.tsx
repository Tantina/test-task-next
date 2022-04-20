import { FC } from "react";
import * as S from "./styles";
import { IPostItem } from "../../types/post";

interface IPostDetailsProps {
  item: IPostItem;
}

const PostDetails: FC<IPostDetailsProps> = ({ item }) => {
  return (
    <S.Article>
      <S.Header>{item.title}</S.Header>
      <S.Preface>{item.preface}</S.Preface>
      <S.Body>{item.body}</S.Body>
    </S.Article>
  );
};

export default PostDetails;
