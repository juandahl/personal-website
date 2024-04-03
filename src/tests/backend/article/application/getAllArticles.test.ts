
import { GetAllArticles } from "@/backend/contexts/article/application/getAllArticles";
import { createArticleMock } from "../domain/articleMother";
import { PostgreSqlArticleRepository } from "@/backend/contexts/article/infraestructure/postgreArticleRepository";

describe("getAllArticles", () => {
	describe("Happy Path", () => {
		it("Get all articles", async () => {
			const article = createArticleMock();
      const repository = new PostgreSqlArticleRepository();
      repository.findAll = jest.fn().mockResolvedValue([article]);

      const getAllArticles = new GetAllArticles(repository);
      const result = await getAllArticles.getAll();

      expect(repository.findAll).toHaveBeenCalled();
      expect(result).toStrictEqual([article]);
		});
	});
});
