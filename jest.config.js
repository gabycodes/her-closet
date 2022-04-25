module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '.mock.ts',
    '.config.js',
    '.setup.ts',
  ],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/utils/svgMock.js',
  },
};
