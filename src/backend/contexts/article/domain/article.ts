import { Description } from "./description";
import { Title } from "./title";
import { Url } from "./url";

export type ArticlePrimitives = {
	title: string;
	url: string;
	image: string;
	description: string;
};

export class Article {
	private constructor(
		private readonly title: Title,
		private readonly url: Url,
		private readonly image: Url,
		private readonly description: Description,
	) {}

	static create(title: string, url: string, image: string, description: string): Article {
		return new Article(
			new Title(title),
			new Url(url),
			new Url(image),
			new Description(description),
		);
	}

	static fromPrimitives(primitives: ArticlePrimitives): Article {
		return new Article(
			new Title(primitives.title),
			new Url(primitives.url),
			new Url(primitives.image),
			new Description(primitives.description),
		);
	}

	toPrimitives(): ArticlePrimitives {
		return {
			title: this.title.value,
			url: this.url.value,
			image: this.image.value,
			description: this.description.value,
		};
	}
}
