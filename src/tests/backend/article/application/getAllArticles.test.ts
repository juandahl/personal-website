import { GetAllArticles } from "@/backend/contexts/article/application/getAllArticles";
import { PostgreSqlArticleRepository } from "@/backend/contexts/article/infraestructure/postgreArticleRepository";

import { createArticleMock } from "../domain/articleMother";

describe("getAllArticles", () => {
	describe("Happy Path", () => {
		it("Get all articles", async () => {
			const article = createArticleMock();
			const repository = new PostgreSqlArticleRepository();
			repository.findAll = jest.fn().mockResolvedValue([article]);

			const getAllArticles = new GetAllArticles(repository);
			const result = await getAllArticles.getAll();

			// eslint-disable-next-line @typescript-eslint/unbound-method
			expect(repository.findAll).toHaveBeenCalled();
			expect(result).toStrictEqual([article]);
		});
	});
});
