"use client";
import classNames from "classnames";
import Link from "next/link";
import React from "react";

import ShareIcon from "./shareIcon";
import styles from "./styles.module.scss";

interface ShareButtonProps {
	url: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ url }) => {
	const articleUrl = window.location.href;
	const content = `Te recomiendo este articulo sobre IA: ${articleUrl}`;

	return (
		<Link className={styles["share-btn"]} href={`${url}${content}`} target="_blank">
			<ShareIcon className={classNames(styles["like-icon"])} />
		</Link>
	);
};

export default ShareButton;
