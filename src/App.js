import React from "react";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./apolloClient";

import "./styles.css";

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </ApolloProvider>
  );
}
