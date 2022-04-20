import { render } from "@testing-library/react";

import Layout from ".";

describe("Layout", () => {
  it("renders text that we expect", () => {
    const { queryByText } = render(<Layout>text</Layout>);
    expect(queryByText("text")).toBeInTheDocument();
  });

  it("renders header that we expect", () => {
    const { queryByText } = render(<Layout>text</Layout>);
    expect(queryByText("From the blog")).toBeInTheDocument();
  });
});
