import Link from "next/link";
import React from "react";

import { Article } from "../article.domain";
import LikeButton from "../shared/likeButton";
import styles from "./articleCard.module.scss";

interface ArticleCardProps {
	article: Article;
}

function ArticleCard({ article }: ArticleCardProps) {
	return (
		<Link href={article.url} className={styles.card}>
			<img className={styles["card--image"]} src={article.image} alt={article.title} />
			<div>
				<h3 className={styles["card--title"]}>{article.title}</h3>
				<p className={styles["card--description"]}>{article.description}</p>
				<div>
					<LikeButton count={5} />
				</div>
			</div>
		</Link>
	);
}

export default ArticleCard;
