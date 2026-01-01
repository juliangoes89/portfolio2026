import { GraphQLClient } from "graphql-request";

export const wpClient = new GraphQLClient(
  "https://juliangoes89.website:8443/graphql",
  {
    headers: {
      // Add auth headers here if needed
    },
  }
);
