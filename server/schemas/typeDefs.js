// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    savedBooks: [Book]
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
    token: ID
    user: User
  }
  
  input bookInput {
    bookId: String
    author: [String]
    description: String
    title: String
    image: String
    link: String
}

  type Query {
    me: User  
  }

  type Mutation {
    loginUser(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: bookInput): User
    removeBook(bookId: String!): User
    
  }
`;


// export the typeDefs
module.exports = typeDefs;