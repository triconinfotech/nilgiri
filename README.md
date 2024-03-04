<p align="center">
  <img src="https://raw.githubusercontent.com/animeshkumar29/nilgiri/main/nilgiri.png" alt="Nilgiri Logo" width="200"/>
</p>
<h1 align="center">Nilgiri Automation Framework</h1>

<p align="center">
    <em>Welcome to <strong>Nilgiri</strong>, An innovative hybrid testing framework combining Cucumber's BDD elegance with Playwright's browser automation for streamlined, behavior-driven web application testing..</em>
</p>

<p align="center">
    <!-- Playwright specific badges -->
    <a href="https://github.com/microsoft/playwright">
        <img src="https://img.shields.io/badge/Playwright-Framework-blue" alt="Playwright Framework">
    </a>
    <a href="https://cucumber.io/">
        <img src="https://img.shields.io/badge/Cucumber-BDD-green.svg" alt="Cucumber BDD">
    </a>
    <a href="https://github.com/animeshkumar29/nilgiri/blob/main/LICENSE.txt">
        <img src="https://img.shields.io/github/license/animeshkumar29/nilgiri" alt="license: MIT">
    </a>
</p>

## Framework Flow

![Nilgiri Framework](https://raw.githubusercontent.com/animeshkumar29/nilgiri/main/nilgiriFramework.png)

---

## Folder Structure
``` bash
nilgiri/
├── spec/
│   ├── apiSpec/
│   │   ├── api.spec.ts
|   ├── uiSpec/
|       ├── ui.spec.ts
├── endtoend/
│   ├── features/
│   │   ├── home.feature
|   ├── steps/
|   |   ├── homeStepDef.ts
|   ├── hook.ts
│   
├── common/
|   ├── apiBase.ts
│   ├── uiBase.ts
|   
├── elementFactory/
│   ├── pageOne.ts
│   ├── pageTwo.ts
|
├── utils/
│   ├── uiCommonMethodModule.ts
│   ├── uiElementFactoryModule.ts
│   
├── resource/
│   ├── apiTestData
|   |   ├── apiTestData.json
|   |
│   ├── uiTestData
|       ├── uiTestData.json
|
├── report/
|   ├── teams-webhook.js
|
├── node_modules/
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
├── cucumber.json
├── generateReport.ts
├── tsConfig.json
```
- `node_modules`: Contains all the npm packages required by the project.
- `elementFactory`: This directory holds the page element object models, facilitating easy maintenance and readability.
- `common`: Shared utilities and functions that can be reused across different tests are located here.
- `resource`: Contains subdirectories for different types of test data and other resources:
  - `apiTestData`: JSON files or other data formats for API testing.
  - `uiTestData`: Data files specific to UI testing.
- `spec`: Test specifications are divided into two categories:
  - `apiSpec`: Contains specification files for API tests.
  - `uiSpec`: Contains specification files for UI tests.
- `endtoend`: Test specifications are divided into two categories:
  - `features`: Contains feature files for the End to End and business use cases.
  - `steps`: Contains steps Defination for the Feature Files.
- `test-results`: Stores the output from test executions, such as reports and logs.
- `utils`: Helper methods and utility functions to support various testing operations.
- `.gitignore`: Specifies intentionally untracked files to ignore.
- `package.json` & `package-lock.json`: Define project metadata and lock down the versions of npm packages.
- `playwright.config.ts`: Configuration file for Playwright test runner.
- `README.md`: Documentation for the project.


---

## Installation

Before you begin, ensure you have [Node.js](https://nodejs.org/) installed on your system.

1. Clone the repository:
   ```bash
   git clone https://your-repository-url
   ```
2. Navigate to the project directory:
   ```bash
   cd nigiri
   ```

## Record Your Test

Record your test with [Playwright CodeGen](https://playwright.dev/docs/codegen)

![Playwright CodeGen Demo](https://raw.githubusercontent.com/animeshkumar29/nilgiri/main/PlaywrightCodeGen.gif)

## Running Tests

Execute the following command to run all tests:
```bash
npm run automation
```

For running specific tests, you can use:
```bash
npx playwright test --grep "test name pattern"
```
For running specific tests to GitHub Action from Curl Command:
```bash
curl --location 'https://api.github.com/repos/{repoOwnerName}/{RepoName}/actions/workflows/automation.yml/dispatches' \
--header 'Accept: application/vnd.github+json' \
--header 'X-GitHub-Api-Version: 2022-11-28' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <Your Git Hub Personal Token>' \
--data '{
    "ref": "main",
    "inputs": {
        "custom_feature_file": "endtoend/features/home.feature"
    }
}'
```
## Adding New Tests

To add a new UI test:
1. Create a new `.ts` file in the `spec/uiSpec` directory.
2. Write your test using the Playwright API and the page objects from `elementFactory`.

For API tests, follow a similar process in the `spec/apiSpec` directory.

## Contributing

We welcome contributions to the Nilgiri framework. Please read through our contributing guidelines before making a pull request.

## Support

If you encounter any issues or have questions, please file an issue on the GitHub repository issue tracker.[Nilgiri GitHub repository](https://github.com/animeshkumar29/nilgiri/issues).

## License

Nilgiri is open-source software licensed under the [licensed under the MIT license](https://github.com/animeshkumar29/nilgiri/blob/main/LICENSE.txt).

Thank you for choosing Nilgiri Framework for your automation needs!
<p align="center">
    Copyright (c) 2023 Tricon Infotech
</p>
