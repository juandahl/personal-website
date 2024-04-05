import React from "react";

import Example from "./example.mdx";

interface ComponentProps {}

const Component: React.FC<ComponentProps> = () => {
	return (
		<>
			<Example />
		</>
	);
};

export default Component;
