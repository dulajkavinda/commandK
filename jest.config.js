/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
    '.+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/build/'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  modulePathIgnorePatterns: ['<rootDir>/build/'],
}
