import styled from "styled-components";

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: var(--spacer);

  @media only screen and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
