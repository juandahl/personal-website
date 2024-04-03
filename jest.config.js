const nextJest = require("next/jest");

const createJestConfig = nextJest({
	dir: "./",
	backendCoverage: ["src/backend/**/*.{js,jsx,ts,tsx}"],
	coverageDirectory: "coverage",
});
const customJestConfig = {
	moduleDirectories: ["node_modules", "<rootDir>/"],
	testEnvironment: "jest-environment-jsdom",
};
module.exports = createJestConfig(customJestConfig);
