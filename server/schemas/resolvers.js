const { User, Book } = require('../models');

const resolvers = {
    Query: {
      books: () => {
        return Book;
      }
    }
  };
  
  module.exports = resolvers;
  