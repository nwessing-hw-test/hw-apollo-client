import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./apolloClient";
import CreateLink from "./components/CreateLink";
import OpenLink from "./components/OpenLink";

export default function App() {
  // const [createLink, { data }] = useMutation(CREATE_LINK);
  return (
    <ApolloProvider client={apolloClient}>
      <div className="container mx-auto">
        <h1 className="text-2xl mb-4">Link Shrinker</h1>
      </div>
      <Router>
        <Switch>
          <Route exact path="/">
            <CreateLink />
          </Route>
          <Route path="/:slug">
            <OpenLink />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}
