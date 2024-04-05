import Link from "next/link";
import React from "react";

import LinkedInIcon from "./linkedInIcon";
import styles from "./styles.module.scss";

interface RightSideSectionProps {}

const socialNetworks = [
	{
		href: "/",
		Icon: LinkedInIcon,
	},
];

const RightSideSection: React.FC<RightSideSectionProps> = () => {
	return (
		<div className={styles.root}>
			{socialNetworks.map(({ href, Icon }) => (
				<Link href={href} target="_blank">
					<Icon />
				</Link>
			))}
		</div>
	);
};

export default RightSideSection;
