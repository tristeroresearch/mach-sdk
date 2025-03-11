// jest.config.cjs
module.exports = {
  preset: 'ts-jest/presets/default-esm',
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    '^.+\\.(ts)$': [
      'ts-jest',
      {
        useESM: true,
        tsconfig: 'tsconfig.json'
      }
    ]
  },
  moduleNameMapper: {
    // Map ESM imports without file extensions correctly
    '^(\\.{1,2}/.*)\\.js$': '$1',
    
    // Mock the default 'axios' import
    '^axios$': '<rootDir>/src/libs/__mocks__/axios.ts',

    // Mock your custom 'machExchangeApi' import
    '^src/libs/axios$': '<rootDir>/src/libs/__mocks__/axios.ts'
  },
  testEnvironment: 'node'
}
