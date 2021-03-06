const { gql } = require("apollo-server-express");

const userTypeDefs = require("./user");
const taskTyypeDefs = require("./task");

const typeDefs = gql`
  scalar Date

  type Query {
    _: String
  }
  type Mutation {
    _: String
  }
`;

module.exports = [typeDefs, userTypeDefs, taskTyypeDefs];
