import gql from 'graphql-tag';

export const GET_ME = gql`
  {
      me {
        _id: ID
        username: String
        email: String
        savedBooks {
            bookId
            authors
            description
            image
            link
            title
        }
        bookCount: Int
      }
  }
`;

