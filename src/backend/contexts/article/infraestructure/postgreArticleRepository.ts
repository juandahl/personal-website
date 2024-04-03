import { sql } from "@vercel/postgres";
import { StringValueObject } from "../../shared/domain/stringValueObject";
import { Article } from "../domain/article";
import { ArticleRepository } from "../domain/articleRepository";

export class PostgreSqlArticleRepository implements ArticleRepository {
	constructor() {}


	async findAll(): Promise<Article[]> {
    try {
      const articles = await sql`SELECT * FROM articles`;
      return articles.rows.map((article) => Article.create(article.title, article.url));
    } catch(error) {
      console.log(error);
      throw error;
    }
	}
}