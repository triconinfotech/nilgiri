const commonMethodUtilsScript = `
import uiBase from '../common/uiBase';
import apiBase from '../common/apiBase';

const uiCommonUtils = {
    uiBase,
    apiBase,
}
export { uiCommonUtils }

`
const pageFactoryUtilsScript = `
import admin from '../elementFactory/pageOne';
import home from '../elementFactory/pageTwo';

// Define the pageFactoryUtils object
const elementFactoryUtils = {
    admin,
    home,
};

// Export the pageFactoryUtils object
export { elementFactoryUtils };




`
module.exports = {
    commonMethodUtilsScript,
    pageFactoryUtilsScript
}