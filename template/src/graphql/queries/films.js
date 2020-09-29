import {gql} from '@apollo/client';

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
