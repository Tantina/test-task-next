import { render } from "@testing-library/react";
import PostPage from "../../pages/post/[postId]";
import { MockedProvider } from "@apollo/client/testing";
import { GET_POST_BY_ID } from "../../queries";
import mockRouter from "next-router-mock";
import "next-router-mock/dynamic-routes";
jest.mock("next/dist/client/router", () => require("next-router-mock"));

describe("Post Page", () => {
  beforeEach(() => {
    mockRouter.registerPaths(["/post/[postId]", "/"]);
    mockRouter.setCurrentUrl("/post/7z390rRzomW3yAmjyx0vwK");
  });

  it("should parse dynamic routes", () => {
    mockRouter.push("/post/7z390rRzomW3yAmjyx0vwK");
    expect(mockRouter).toMatchObject({
      pathname: "/post/[postId]",
      query: { postId: "7z390rRzomW3yAmjyx0vwK" },
    });
  });
  it("should render loading state initially", () => {
    const emptyMocks = [];
    const { queryByText } = render(
      <MockedProvider mocks={emptyMocks}>
        <PostPage />
      </MockedProvider>
    );

    expect(queryByText("Loading...")).toBeInTheDocument();
  });

  it("should give error response", async () => {
    const errorMocks = [
      {
        request: {
          query: GET_POST_BY_ID,
          variables: { id: "7z390rRzomW3yAmjyx0vwK" },
        },
        error: new Error("Something went wrong"),
      },
    ];
    const { findByText } = render(
      <MockedProvider mocks={errorMocks}>
        <PostPage />
      </MockedProvider>
    );

    const error = await findByText("Oops!");
    expect(error).toBeInTheDocument();
  });

  it("should display visible results ", async () => {
    const mocks = [
      {
        request: {
          query: GET_POST_BY_ID,
          variables: { id: "7z390rRzomW3yAmjyx0vwK" },
        },
        result: {
          data: {
            blogPost: {
              title: "Aenean Varius Elit",
              preface:
                "In fermentum mauris leo, non tincidunt odio aliquam eget. In molestie tempus sem, eu lobortis enim dapibus eu.",
              body: "Aenean varius elit tempor finibus consectetur. Curabitur fringilla ex vel leo tristique, sed faucibus arcu consectetur. Maecenas vitae viverra leo, vel luctus libero. Suspendisse at velit neque. Sed pellentesque, massa eu luctus ullamcorper, tortor enim mattis nulla, a viverra lectus elit sit amet neque. Aenean mattis auctor lacus, eget imperdiet neque porttitor ac. Interdum et malesuada fames ac ante ipsum primis in faucibus. In fermentum mauris leo, non tincidunt odio aliquam eget. In molestie tempus sem, eu lobortis enim dapibus eu.\n\nPraesent sit amet tristique nulla. Cras at turpis ut elit molestie commodo. Mauris mollis dignissim odio, nec maximus tortor maximus et. Suspendisse lacus felis, gravida non eros vitae, facilisis egestas nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam tincidunt magna tellus, vel commodo lacus scelerisque eget.",
              __typename: "BlogPost",
            },
          },
        },
      },
    ];
    const { findByText } = render(
      <MockedProvider mocks={mocks}>
        <PostPage />
      </MockedProvider>
    );

    const title = await findByText("Aenean Varius Elit");
    expect(title).toBeInTheDocument();
  });
});
