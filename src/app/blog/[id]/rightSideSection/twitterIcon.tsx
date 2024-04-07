import React from "react";

interface TwitterIconProps {}

const TwitterIcon: React.FC<TwitterIconProps> = () => {
	return (
		<svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g filter="url(#filter0_d_704_2282)">
				<rect
					x="8.97461"
					y="38.9292"
					width="32.1187"
					height="32.1188"
					rx="7.73229"
					transform="rotate(-90 8.97461 38.9292)"
					fill="white"
				/>
				<path
					d="M34.1801 17.4743C33.5157 17.7687 32.802 17.9677 32.0516 18.0576C32.8258 17.5943 33.405 16.8652 33.6812 16.0063C32.9538 16.4384 32.1577 16.7425 31.3276 16.9054C30.7693 16.3094 30.0298 15.9143 29.224 15.7815C28.4182 15.6487 27.5911 15.7857 26.8711 16.1712C26.1511 16.5567 25.5786 17.1691 25.2423 17.9133C24.906 18.6576 24.8249 19.492 25.0114 20.2871C23.5376 20.2131 22.0957 19.83 20.7795 19.1627C19.4633 18.4954 18.3021 17.5588 17.3713 16.4137C17.053 16.9627 16.87 17.5993 16.87 18.2772C16.8696 18.8875 17.0199 19.4884 17.3075 20.0267C17.5951 20.565 18.0111 21.0239 18.5186 21.3628C17.93 21.3441 17.3544 21.1851 16.8397 20.899V20.9467C16.8397 21.8027 17.1358 22.6323 17.6777 23.2948C18.2197 23.9573 18.9742 24.4119 19.8132 24.5814C19.2672 24.7292 18.6947 24.7509 18.1391 24.645C18.3758 25.3815 18.8369 26.0256 19.4578 26.487C20.0788 26.9484 20.8284 27.2041 21.6019 27.2183C20.2889 28.249 18.6673 28.8081 16.9981 28.8057C16.7024 28.8058 16.4069 28.7885 16.1133 28.754C17.8077 29.8434 19.7801 30.4216 21.7945 30.4193C28.6135 30.4193 32.3413 24.7716 32.3413 19.8733C32.3413 19.7142 32.3373 19.5535 32.3301 19.3943C33.0552 18.87 33.6811 18.2206 34.1785 17.4767L34.1801 17.4743Z"
					fill="#161719"
				/>
			</g>
			<defs>
				<filter
					id="filter0_d_704_2282"
					x="0.0527334"
					y="0.267838"
					width="49.9629"
					height="49.9624"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="2.37917" />
					<feGaussianBlur stdDeviation="4.46094" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0.0862745 0 0 0 0 0.0901961 0 0 0 0 0.0980392 0 0 0 0.25 0"
					/>
					<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_704_2282" />
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_704_2282"
						result="shape"
					/>
				</filter>
			</defs>
		</svg>
	);
};

export default TwitterIcon;
