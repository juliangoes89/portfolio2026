import { gql } from "graphql-request";

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      nodes {
        id
        title
        slug
        excerpt
        date
      }
    }
  }
`;
