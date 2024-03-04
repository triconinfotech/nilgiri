const pageOneScript = `const pageOne = {

    pageTitle: 'h1[class="title"]',
    industryHeading: 'h5[class="icon-box-heading"]'
}
export default{pageOne}

`
const pageTwoScript = `const pageTwo = {

    homePageMenu: 'ul[id="menu-primary"] li a',
    conatactUsPagelast: '(//div[@class="elementor-widget-container"]/div/h2)[5]',
    contactUsText: 'div[class="elementor-widget-container"] h2'
}
export default {pageTwo}

`
module.exports = {
    pageOneScript,
    pageTwoScript
}