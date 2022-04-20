import { render } from "@testing-library/react";
import { IPostItem } from "../../types/post";
import PostDetails from ".";

const DUMMY_POST: IPostItem = {
  id: "m1",
  title: "Post 1",
  preface: "About Post 1",
  body: "Body: About Post 1",
};

describe("PostDetails", () => {
  it("renders title that we expect", () => {
    const { queryByText } = render(<PostDetails item={DUMMY_POST} />);
    expect(queryByText("Post 1")).toBeInTheDocument();
  });
  it("renders preface that we expect ", () => {
    const { queryByText } = render(<PostDetails item={DUMMY_POST} />);
    expect(queryByText("About Post 1")).toBeInTheDocument();
  });
  it("renders body that we expect", () => {
    const { queryByText } = render(<PostDetails item={DUMMY_POST} />);
    expect(queryByText("Body: About Post 1")).toBeInTheDocument();
  });
});
