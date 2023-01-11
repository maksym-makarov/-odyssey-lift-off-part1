import React from "react";
import { Layout } from "../components";
import { gql, useQuery } from "@apollo/client";

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */

const GET_TRACKS = gql`
  query GetTracks {
    tracksForHome {
      id
      title
      author {
        name
      }
    }
  }
`;
export const Tracks = () => {
  const { loading, error, data } = useQuery(GET_TRACKS);
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <Layout grid>
      <ul>
        {data.tracksForHome.map(({ id, title, author }) => (
          <li key={id}>
            <h2>{title}</h2>
            <p>{author.name}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
};
