import { render } from "@testing-library/react";

import PostCard from ".";

describe("PostCard", () => {
  it("renders title that we expect", () => {
    const { queryByText } = render(
      <PostCard id="m1" title="Post 1" preface="About Post 1" />
    );
    expect(queryByText("Post 1")).toBeInTheDocument();
  });

  it("renders preface that we expect", () => {
    const { queryByText } = render(
      <PostCard id="m1" title="Post 1" preface="About Post 1" />
    );
    expect(queryByText("About Post 1")).toBeInTheDocument();
  });
});
