import express, { Express, Request, Response } from "express";
import env from "dotenv";
env.config();
import { connect } from "./config/database";
import Article from "./models/article.model";

connect();

const app: Express = express();
const port: (number | string) = `${process.env.PORT}` || 3000;

// Rest API
app.get("/articles", async (req: Request, res: Response) => {
  const articles = await Article.find({
    deleted: false
  });

  res.json({
    articles: articles
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});