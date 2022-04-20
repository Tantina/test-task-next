import styled from "styled-components";

export const ErrorBlock = styled.div`
  background-color: var(--color-white);
  box-shadow: 0px 2px 4px rgba(11, 15, 103, 0.06),
    0px 4px 12px rgba(11, 15, 103, 0.04);
  border-radius: 6px;
  padding: var(--spacer);
  margin: var(--spacer) auto;
  max-width: 600px;
  line-height: 27px;
`;

export const Header = styled.h2`
  font-size: var(--font-headline);
  color: var(--color-blue);
  font-weight: 700;
  margin-bottom: var(--spacer);
`;
