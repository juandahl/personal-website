import React from "react";

import LikeButton from "@/frontend/article/shared/likeButton/likeButton";

import ShareButton from "./shareButton";
import styles from "./styles.module.scss";

interface LeftSideSectionProps {}

const LeftSideSection: React.FC<LeftSideSectionProps> = () => {
	return (
		<div className={styles.root}>
			<LikeButton count={5} />
			<ShareButton url="https://twitter.com/intent/tweet?text=" />
		</div>
	);
};

export default LeftSideSection;
