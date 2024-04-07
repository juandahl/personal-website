import { Title } from "./title";
import { Url } from "./url";

export type ArticlePrimitives = {
	title: string;
	url: string;
};

export class Article {
	private constructor(
		private readonly title: Title,
		private readonly url: Url,
	) {}

	static create(title: string, url: string): Article {
		return new Article(new Title(title), new Url(url));
	}

	static fromPrimitives(primitives: ArticlePrimitives): Article {
		return new Article(new Title(primitives.title), new Url(primitives.url));
	}

	toPrimitives(): ArticlePrimitives {
		return {
			title: this.title.value,
			url: this.url.value,
		};
	}
}
