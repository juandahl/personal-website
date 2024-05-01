"use client";
import classNames from "classnames";
import React from "react";

import LikeIcon from "./likeIcon";
import styles from "./styles.module.scss";

interface LikeButtonProps {
	count: number;
}

const LikeButton: React.FC<LikeButtonProps> = ({ count }) => {
	const [isLiked, setIsLiked] = React.useState(false);

	return (
		<button className={styles["like-btn"]} onClick={() => setIsLiked(!isLiked)}>
			<LikeIcon
				className={classNames(styles["like-icon"], {
					[styles["like-icon--clicked"]]: isLiked,
				})}
			/>
			{count}
		</button>
	);
};

export default LikeButton;
