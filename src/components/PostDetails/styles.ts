import styled from "styled-components";

export const Article = styled.article`
  background-color: var(--color-white);
  padding: calc(var(--spacer) * 2);
  box-shadow: 0px 2px 4px rgba(11, 15, 103, 0.06),
    0px 4px 12px rgba(11, 15, 103, 0.04);
  border-radius: 6px;
`;

export const Header = styled.h2`
  font-size: var(--font-headline);
  font-weight: 700;
  text-align: center;
  color: var(--color-blue);
  margin-bottom: calc(var(--spacer) * 2);
`;

export const Preface = styled.p`
  font-size: var(--font-body-large);
  font-weight: 400;
  margin-bottom: var(--spacer);
  line-height: 24px;
`;

export const Body = styled.p`
  font-size: var(--font-body);
  line-height: 27px;
`;
