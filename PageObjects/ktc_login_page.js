var Ktc_login_page = function(){

    this.enterEmailFieldValue = function(value) {
        element(by.css('#login-form-container > app-login-form > form > div > div:nth-child(3) > input')).sendKeys(value)

    };

    this.enterPasswordFieldValue = function(value) {
        element(by.css('#login-form-container > app-login-form > form > div > div:nth-child(5) > input')).sendKeys(value)

    };

    this.clickSubmitButton= function() {
        element(by.id('submit-login')).click().then(function() {
            // do some stuff
        });

    };

    this.getLoginTitle = function() {
       return element(by.tagName('h1')).getText();

    };
    this.getLoginFailureMessage = function() {
        return element(by.className('ui-toast-summary')).getText();

    };

//submit-login

};

module.exports = new Ktc_login_page();