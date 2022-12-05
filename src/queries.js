import {gql} from '@apollo/client';

export const getCharacters = gql`{
    characters {
        results {
            id
            name
            image
            status
            species
            location {
                name
            }
        }
    }
}`