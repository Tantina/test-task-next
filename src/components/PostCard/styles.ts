import styled from "styled-components";

const lineClamp = (count) => `
display: -webkit-box;
-webkit-line-clamp: ${count};
-webkit-box-orient: vertical;  
overflow: hidden;`;

export const Li = styled.li`
  height: 269px;

  &:nth-child(5n + 1) {
    grid-column: 1 / span 2;

    @media only screen and (max-width: 600px) {
      grid-column: 1;
    }

    h2 {
      font-size: var(--font-headline);
      line-height: 29px;
    }

    p {
      font-size: var(--font-body-large);
      line-height: 27px;
    }
  }

  &:nth-child(5n + 3),
  &:nth-child(5n + 4),
  &:nth-child(5n + 5) {
    margin-bottom: var(--spacer);
    height: 335px;

    @media only screen and (max-width: 992px) {
      height: 269px;
      margin-bottom: 0;
    }
  }
`;

export const Link = styled.a`
  padding: var(--spacer);
  display: block;
  height: 100%;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  color: black;

  background-color: var(--color-white);
  box-shadow: 0px 2px 4px rgba(11, 15, 103, 0.06),
    0px 4px 12px rgba(11, 15, 103, 0.04);
  border-radius: 6px;

  &:hover {
    color: black;
    text-decoration: none;
    box-shadow: 0px 4px 24px rgba(11, 15, 103, 0.2),
      0px 2px 4px rgba(11, 15, 103, 0.06), 0px 4px 12px rgba(11, 15, 103, 0.04);
  }

  &:active,
  &:focus {
    color: black;
    text-decoration: none;
    box-shadow: 2px 4px 24px rgba(11, 15, 103, 0.2),
      2px 2px 4px rgba(11, 15, 103, 0.06), 0px 4px 12px rgba(11, 15, 103, 0.04);
  }
`;

export const Headline = styled.h2`
  font-size: var(--font-headline-small);
  line-height: 24px;
  font-weight: 700;
  color: var(--color-blue);
  ${lineClamp(5)}
`;

export const Text = styled.p`
  font-weight: 400;
  line-height: 21px;
  font-size: var(--font-body);
  ${lineClamp(6)}
`;

export const Arrow = styled.div`
  position: absolute;
  bottom: var(--spacer);
  right: var(--spacer);
  color: var(--color-sky);
`;
