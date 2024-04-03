import { Article } from "../domain/article";
import { ArticleRepository } from "../domain/articleRepository";

export class GetAllArticles {
	constructor(private readonly repository: ArticleRepository) {}

	async getAll(): Promise<Article[]> {
    return this.repository.findAll();
	}
}