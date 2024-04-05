"use client";
import classNames from "classnames";
import React from "react";

import LikeIcon from "./likeIcon";
import styles from "./styles.module.scss";

interface LikeButtonProps {}

const LikeButton: React.FC<LikeButtonProps> = () => {
	const [isLiked, setIsLiked] = React.useState(false);

	return (
		<button onClick={() => setIsLiked(!isLiked)}>
			<LikeIcon
				className={classNames(styles["like-icon"], {
					[styles["like-icon--clicked"]]: isLiked,
				})}
			/>
		</button>
	);
};

export default LikeButton;
