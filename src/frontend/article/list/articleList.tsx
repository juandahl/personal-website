import { Article } from "../article.domain";
import ArticleCard from "./articleCard";

export default function ArticleList() {
	const articles = [
		{
			title: "Article 1",
			description:
				"It would help if you had these extensions to improve your workflow, reduce the number of bugs",
			image: "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/typescript.png",
			url: "/blog/1",
		},
		{
			title: "Article 1",
			description:
				"It would help if you had these extensions to improve your workflow, reduce the number of bugs",
			image: "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/typescript.png",
			url: "/blog/1",
		},
		{
			title: "Article 1",
			description:
				"It would help if you had these extensions to improve your workflow, reduce the number of bugs",
			image: "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/typescript.png",
			url: "/blog/1",
		},
		{
			title: "Article 1",
			description:
				"It would help if you had these extensions to improve your workflow, reduce the number of bugs",
			image: "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/typescript.png",
			url: "/blog/1",
		},
		{
			title: "Article 1",
			description:
				"It would help if you had these extensions to improve your workflow, reduce the number of bugs",
			image: "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/typescript.png",
			url: "/blog/1",
		},
		{
			title: "Article 1",
			description:
				"It would help if you had these extensions to improve your workflow, reduce the number of bugs",
			image: "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/typescript.png",
			url: "/blog/1",
		},
	] satisfies Article[];

	return (
		<div>
			{articles.map((article) => (
				<ArticleCard key={article.title} article={article} />
			))}
		</div>
	);
}
