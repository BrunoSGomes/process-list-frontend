import { defineConfig } from 'cypress'
import { environment } from './src/environments/environment'

export default defineConfig({
  video: false,
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true,
  defaultCommandTimeout: 60000,
  viewportHeight: 768,
  viewportWidth: 1366,
  env: {
    baseUrl: environment.backend
  },
  e2e: {
    supportFile: false,
    baseUrl: 'http://localhost:4200',
    chromeWebSecurity: false,
    responseTimeout: 120000,
    specPattern: '**/*.cy.ts'
  }
})
