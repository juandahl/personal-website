import { ArticleRepository } from "@/backend/contexts/article/domain/articleRepository";
import { Article } from "@/backend/contexts/article/domain/article";
import { createArticleMock } from "../domain/articleMother";

export class MockArticleRepository implements ArticleRepository {
	constructor() {}


	async findAll(): Promise<Article[]> {
    try {
      const articles = [
        createArticleMock()
      ];

      return Promise.resolve(articles);
    } catch(error) {
      console.log(error);
      throw error;
    }
	}
}