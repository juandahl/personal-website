import React from "react";

import LikeButton from "./likeButton";
import styles from "./styles.module.scss";

interface LeftSideSectionProps {}

const LeftSideSection: React.FC<LeftSideSectionProps> = () => {
	return (
		<div className={styles.root}>
			<LikeButton />
		</div>
	);
};

export default LeftSideSection;
