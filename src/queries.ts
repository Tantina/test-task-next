import gql from "graphql-tag";

export const GET_BLOG_POSTS = gql`
  query blogPostCollection($limit: Int!, $order: [BlogPostOrder]) {
    blogPostCollection(limit: $limit, order: $order) {
      items {
        title
        preface
        sys {
          id
        }
      }
      total
      limit
    }
  }
`;

export const GET_POST_BY_ID = gql`
  query blogPost($id: String!) {
    blogPost(id: $id) {
      title
      preface
      body
    }
  }
`;
