import express, { Express, Request, Response } from "express";
import env from "dotenv";
env.config();
import { connect } from "./config/database";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";

const startServer = async () => {
  connect();

  const app: Express = express();
  const port: (number | string) = `${process.env.PORT}` || 3000;
  
  // GraphQL
  const apolloServer = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
  });
  
  await apolloServer.start();
  
  apolloServer.applyMiddleware({
    app: app,
    path: "/graphql"
  });
  
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
}

startServer();