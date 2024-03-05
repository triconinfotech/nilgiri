// @ts-check
import { defineConfig, devices } from '@playwright/test';
import teamsWebhook from './report/teams-webhook';

export default defineConfig({
  testDir: './spec',
  timeout: 240 * 1000,
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  workers: 1,// process.env.CI ? 1 : undefined,
  reporter: [
    ['list'],
    ['monocart-reporter', {
      name: "NilgiriNest Automation Test Report =>",
      outputFile: './test-results/report.html',
      tags: {
        Sanity: {
            style: {
                background: '#6F9913'
            },
            description: 'This is Smoke Test'
        },
        Regression: {
            background: '#c00'
        }
    },
      visitor: (data, metadata, collect) => {
        // auto collect data from the comments
        const parserOptions = {
          // Indicate the mode the code should be parsed in.
          // Can be one of "script", "module", or "unambiguous". Defaults to "script".
          sourceType: 'module',

          // enable typescript syntax.
           plugins: ['typescript']

          // more https://babeljs.io/docs/babel-parser
        };
        const comments = collect.comments(parserOptions);
        if (comments) {
          // Append all collected comments data to report data
          Object.assign(data, comments);
        }
      },
      onEnd: async (reportData, capability) => {
        if (process.env.CI) {
          // teams and testRail integration with webhook
          await teamsWebhook(reportData, capability);
          //await testrail(reportData, capability);
        }
      }
    }]
  ],
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     */
    timeout: 30 * 1000,
  },
  use: {
    baseURL: 'https://www.triconinfotech.com/',
    browserName: "chromium",
    headless:false,
    screenshot:'on',
    trace:"off",
    video: 'off',
    /* Maximum time each action such as click() can take. Defaults to 0 (no limit). */
    actionTimeout: 50 * 1000,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],
});