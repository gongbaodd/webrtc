module.exports = {
  transform: {
    "^.+\\.svelte$": "jest-transform-svelte",
    "^.+\\.js$": "babel-jest",
  },
  moduleFileExtensions: ["js", "svelte"],
  testPathIgnorePatterns: ["node_modules"],
  bail: false,
  verbose: true,
  transformIgnorePatterns: ["node_modules"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  collectCoverageFrom: ["src/**/*.js", "src/**/*.svelte"],
  coverageDirectory: "coverage",
  coverageReporters: ["json", "lcov", "text-summary", "clover"],
  clearMocks: true,
  collectCoverage: true,
};
