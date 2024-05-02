import { sql } from "@vercel/postgres";

import { Article, ArticlePrimitives } from "../domain/article";
import { ArticleRepository } from "../domain/articleRepository";

export class PostgreSqlArticleRepository implements ArticleRepository {
	async findAll(): Promise<Article[]> {
		try {
			const articles = await sql<ArticlePrimitives>`SELECT * FROM articles`;

			return articles.rows.map((article) =>
				Article.create(article.title, article.url, article.image, article.description),
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
}
