import React from "react";

import Example from "./example.mdx";
import LeftSideSection from "./leftSideSection";
import styles from "./page.module.scss";
import RightSideSection from "./rightSideSection";

interface ArticleProps {}

const Article: React.FC<ArticleProps> = () => {
	return (
		<div className={styles.root}>
			<LeftSideSection />
			<div className={styles.content}>
				<Example />
			</div>
			<RightSideSection />
		</div>
	);
};

export default Article;
