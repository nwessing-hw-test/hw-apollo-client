import React from "react";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./apolloClient";

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="container mx-auto">
        <h1 className="text-2xl mb-4">Link Shrinker</h1>
      </div>
      <div class="bg-blue-800 p-8">
        <div class="container mx-auto">
          <form className="flex justify-center">
            <input className="p-2" name="url" />
            <input
              className="bg-blue-400 ml-4 px-4 text-white"
              type="submit"
              value="Shorten"
            />
          </form>
        </div>
      </div>
    </ApolloProvider>
  );
}
