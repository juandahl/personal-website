import { Article } from "./article";

export interface ArticleRepository {
	findAll(): Promise<Article[]>;
}
