import { render } from "@testing-library/react";
import { IPostItem } from "../../types/post";
import BlogGrid from ".";

const DUMMY_POSTS: IPostItem[] = [
  {
    id: "m1",
    title: "Post 1",
    preface: "About Post 1",
    body: "Body: About Post 1",
  },
  {
    id: "m2",
    title: "Post 2",
    preface: "About Post 2",
    body: "Body: About Post 2",
  },
];

describe("BlogGrid", () => {
  it("renders titles of posts that we expect", () => {
    const { queryByText } = render(<BlogGrid posts={DUMMY_POSTS} />);
    expect(queryByText("Post 1")).toBeInTheDocument();
    expect(queryByText("Post 2")).toBeInTheDocument();
  });
  it("renders prefaces of posts that we expect", () => {
    const { queryByText } = render(<BlogGrid posts={DUMMY_POSTS} />);
    expect(queryByText("About Post 1")).toBeInTheDocument();
    expect(queryByText("About Post 2")).toBeInTheDocument();
  });
  it("doesn't render bodies of posts that we expect", () => {
    const { queryByText } = render(<BlogGrid posts={DUMMY_POSTS} />);
    expect(queryByText("Body: About Post 1")).not.toBeInTheDocument();
    expect(queryByText("Body: About Post 2")).not.toBeInTheDocument();
  });
});
