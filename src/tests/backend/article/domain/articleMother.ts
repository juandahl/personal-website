import { Factory } from "fishery";

import { Article } from "@/backend/contexts/article/domain/article";

const articleFactory = Factory.define<Article>(() =>
	Article.create("Unit tests", "https://bucket.com/unit-tests"),
);

export const createArticleMock = (props: Partial<Article> = {}): Article => {
	return articleFactory.build({ ...props });
};
