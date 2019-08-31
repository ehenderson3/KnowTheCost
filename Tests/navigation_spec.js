describe('To test the Price Transparency Contact Scheduling process', function() {
    browser.manage().timeouts().implicitlyWait(5000)
    beforeEach(function () {
        //browser.get('https://pricetransparency.dev.surgeforward.com/login');
        //browser.get('http://localhost:12387/login');
        browser.get('https://pricetransparency.dev.surgeforward.com/login');


    });


    var ktc_login_page = require('../PageObjects/ktc_login_page.js');
    var ktc_navigation_page = require('../PageObjects/ktc_navigation_page.js');

    //PRTR-163
    // (Frontend) As a User I want to log into the application to start my days work

    it('Should be able to successfully login to KTC', function() {
        var loginTitleText = ktc_login_page.getLoginTitle();
        expect(loginTitleText).toBe('KnowTheCost');
        ktc_login_page.enterEmailFieldValue('preauthadmin@knowthecosts.com');
        ktc_login_page.enterPasswordFieldValue('knowthecost');
        ktc_login_page.clickSubmitButton();
        ktc_navigation_page.selectProvidersTab();
        ktc_navigation_page.selectProcedureCodeTab();
        ktc_navigation_page.selectTPATab();
        ktc_navigation_page.selectScripts();
        ktc_navigation_page.selectUsersTab();
        ktc_navigation_page.selectScheduleTab();
        ktc_navigation_page.conversionTab();

    });

});