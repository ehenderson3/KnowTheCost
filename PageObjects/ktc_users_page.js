var ktc_users_page = function(){


    this.selectAddUserButton = function() {

        browser.sleep(2000);
        var addNewUserButton = element(by.buttonText('Add New User'));
/*        var newButtonDisplayed = addNewUserButton.isDisplayed();
        expect(newButtonDisplayed).toBe(true);

        addNewUserButton.isEnabled();*/
        addNewUserButton.click();

        var firstNameField = element(by.id('first_name'));
        var firstNameFieldDisplayed =  firstNameField.isDisplayed()
        expect(firstNameFieldDisplayed).toBe(true);

    };

    this.validateThatNewUserFormAppear = function() {
        var firstNameField = element(by.id('first_name'));
        var lastNameField = element(by.id('last_name'));
        var emailField = element(by.id('email'));
        var passwordField = element(by.id('replacement-password'));
        var passwordConfirmField = element(by.id('replacement-password-again'));

        var firstNameFieldDisplayed =  firstNameField.isDisplayed();
        var lastNameFieldDisplayed =  lastNameField.isDisplayed();
        var emailFieldDisplayed =  emailField.isDisplayed();
        var passwordFieldDisplayed =  passwordField.isDisplayed();
        var passwordConfirmFieldDisplayed =  passwordConfirmField.isDisplayed();

        expect(firstNameFieldDisplayed).toBe(true);
        expect(lastNameFieldDisplayed).toBe(true);
        expect(emailFieldDisplayed).toBe(true);
        expect(passwordFieldDisplayed).toBe(true);
        expect(passwordConfirmFieldDisplayed).toBe(true);
    };

    this.fillOutNewUserForm = function(fName, lName, email, password, confirmPass) {
        var firstNameField = element(by.id('first_name'));
        var lastNameField = element(by.id('last_name'));
        var emailField = element(by.id('email'));
        var passwordField = element(by.id('replacement-password'));
        var passwordConfirmField = element(by.id('replacement-password-again'));

        var firstNameFieldDisplayed =  firstNameField.isDisplayed();
        var lastNameFieldDisplayed =  lastNameField.isDisplayed();
        var emailFieldDisplayed =  emailField.isDisplayed();
        var passwordFieldDisplayed =  passwordField.isDisplayed();
        var passwordConfirmFieldDisplayed =  passwordConfirmField.isDisplayed();

        expect(firstNameFieldDisplayed).toBe(true);
        expect(lastNameFieldDisplayed).toBe(true);
        expect(emailFieldDisplayed).toBe(true);
        expect(passwordFieldDisplayed).toBe(true);
        expect(passwordConfirmFieldDisplayed).toBe(true);

        firstNameField.sendKeys(fName);
        lastNameField.sendKeys(lName);
        emailField.sendKeys(email);
        passwordField.sendKeys(password);
        passwordConfirmField.sendKeys(confirmPass);

    };

    var getRandomString = function(length) {
        var string = '';
        var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        for (i = 0; i < length; i++) {
            string += letters.charAt(Math.floor(Math.random() * letters.length));
        }
        return string;
    };

    this.selectTheSaveButton = function() {
        var saveButton = element(by.css('.ui-button-text.ui-clickable'));
        var saveButtonFieldDisplayed =  saveButton.isDisplayed();
        expect(saveButtonFieldDisplayed).toBe(true);

        saveButton.click();
    };





    this.searchForUser = function(value) {
        var searchUserField = element(by.css('.ui-inputtext.ui-corner-all.ui-state-default.ui-widget'));
        searchUserField.sendKeys(value)
    };

    this.selectBulkAction = function() {
        return element(by.tagName('#ui-tabpanel-2-label > span')).click();
    };


    this.selectCheckBox = function() {
        return element(by.tagName('#ui-tabpanel-2-label > span')).click();
    };

    this.saveButtonActive = function() {
        var a = element(by.buttonText('Save')).isEnabled();
        expect(a).toBe(true);

    };
    this.saveButtonNotActive = function() {
        var a = element(by.buttonText('Save')).isEnabled();
        expect(a).toBe(false);

    };

    this.selectRole = function(num) {
        browser.sleep(2000);
        var roleDropDown = element(by.css('.ui-dropdown-trigger-icon.ui-clickable.pi.pi-chevron-down'));
        roleDropDown.click();
        var values = element(by.css('[role="listbox"]'));

        selectDropdownbyNum(values,num)


    };

    var selectDropdownbyNum = function ( element, optionNum ) {
        if (optionNum){
            var options = element.all(by.css('.ui-dropdown-item.ui-corner-all'));
                options.then(function(options){
                    options[optionNum].click();
                });
        }
    };

    var findRowByNamef= function ( myText ) {

        var buttons = browser.findElements(By.tagName('p-table'));
        var tds = browser.findElements(By.css('ng-star-inserted'));
        for (i = 0; i < tds.length; i++) {
            if (tds[i].getText() == myText) {
                buttons[i].click()
                break;
            }
        };
    };

    var rowFinder = function ( element, optionNum ) {

    };

   var getRandomNum = function(min, max){
        return parseInt(Math.random() * (max - min) + min);
    };

};


module.exports = new ktc_users_page();