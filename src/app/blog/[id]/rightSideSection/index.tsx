import Link from "next/link";
import React from "react";

import LinkedInIcon from "./linkedInIcon";
import styles from "./styles.module.scss";
import TwitterIcon from "./twitterIcon";

interface RightSideSectionProps {}

const socialNetworks = [
	{
		href: "https://www.linkedin.com/in/juandahl/",
		Icon: LinkedInIcon,
	},
	{
		href: "https://twitter.com/Juandahl",
		Icon: TwitterIcon,
	},
];

const RightSideSection: React.FC<RightSideSectionProps> = () => {
	return (
		<div className={styles.root}>
			{socialNetworks.map(({ href, Icon }) => (
				<Link key={href} href={href} target="_blank">
					<Icon />
				</Link>
			))}
		</div>
	);
};

export default RightSideSection;
