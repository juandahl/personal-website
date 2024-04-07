import { Article } from "@/backend/contexts/article/domain/article";
import { ArticleRepository } from "@/backend/contexts/article/domain/articleRepository";

import { createArticleMock } from "../domain/articleMother";

export class MockArticleRepository implements ArticleRepository {
	async findAll(): Promise<Article[]> {
		try {
			const articles = [createArticleMock()];

			return Promise.resolve(articles);
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
}
