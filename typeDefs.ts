import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Article {
    id: String,
    title: String,
    avatar: String,
    description: String
  }

  type Query {
    getListArticle: [Article],
    getArticle(id: String): Article
  }

  input ArticleInput {
    title: String,
    avatar: String,
    description: String
  }

  type Mutation {
    createArticle(article: ArticleInput): Article,
    deleteArticle(id: String): String,
    updateArticle(id: String, article: ArticleInput): Article,
  }
`