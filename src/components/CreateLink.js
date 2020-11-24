import React from "react";
import { useMutation, gql } from "@apollo/client";

const CREATE_LINK = gql`
  mutation CreateLink($target: String!) {
    createLink(target: $target) {
      target
      slug
    }
  }
`;

export default function CreateLink() {
  const [createLink, { data }] = useMutation(CREATE_LINK);
  return (
    <div className="bg-blue-800 p-8">
      <div className="container mx-auto">
        <form className="flex justify-center">
          <input className="p-2 rounded" name="url" />
          <input
            className="bg-blue-400 ml-4 px-4 text-white rounded"
            type="submit"
            value="Shorten"
          />
        </form>
      </div>
    </div>
  );
}
