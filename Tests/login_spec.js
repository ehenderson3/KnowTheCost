describe('To test the Price Transparency Login process', function() {
    browser.manage().timeouts().implicitlyWait(50000)
    beforeEach(function () {
        //browser.get('https://pricetransparency.stg.surgeforward.com/');
        browser.get('https://pricetransparency.dev.surgeforward.com/login');
        //browser.get('http://localhost:12387/login');
        browser.manage().timeouts().implicitlyWait(6000)

});


    var ktc_conversion_page = require('../PageObjects/ktc_conversion_page.js');
    var ktc_login_page = require('../PageObjects/ktc_login_page.js');

    //PRTR-163
    // (Frontend) As a User I want to log into the application to start my days work

    it('Should be able to successfully login to KTC', function() {
        var loginTitleText = ktc_login_page.getLoginTitle();
        expect(loginTitleText).toBe('KnowTheCost');
        ktc_login_page.enterEmailFieldValue('preauthadmin@knowthecosts.com');
        ktc_login_page.enterPasswordFieldValue('knowthecost');
        ktc_login_page.clickSubmitButton();
        var conversionTitleText = ktc_conversion_page.getConversionTitle();
        expect(conversionTitleText).toBe('Patient Conversion');
    });

    //PRTR-164
    // (Frontend) As a User I want to be notified my login was unsuccessful so I can correct my input and enter the appropriate login details

    it('Should be presented an error if login credentials are incorrect', function() {
        var loginTitleText = ktc_login_page.getLoginTitle();
        expect(loginTitleText).toBe('KnowTheCost');
        ktc_login_page.enterEmailFieldValue('preauthadmin@knowthecosts.com');
        ktc_login_page.enterPasswordFieldValue('badpass');
        ktc_login_page.clickSubmitButton();
        var loginFailText = ktc_login_page.getLoginFailureMessage();
        expect(loginFailText).toBe('Login Failure');

    });


});

