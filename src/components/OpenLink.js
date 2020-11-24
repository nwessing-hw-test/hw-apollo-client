import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import Spin from "./Spin";

const GET_LINK = gql`
  query GetLink($slug: String!) {
    link(slug: $slug) {
      target
      slug
    }
  }
`;

export default function OpenLink() {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_LINK, { variables: { slug } });

  useEffect(() => {
    if (!loading && data?.link?.target) {
      window.location = data.link.target;
    }
  }, [loading, error, data]);

  let content = <div>Not a valid link!</div>;
  if (loading) {
    content = <Spin />;
  }

  if (data?.link?.target) {
    content = <div>Redirecting...</div>;
  }

  return <div className="container mx-auto">{content}</div>;
}
