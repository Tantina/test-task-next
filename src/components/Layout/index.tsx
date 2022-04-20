import { FC } from "react";

import * as S from "./styles";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: FC<ILayoutProps> = (props) => {
  return (
    <S.MainContainer>
      <S.Header>
        <S.Headline>From the blog</S.Headline>
      </S.Header>
      <S.Main>{props.children}</S.Main>
    </S.MainContainer>
  );
};

export default Layout;
