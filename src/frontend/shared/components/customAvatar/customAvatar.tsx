import Image from "next/image";
import React from "react";

import styles from "./customAvatar.module.scss";

interface CustomAvatarProps {
	url: string;
}

const CustomAvatar: React.FC<CustomAvatarProps> = ({ url }) => {
	return (
		<div className={styles.avatar}>
			<Image className={styles["avatar--image"]} src={url} alt="avatar" width={48} height={48} />
		</div>
	);
};

export default CustomAvatar;
