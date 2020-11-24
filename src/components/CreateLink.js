import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import Spinner from "./Spin";
import Alert from "./Alert";

const CREATE_LINK = gql`
  mutation CreateLink($target: String!) {
    createLink(target: $target) {
      target
      slug
    }
  }
`;

export default function CreateLink() {
  const [target, setTarget] = useState("");
  const [createLink, { loading, error, data }] = useMutation(CREATE_LINK);

  const submit = async (e) => {
    e.preventDefault();

    try {
      await createLink({ variables: { target } });
    } catch {}
  };

  console.log({ data, error, loading });
  let content = null;
  if (loading) {
    content = <Spinner className="text-white" />;
  } else {
    content = (
      <>
        <form className="mx-auto" onSubmit={submit}>
          {error && <Alert message={error.message} />}
          <div className="flex justify-center">
            <input
              className="p-2 rounded"
              name="url"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
            />
            <input
              className="bg-blue-400 ml-4 px-4 text-white rounded"
              type="submit"
              value="Shorten"
            />
          </div>
        </form>
        {data && (
          <div className="flex text-white justify-around mt-2">
            <div>{data.createLink.target}</div>
            <div>{window.location.origin + "/" + data.createLink.slug}</div>
            <button>Copy</button>
          </div>
        )}
      </>
    );
  }
  return (
    <div className="bg-blue-800 p-8">
      <div className="container mx-auto">{content}</div>
    </div>
  );
}
