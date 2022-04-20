import { render, waitFor } from "@testing-library/react";
import BlogListingPage from "../pages/index";
import { MockedProvider } from "@apollo/client/testing";
import { GET_BLOG_POSTS } from "../queries";
import "@testing-library/jest-dom";

let mocks = [
  {
    request: {
      query: GET_BLOG_POSTS,
      variables: { limit: 2, order: "title_ASC" },
    },
    result: () => ({
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
            {
              title: "Donec Vitae Varius Dolor",
              preface:
                "Aliquam malesuada nibh purus, sed ullamcorper libero lobortis eget. Pellentesque euismod mauris id tincidunt lacinia. In hac habitasse platea dictumst.",
              sys: {
                id: "4vNoLIF0nVBhtjOaD8cbK4",
                __typename: "Sys",
              },
              __typename: "BlogPost",
            },
            {
              title: "Lorem Ipsum",
              preface:
                "Nulla vel euismod ipsum, venenatis dapibus arcu. Quisque elementum scelerisque dolor, sed gravida nulla posuere id. Sed tempus convallis ex a laoreet.",
              sys: {
                id: "6oPdx3MQkBsXav1LHLySoQ",
                __typename: "Sys",
              },
              __typename: "BlogPost",
            },
            {
              title: "Morbi Eget",
              preface:
                "Ut non dui eu libero eleifend sollicitudin. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
              sys: {
                id: "6P3y1j5c3aUDkpeWLDtMu6",
                __typename: "Sys",
              },
              __typename: "BlogPost",
            },
            {
              title: "Morbi Pharetra Commodo ASuctor",
              preface:
                "Duis ipsum sapien, fringilla sit amet ipsum ut, fringilla commodo urna. Sed et cursus lorem.",
              sys: {
                id: "5i6ylJOyw6phuWaolHjFNP",
                __typename: "Sys",
              },
              __typename: "BlogPost",
            },
            {
              title: "Nunc Tempor Tristique",
              preface:
                "Pellentesque id feugiat ligula, eget pretium leo. Aenean nec nisl vitae nulla eleifend interdum. Nam venenatis urna quis consectetur volutpat.",
              sys: {
                id: "4jeEdv35sZwjMxKO2UFa6D",
                __typename: "Sys",
              },
              __typename: "BlogPost",
            },
            {
              title: "Praesent Molestie",
              preface:
                "Morbi vitae eros sit amet elit tristique laoreet etiam vitae diam.",
              sys: {
                id: "6Bkb2yLiUoqxoX2T2WlMfT",
                __typename: "Sys",
              },
              __typename: "BlogPost",
            },
            {
              title: "Quis Mattis Leo",
              preface:
                "Vivamus ultricies, sem id egestas pulvinar, dui dolor bibendum risus, ac tempor augue ante quis ligula.",
              sys: {
                id: "382TEYSnLGAHuqIq4UklBF",
                __typename: "Sys",
              },
              __typename: "BlogPost",
            },
            {
              title: "Vestibulum Pulvinar Leo Vel Venenatis Aliquam",
              preface:
                "Maecenas sem felis, varius at fermentum sit amet, pulvinar vitae leo. Ut velit dui, ultrices nec est eu, imperdiet convallis augue.",
              sys: {
                id: "4WtJ6eGSPZMFlDA9ZvrHH5",
                __typename: "Sys",
              },
              __typename: "BlogPost",
            },
          ],
          total: 10,
          limit: 10,
          __typename: "BlogPostCollection",
        },
      },
    }),
    error: new Error("Something went wrong"),
  },
];

describe("Home", () => {
  it("should render loading state initially", () => {
    mocks = [];
    const { queryByText } = render(
      <MockedProvider mocks={mocks}>
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
