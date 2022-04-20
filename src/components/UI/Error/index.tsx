import { ApolloError } from "@apollo/client";
import { FC } from "react";
import * as S from "./styles";

interface IError {
  message: string;
}
interface IErrorProps {
  error: IError | ApolloError;
}

const Error: FC<IErrorProps> = (props) => (
  <S.ErrorBlock>
    <S.Header>Oops!</S.Header>
    <p>Something went wrong…</p>
    <p>{props.error.message}</p>
  </S.ErrorBlock>
);

export default Error;
