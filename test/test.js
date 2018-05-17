module.exports = {
    beforeEach : browser => {
    browser.url('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')
    .waitForElementPresent('body',5000,'Checking that the page is loading')
    },// beforeEach
    after : browser => {
    browser.end()
    },// after
    'Enter wanted test' : browser=> {
    browser.waitForElementPresent('.cake',5000)
    },// enter wanted test
     'Enter header' : browser=> {
     browser.waitForElementPresent('input[name=hdrInput]',5000)
     browser.setValue('input[name=hdrInput]','ABCDEFGHIJK')
    
     },
     'Enter MKE' : browser =>{
        browser.waitForElementPresent('input[name=mkeInput]',5000)
        browser.setValue('input[name=mkeInput]','ABCDEFGHIJK')
            browser.waitForElementPresent('button',5000)
            browser.setValue('button#saveBtn.button',5000)
            .click('button#saveBtn.button')
        .pause(5000)
     }// Enter MKE
    //'Click submit' : browser=> {
    //browser.waitForElementPresent('button',5000)
    //browser.setValue('button#saveBtn.button',5000)
    //.click('button#saveBtn.button')
    
    //}// click submit
}// module exports