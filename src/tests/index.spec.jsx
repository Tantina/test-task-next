import { render } from "@testing-library/react";
import BlogListingPage from "../pages/index";
import { MockedProvider } from "@apollo/client/testing";
import { GET_BLOG_POSTS } from "../queries";

describe("Home", () => {
  it("should render loading state initially", () => {
    const emptyMocks = [];
    const { queryByText } = render(
      <MockedProvider mocks={emptyMocks}>
        <BlogListingPage />
      </MockedProvider>
    );

    expect(queryByText("Loading...")).toBeInTheDocument();
  });

  it("should give error response", async () => {
    const errorMocks = [
      {
        request: {
          query: GET_BLOG_POSTS,
          variables: { limit: 2, order: "title_ASC" },
        },
        error: new Error("Something went wrong"),
      },
    ];
    const { findByText } = render(
      <MockedProvider mocks={errorMocks}>
        <BlogListingPage />
      </MockedProvider>
    );

    const error = await findByText("Oops!");
    expect(error).toBeInTheDocument();
  });

  it("should display message that there are not any posts ", async () => {
    const emptyMocks = [
      {
        request: {
          query: GET_BLOG_POSTS,
          variables: { limit: 10, order: "title_ASC" },
        },
        result: {
          data: {
            blogPostCollection: {
              items: [],
              total: 0,
              limit: 10,
              __typename: "BlogPostCollection",
            },
          },
        },
      },
    ];
    const { findByText } = render(
      <MockedProvider mocks={emptyMocks}>
        <BlogListingPage />
      </MockedProvider>
    );

    const message = await findByText("There are not any posts yet.");
    expect(message).toBeInTheDocument();
  });

  it("should display visible results ", async () => {
    const mocks = [
      {
        request: {
          query: GET_BLOG_POSTS,
          variables: { limit: 10, order: "title_ASC" },
        },
        result: {
          data: {
            blogPostCollection: {
              items: [
                {
                  title: "Aenean Varius Elit",
                  preface:
                    "In fermentum mauris leo, non tincidunt odio aliquam eget. In molestie tempus sem, eu lobortis enim dapibus eu.",
                  sys: {
                    id: "7z390rRzomW3yAmjyx0vwK",
                    __typename: "Sys",
                  },
                  __typename: "BlogPost",
                },
                {
                  title: "Aliquam Laoreet",
                  preface:
                    "Aenean sit amet aliquam erat. Vestibulum tincidunt velit sed dolor vulputate, ac viverra eros malesuada. Morbi malesuada libero odio, et imperdiet urna feugiat viverra.",
                  sys: {
                    id: "2gZ8jeLpaLcUHyBIBiBbTq",
                    __typename: "Sys",
                  },
                  __typename: "BlogPost",
                },
              ],
              total: 2,
              limit: 10,
              __typename: "BlogPostCollection",
            },
          },
        },
      },
    ];
    const { findByText } = render(
      <MockedProvider mocks={mocks}>
        <BlogListingPage />
      </MockedProvider>
    );

    const title = await findByText("Aliquam Laoreet");
    expect(title).toBeInTheDocument();
  });
});
