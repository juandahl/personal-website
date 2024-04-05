import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...components,
		hr: (props) => <hr className="mb-4" {...props} />,
		pre: (props) => <pre className="code-container" {...props} />,
	};
}
