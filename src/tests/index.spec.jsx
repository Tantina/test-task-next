import { render, waitFor } from "@testing-library/react";
import BlogListingPage from "../pages/index";
import { MockedProvider } from "@apollo/client/testing";
import { GET_BLOG_POSTS } from "../queries";

const mocks = [
  {
    request: {
      query: GET_BLOG_POSTS,
      variables: { limit: 2, order: "title_ASC" },
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
          limit: 2,
          __typename: "BlogPostCollection",
        },
      },
    },
    error: new Error("Something went wrong"),
  },
];

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

  it("should give visual feedback", async () => {
    const { queryByText } = render(
      <MockedProvider mocks={mocks}>
        <BlogListingPage />
      </MockedProvider>
    );
    // wait for response
    await waitFor(() => new Promise((res) => setTimeout(res, 0)));

    expect(queryByText("Loading...")).toBeInTheDocument();
  });
});
