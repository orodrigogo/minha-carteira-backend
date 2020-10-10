module.exports = {
  clearMocks: true,
  testEnvironment: 'node',
  coverageProvider: 'v8',
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['<rootDir>/src/modules/*/service/*.js'],
};
