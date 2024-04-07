import React from "react";

import Example from "./example.mdx";
import LeftSideSection from "./leftSideSection";
import RightSideSection from "./rightSideSection";
import styles from "./styles.module.scss";
import UserHeader from "./userHeader";

interface ArticleProps {}

const Article: React.FC<ArticleProps> = () => {
	return (
		<div className={styles.root}>
			<div className={styles.body}>
				<LeftSideSection />
				<div>
					<UserHeader />
					<div className={styles.content}>
						<Example />
					</div>
				</div>
				<RightSideSection />
			</div>
		</div>
	);
};

export default Article;
