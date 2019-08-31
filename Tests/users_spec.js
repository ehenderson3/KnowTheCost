/* global it, describe, expect */

describe('To test the Price Transparency User Management process', function() {

    //PRTR-212
    //As an admin I want to assign roles to users to manage my team structure and user access levels
    //browser.manage().timeouts().implicitlyWait(5000)
    beforeEach(function () {
        browser.manage().timeouts().implicitlyWait(5000)
            browser.get('https://pricetransparency.dev.surgeforward.com/login');
            //browser.get('http://localhost:12387/');
            ktc_login_page.enterEmailFieldValue('preauthadmin@knowthecosts.com');
            ktc_login_page.enterPasswordFieldValue('knowthecost');
            ktc_login_page.clickSubmitButton();



    });



    var ktc_users_page = require('../PageObjects/ktc_users_page.js');
    var ktc_login_page = require('../PageObjects/ktc_login_page.js');
    var ktc_navigation_page = require('../PageObjects/ktc_navigation_page.js');


    it('Should be able validate all fields in the Add User form', function() {

        ktc_navigation_page.selectProvidersTab();
        ktc_navigation_page.selectUsersTab();
        ktc_users_page.selectAddUserButton();
        ktc_users_page.validateThatNewUserFormAppear();
    });


    it('User Should be able create a new user', function() {

        ktc_navigation_page.selectProvidersTab();
        ktc_navigation_page.selectUsersTab();
        ktc_users_page.selectAddUserButton();
        ktc_users_page.validateThatNewUserFormAppear();
        ktc_users_page.fillOutNewUserForm("TomAutomation","Jones","automation@bigurl.com","12345678","12345678");
        ktc_users_page.saveButtonActive()

    });

    it('User Should not be able create a new user if password does not match' , function() {
        ktc_navigation_page.selectProvidersTab();
        ktc_navigation_page.selectUsersTab();
        ktc_users_page.selectAddUserButton();
        ktc_users_page.validateThatNewUserFormAppear();
        ktc_users_page.fillOutNewUserForm("TomAutomation","Jones","automation@bigurl.com","1245678","12345678");
        ktc_users_page.saveButtonNotActive()

    });

    it('User Should be able create a new user if First Name field has spaces' , function() {

        ktc_navigation_page.selectProvidersTab();
        ktc_navigation_page.selectUsersTab();
        ktc_users_page.selectAddUserButton();
        ktc_users_page.validateThatNewUserFormAppear();
        ktc_users_page.fillOutNewUserForm("T o m A u t o m a t i o n","Jones","automation@bigurl.com","12345678","12345678");
        ktc_users_page.saveButtonActive()

    });

    it('User Should be able create a new user if Last Name field has special char' , function() {
        ktc_navigation_page.selectProvidersTab();
        ktc_navigation_page.selectUsersTab();
        ktc_users_page.selectAddUserButton();
        ktc_users_page.validateThatNewUserFormAppear();
        ktc_users_page.fillOutNewUserForm("TomAutomation","J@&**())__ones","automation@bigurl.com","12345678","12345678");
        ktc_users_page.saveButtonActive()

    });

    it('User Should not be able create a new user if Email field is blank' , function() {
        ktc_navigation_page.selectProvidersTab();
        ktc_navigation_page.selectUsersTab();
        ktc_users_page.selectAddUserButton();
        ktc_users_page.validateThatNewUserFormAppear();
        ktc_users_page.fillOutNewUserForm("TomAutomation","Jones","","12345678","12345678");
        ktc_users_page.saveButtonNotActive()

    });

    it('User Should not be able create a new user if email has no @ symbol' , function() {
        ktc_navigation_page.selectProvidersTab();
        ktc_navigation_page.selectUsersTab();
        ktc_users_page.selectAddUserButton();
        ktc_users_page.validateThatNewUserFormAppear();
        ktc_users_page.fillOutNewUserForm("","Jones","automation.com","12345678","12345678");
        ktc_users_page.saveButtonNotActive()

    });


    it('User Should not be able create a new user if password does not match confirmed password' , function() {
        ktc_navigation_page.selectProvidersTab();
        ktc_navigation_page.selectUsersTab();
        ktc_users_page.selectAddUserButton();
        ktc_users_page.validateThatNewUserFormAppear();
        ktc_users_page.fillOutNewUserForm("Tom","Jones","automation@com","12345679","12345678");
        ktc_users_page.saveButtonNotActive();
        ktc_navigation_page.selectProvidersTab();
        ktc_navigation_page.selectUsersTab();

    });


    it('User Role dropdown should contain Operator' , function() {

        var addRandom = getRandomNum(1, 30000);

        ktc_navigation_page.selectProvidersTab();
        ktc_navigation_page.selectUsersTab();
        ktc_users_page.selectAddUserButton();
        ktc_users_page.validateThatNewUserFormAppear();
        ktc_users_page.fillOutNewUserForm("Tome","Jonese","automation4@com"+addRandom,"12345678","12345678");
        ktc_users_page.selectRole(0);
        ktc_users_page.saveButtonActive();
        ktc_users_page.selectTheSaveButton();
    });

    it('User Role dropdown should contain Administrator' , function() {

        var addRandom = getRandomNum(1, 30000);

        ktc_navigation_page.selectProvidersTab();
        ktc_navigation_page.selectUsersTab();
        ktc_users_page.selectAddUserButton();
        ktc_users_page.validateThatNewUserFormAppear();
        ktc_users_page.fillOutNewUserForm("Tom","Jones","automation@com"+addRandom,"123456789","123456789");
        ktc_users_page.selectRole(2);
        ktc_users_page.saveButtonActive();

        ktc_users_page.selectTheSaveButton();

    });


    it('User Role dropdown should contain Super Administrator'  , function() {
        var addRandom = getRandomNum(1, 30000);

        ktc_navigation_page.selectProvidersTab();
        ktc_navigation_page.selectUsersTab();
        ktc_users_page.selectAddUserButton();
        ktc_users_page.validateThatNewUserFormAppear();
        ktc_users_page.fillOutNewUserForm("Tom","Jones","automation@com"+addRandom,"123456789","123456789");
        ktc_users_page.selectRole(3);
        ktc_users_page.saveButtonActive();
        ktc_users_page.selectTheSaveButton();

    });


    it('User Role dropdown should contain fff' , function() {
        ktc_navigation_page.selectProvidersTab();
        ktc_navigation_page.selectUsersTab();
        ktc_users_page.selectAddUserButton();
        ktc_users_page.validateThatNewUserFormAppear();
        ktc_users_page.fillOutNewUserForm("Tom","Jones","automation@com","12345679","12345678");
        ktc_users_page.selectRole(0);
        ktc_users_page.selectTheSaveButton();

    });


    var getRandomNum = function(min, max){
        return parseInt(Math.random() * (max - min) + min);
    };
});