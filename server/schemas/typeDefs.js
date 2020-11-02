// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    savedBooks: String
    bookCount: Int
  }
  type Book {
      bookId: String
      authors: [String]
      description: String
      image: String
      link: String
      title: String
  }
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User  
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: bookInput):User
    removeBook(input: bookInput):User
    
  }
`;


// export the typeDefs
module.exports = typeDefs;