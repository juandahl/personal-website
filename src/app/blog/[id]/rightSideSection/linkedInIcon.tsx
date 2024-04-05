import React from "react";

interface LinkedInIconProps {
	className?: string;
}

const LinkedInIcon: React.FC<LinkedInIconProps> = (props) => {
	return (
		<svg
			width="51"
			height="50"
			viewBox="0 0 51 50"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<g filter="url(#filter0_d_704_2294)">
				<rect
					x="8.97461"
					y="38.7053"
					width="32.1187"
					height="32.1188"
					rx="7.73229"
					transform="rotate(-90 8.97461 38.7053)"
					fill="white"
				/>
				<path
					d="M20.1578 31.7916H16.412V19.729H20.1578V31.7916ZM18.2827 18.0835C17.0851 18.0835 16.1133 17.0911 16.1133 15.8935C16.1133 15.3181 16.3418 14.7664 16.7487 14.3595C17.1555 13.9527 17.7073 13.7241 18.2827 13.7241C18.858 13.7241 19.4098 13.9527 19.8167 14.3595C20.2235 14.7664 20.452 15.3181 20.452 15.8935C20.452 17.0911 19.4803 18.0835 18.2827 18.0835ZM34.1769 31.7916H30.4395V25.9196C30.4395 24.5201 30.4111 22.7256 28.4921 22.7256C26.5446 22.7256 26.2459 24.2458 26.2459 25.819V31.7916H22.504V19.729H26.0962V21.3744H26.1485C26.6485 20.4265 27.87 19.4263 29.6923 19.4263C33.4832 19.4263 34.1801 21.9229 34.1801 25.1653V31.7916H34.1769Z"
					fill="#161719"
				/>
			</g>
			<defs>
				<filter
					id="filter0_d_704_2294"
					x="0.0527334"
					y="0.0439608"
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
					<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_704_2294" />
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_704_2294"
						result="shape"
					/>
				</filter>
			</defs>
		</svg>
	);
};

export default LinkedInIcon;
