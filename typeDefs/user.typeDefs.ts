import { gql } from "apollo-server-express";

export const typeDefsUser = gql`
  type User {
    code: Int,
    message: String,
    id: String,
    fullName: String,
    email: String,
    token: String
  }

  input UserInput {
    fullName: String,
    email: String,
    password: String
  }

  type Query {
    getUser(id: String): User
  }

  type Mutation {
    registerUser(user: UserInput): User,
    loginUser(user: UserInput): User,
  }
`