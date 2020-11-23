import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://2isdh.sse.codesandbox.io/",
  cache: new InMemoryCache()
});

export default client;
