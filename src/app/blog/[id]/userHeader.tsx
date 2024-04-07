import React from "react";

import CustomAvatar from "@/frontend/shared/components/customAvatar";

import styles from "./styles.module.scss";

interface UserHeaderProps {}

const UserHeader: React.FC<UserHeaderProps> = () => {
	return (
		<div className={styles.header}>
			<CustomAvatar url="https://pbs.twimg.com/profile_images/1208026380992155649/2kubJ9T6_400x400.jpg" />

			<div>
				<h3 className={styles["header--title"]}>Juan Dahl</h3>
				<p>Fullstack Developer</p>
			</div>
		</div>
	);
};

export default UserHeader;
