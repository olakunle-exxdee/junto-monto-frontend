import type { Config } from 'jest';

const config: Config = {
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
};

export default config;
