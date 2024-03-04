#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const specfile = require('./spec.js')
const commonfile = require('./common.js')
const pageFactory = require('./pageFactory.js')
const utilsModule = require('./utils.js')
const gitIgnore = require('./gitignore.js')
const cucumberJson = require('./cucumber.js')
const tsConfigJson = require('./tsconfigJson.js')
const pwconfigfile = require('./configplaywright.js');
const cucumberAllfile = require('./cucumberFiles.js')
const gitHubYMlfilePath = require('./workSpeceYml.js')

function readTeamsWebhookFile() {
  const filePath = path.join(__dirname, 'teams-webhook.js');
  return fs.readFileSync(filePath, 'utf8');
}
function readREADMEFile() {
  const filePath = path.join(__dirname, 'README.md');
  return fs.readFileSync(filePath, 'utf8');
}
function generateProjectStructure(projectName) {
  const projectPath = path.join(process.cwd(), projectName);

  if (!fs.existsSync(projectPath)) {
    fs.mkdirSync(projectPath);
  }

  const specDir = path.join(projectPath, 'spec');
  const uiSpecDir = path.join(projectPath, 'spec/uiSpec');
  const apiSpecDir = path.join(projectPath, 'spec/apiSpec');
  const utilsDir = path.join(projectPath, 'utils');
  const commDir = path.join(projectPath, 'common');
  const pageDir = path.join(projectPath, 'elementFactory');
  const reportDir = path.join(projectPath, 'report');
  const resourcetDir = path.join(projectPath, 'resource');
  const uiResourcetDir = path.join(projectPath, 'resource/uiTestData');
  const apiResourcetDir = path.join(projectPath, 'resource/apiTestData');
  const endToEndDir = path.join(projectPath, 'endtoend');
  const featuresDir = path.join(projectPath, 'endtoend/features');
  const stepDefinationDir = path.join(projectPath, 'endtoend/steps');
  const hooksTsPath = path.join(projectPath, 'endtoend');
  const packageJsonPath = path.join(projectPath, 'package.json');
  const playwrightConfigPath = path.join(projectPath, 'playwright.config.ts');
  const readMePath = path.join(projectPath, 'README.md');
  const gitIgnorePath = path.join(projectPath, '.gitignore');
  const cucumberJsonPath = path.join(projectPath, 'cucumber.json')
  const tsConfigPath = path.join(projectPath, 'tsconfig.json')
  const cucumberhtmlReporterPath = path.join(projectPath, 'generateReport.ts')
  const gitDir = path.join(projectPath, '.github');
  const workflowsDir = path.join(projectPath, '.github/workflows');






  const playwrightTest = '@playwright/test'
  const typeScript = '@types/node'
  const tsNode = 'ts-node'
  const cucumber = '@cucumber/cucumber'
  const cucumberHtmlReport = 'multiple-cucumber-html-reporter'

  fs.mkdirSync(specDir);
  fs.mkdirSync(uiSpecDir);
  fs.mkdirSync(apiSpecDir);
  fs.mkdirSync(utilsDir);
  fs.mkdirSync(commDir);
  fs.mkdirSync(pageDir);
  fs.mkdirSync(reportDir);
  fs.mkdirSync(resourcetDir);
  fs.mkdirSync(uiResourcetDir);
  fs.mkdirSync(apiResourcetDir);
  fs.mkdirSync(endToEndDir);
  fs.mkdirSync(featuresDir);
  fs.mkdirSync(stepDefinationDir);
  fs.mkdirSync(gitDir);
  fs.mkdirSync(workflowsDir);


  //Project Dependencies  
  const packageJson = {
    name: projectName,
    version: '0.0.0',
    description: 'A hybrid automation framework that seamlessly integrates Cucumber  BDD approach with Playwright powerful browser automation capabilities, enabling expressive, behavior-driven test scenarios for robust end-to-end testing in web applications.',
    scripts: {
      nilgiriDependencyInstall: ' npm i && npm install -D @playwright/test && npx playwright install',
      local: 'npx playwright test',
      cucumberRun: "cucumber-js test || true",
      posttest: "ts-node generateReport.ts",
      automation: "npm run nilgiriDependencyInstall && npm run local && npm run cucumberRun && npm run posttest "
    },
    dependencies: {
      monocart: "^1.1.0",
      playwright: "^*",
      [playwrightTest]: "^1.32.2",
      nilgirihub: "*",
      dotenv: "^16.0.3",
      [typeScript]: "^20.9.2",
      [tsNode]: "^10.9.1",
      [cucumber]: "^10.0.1",
      [cucumberHtmlReport]: "*"
    }
  };

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

  // Create folder Startuture for the framework.
  const specScript = `${specfile.specScriptTest}`;
  fs.writeFileSync(path.join(uiSpecDir, 'ui.spec.ts'), specScript);
  const apiScript = `${specfile.specAPIScriptTest}`;
  fs.writeFileSync(path.join(apiSpecDir, 'api.spec.ts'), apiScript);
  const commonUtilsScript = `${utilsModule.commonMethodUtilsScript}`;
  fs.writeFileSync(path.join(utilsDir, 'uiCommonMethodModule.ts'), commonUtilsScript);
  const pageFactoryUtilityScript = `${utilsModule.pageFactoryUtilsScript}`;
  fs.writeFileSync(path.join(utilsDir, 'uiElementFactoryModule.ts'), pageFactoryUtilityScript);
  const commonUIScript = `${commonfile.commonUiScriptTest}`;
  fs.writeFileSync(path.join(commDir, 'uiBase.ts'), commonUIScript);
  const commonAPIScript = `${commonfile.commonAPIScript}`;
  fs.writeFileSync(path.join(commDir, 'apiBase.ts'), commonAPIScript);
  const page1Script = `${pageFactory.pageOneScript}`;
  fs.writeFileSync(path.join(pageDir, 'pageOne.ts'), page1Script);
  const page2Script = `${pageFactory.pageTwoScript}`;
  fs.writeFileSync(path.join(pageDir, 'pageTwo.ts'), page2Script);
  const teamsWebhookContent = readTeamsWebhookFile();
  fs.writeFileSync(path.join(reportDir, 'teams-webhook.js'), teamsWebhookContent);
  const readmeContent = readREADMEFile();
  fs.writeFileSync(readMePath, readmeContent);

  const testDataScript = `{
    "postAPIUrl": "https://reqres.in/api/users",
    "getAPIUrl": "https://reqres.in/api/unknown",
    "tokenUrl": "https://api.escuelajs.co/api/v1/auth/login",
    "getUserProfileUrl" : "https://api.escuelajs.co/api/v1/auth/profile",
    "postAPIPayload":{
        "name": "SWAT_TEAM",
        "job": "Testing"
      },
    "tokenPayload":{
        "email": "john@mail.com",
        "password": "changeme"
      }
}`;
  fs.writeFileSync(path.join(uiResourcetDir, 'uiTestData.json'), testDataScript);
  fs.writeFileSync(path.join(apiResourcetDir, 'apiTestData.json'), testDataScript);
  const playwrightConfig = `${pwconfigfile.pwconfig}`;
  fs.writeFileSync(playwrightConfigPath, playwrightConfig);
  const gitIgnorefile = `${gitIgnore.gitIgnore}`;
  fs.writeFileSync(gitIgnorePath, gitIgnorefile);
  //Create Cucumebr Difrectory 
  const featuresScript = `${cucumberAllfile.featureScript}`;
  fs.writeFileSync(path.join(featuresDir, 'home.feature'), featuresScript);
  const stepDefinationScript = `${cucumberAllfile.stepDefinationScript}`;
  fs.writeFileSync(path.join(stepDefinationDir, 'homeStepDef.ts'), stepDefinationScript);
  const hooksTsScript = `${cucumberAllfile.hookScript}`;
  fs.writeFileSync(path.join(endToEndDir, 'hook.ts'), hooksTsScript);
  const cucumberfile = `${cucumberJson.cucumberJsonfile}`;
  fs.writeFileSync(cucumberJsonPath, cucumberfile);
  const cucumberreportfile = `${cucumberJson.cucumberHtmlReport}`;
  fs.writeFileSync(cucumberhtmlReporterPath, cucumberreportfile);
  const tsConfigfile = `${tsConfigJson.tsConfigfile}`;
  fs.writeFileSync(tsConfigPath, tsConfigfile);
  const gitHubYML = `${gitHubYMlfilePath.gitHubActionYMLScript}`;
  fs.writeFileSync(path.join(workflowsDir, 'automation.yml'), gitHubYML);
}

// Read the project name from the command line arguments.
const projectName = "nilgiri"; //process.argv[2]

if (!projectName) {
  console.error('Please provide a project name.');
  process.exit(1);
}

generateProjectStructure(projectName);

console.log(`Initialized project: ${projectName}`);
