import styled from "styled-components";

export const MainContainer = styled.div`
  margin: calc(var(--spacer) * 2) auto;
  max-width: calc(1382px + (var(--spacer) * 2));
  width: 100%;
  padding: 0 var(--spacer);
`;

// export const MainContent = styled.div`
//   margin: calc(var(--spacer) * 2) var(--spacer);
//   display: flex;

// `;

export const Main = styled.main`
  max-width: 1240px;
  width: 100%;
  margin-left: auto;
`;

export const Header = styled.header`
  display: flex;
  margin-bottom: calc(var(--spacer) * 2);

  align-items: center;
  &:after {
    content: "";
    width: 100%;
    border-top: 1px solid var(--color-sky);
    margin-left: var(--spacer);
  }
`;

export const Headline = styled.h1`
  font-size: var(--font-headline-small);
  font-weight: 700;
  color: var(--color-blue);
  white-space: nowrap;
`;
