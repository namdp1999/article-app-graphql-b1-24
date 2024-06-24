import { gql } from "apollo-server-express";

export const typeDefsArticle = gql`
  type Article {
    id: String,
    title: String,
    avatar: String,
    description: String,
    category: Category
  }

  type Query {
    getListArticle: [Article],
    getArticle(id: String): Article
  }

  input ArticleInput {
    title: String,
    avatar: String,
    description: String,
    categoryId: String
  }

  type Mutation {
    createArticle(article: ArticleInput): Article,
    deleteArticle(id: String): String,
    updateArticle(id: String, article: ArticleInput): Article
  }
`