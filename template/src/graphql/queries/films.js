import { gql } from 'apollo-boost';

export const ALL_FILMS = gql`
    {
        films: allFilms(
            orderBy: episodeId_ASC
        ) {
            id
            title
            openingCrawl
        }
    }
`;
