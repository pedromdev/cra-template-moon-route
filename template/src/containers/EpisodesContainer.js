import React from 'react';
import {useQuery} from "@apollo/client";
import {ALL_FILMS} from "../graphql/queries/films";
import Episodes from "../components/Episodes/Episodes";
import Episode from "../components/Episode/Episode";

const EpisodesContainer = () => {
  const {data, loading} = useQuery(ALL_FILMS);

  return (
    <Episodes>
      {!loading && data && data.allFilms.films.map(film => (
        <Episode
          key={film.id}
          title={film.title}
          openingCrawl={film.openingCrawl}
        />
      ))}
    </Episodes>
  );
};

export default EpisodesContainer;
