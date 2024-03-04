const cucumberJsonfile = `{
    "default": {
      "requireModule": ["ts-node/register"],
      "require": ["endtoend/steps/*.ts","endtoend/*.ts"],
      "paths": ["endtoend/features/*"],
      "format": ["json:report/cucumber/report.json"],
      "formatOptions": {
        "snippetInterface": "async-await"
      }
    }
}`
const cucumberHtmlReport =
    
    `const report = require("multiple-cucumber-html-reporter") as any;

    report.generate({
        jsonDir: "report/cucumber/",
        reportPath: "report/",
        openReportInBrowser: true,
        saveCollectedJSON: false, // Make it true if you run with multiple feature file
        pageFooter : '<p align="center">This is Nilgiri Report</p>',
        pageTitle: "Nilgiri Report",
        reportName: "Nilgiri End To End Automation Report",
        displayDuration: true,
        // useCDN:true,
    
      metadata: {
            browser: {
                name: "chrome",
                version: "120",
            },
            device: "Local test machine",
            platform: {
                name: "ios",
                version: "16.04",
            },
        },
        // customData: {
        //     title: "Run info",
        //     data: [
        //         { label: "Project", value: "Custom project" },
        //         { label: "Release", value: "1.2.3" },
        //         { label: "Cycle", value: "B11221.34321" },
        //         { label: "Execution Start Time", value: "Nov 19th 2017, 02:31 PM EST" },
        //         { label: "Execution End Time", value: "Nov 19th 2017, 02:56 PM EST" },
        //     ],
        // },
    });`

module.exports = {
    cucumberJsonfile,
    cucumberHtmlReport
}