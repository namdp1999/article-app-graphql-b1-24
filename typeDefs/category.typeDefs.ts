import { gql } from "apollo-server-express";

export const typeDefsCategory = gql`
  type Category {
    id: String,
    title: String,
    avatar: String
  }

  type Query {
    getListCategory: [Category],
    getCategory(id: String): Category,
  }

  input CategoryInput {
    title: String,
    avatar: String
  }

  type Mutation {
    createCategory(category: CategoryInput): Category,
    deleteCategory(id: String): String,
    updateCategory(id: String, category: CategoryInput): Category,
  }
`