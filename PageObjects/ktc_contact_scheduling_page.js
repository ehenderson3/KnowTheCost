var ktc_contact_scheduling_page = function() {


    this.getPatientContactSchedulingTitle = function(value) {
        element(by.className('ktc-page-title')).isDisplayed(2)
        return element(by.className('ktc-page-title')).getText();
    };


    this.clickContactActions = function(row,name) {
        browser.sleep(2000);
        var langDropDown = element.all(by.css('.ui-dropdown-trigger-icon.ui-clickable.pi.pi-chevron-down'));
        langDropDown.get(row).click();
        element(by.cssContainingText('.ui-dropdown-item.ui-corner-all', name)).click();
        browser.sleep(600);
    };

    this.clickAddContactActions = function(row) {
        browser.sleep(2000);
        var addContactActions = element.all(by.css('.fa.fas.fa-plus-circle'));
        addContactActions.get(row).click();
        browser.sleep(600);
    };

    this.clickMinusContactActions = function(row) {
        browser.sleep(2000);
        var addContactActions = element.all(by.css('.fa-minus-circle.ng-star-inserted'));
        addContactActions.get(row).click();
        browser.sleep(600);
    };

    this.clearNextContactField = function(row) {
        browser.sleep(2000);
        var addContactActions = element.all(by.css('.ui-inputtext'));
        addContactActions.get(row).clear();
    };

    this.enterNextContactField = function(row,num) {
        browser.sleep(2000);
        var addContactActions = element.all(by.css('.ng-pristine.ng-valid.ui-inputtext.ui-corner-all.ui-state-default.ui-widget.ui-state-filled'));
        addContactActions.get(row).sendKeys(num);
    };

    this.isSaveButtonEnabled = function(bool) {
        var saveButton = element(by.buttonText('Save'));
        var save =  saveButton.isEnabled();
        expect(save).toBe(bool);
        browser.sleep(2000);
    };

    this.selectYESForDeleting = function(action) {
        browser.sleep(2000);
        var saveButton = element(by.buttonText('Yes'));
        saveButton.click();
        browser.sleep(600);

    };

    this.validateNewContactAction = function(row,name) {
        browser.sleep(2000);
        var langDropDown = element.all(by.css('.ui-dropdown-trigger-icon.ui-clickable.pi.pi-chevron-down'));
        var d = langDropDown.get(row).isDisplayed();
        expect(d).toBe(true);

    };


    this.validatePatientContactSchedulingPageElements = function() {
        var patientContractSchedText = element(by.className('ktc-page-title'));
        var actionText = element(by.xpath('/html/body/app-root/app-contact-schedule-page/div/div[2]/table/thead/tr/th[2]'));
        var contactActionColumnText = element(by.xpath('/html/body/app-root/app-contact-schedule-page/div/div[2]/table/thead/tr/th[3]'));
        var contactTypeColumnText = element(by.xpath('/html/body/app-root/app-contact-schedule-page/div/div[2]/table/thead/tr/th[4]'));
        var firstContactDropdownField = element.all(by.xpath('//label[contains(@class, \'ng-tns-c\')]'));
        var secondContactDropdownField = element.all(by.xpath('//label[contains(@class, \'ng-tns-c\')]'));
        var thirdContactDropdownField = element.all(by.xpath('//label[contains(@class, \'ng-tns-c\')]'));


        var saveButton = element(by.buttonText('Save'));
        var resetButton = element(by.buttonText('Reset'));
        var save =  saveButton.isDisplayed();
        var reset =  resetButton.isDisplayed();

        expect(save).toBe(true);
        expect(reset).toBe(true);

        var contractSchedDisplayed =  patientContractSchedText.getText();
        var actionDisplayed =  actionText.getText();
        var actionColumnDisplayed =  contactActionColumnText.getText();
        var contactColumnDisplayed =  contactTypeColumnText.getText();

        var first =  firstContactDropdownField.get(0).isDisplayed();
        var second =  secondContactDropdownField.get(1).isDisplayed();
        var third =  thirdContactDropdownField.get(2).isDisplayed();

        expect(contractSchedDisplayed).toBe("Patient Contact Scheduling");
        expect(actionColumnDisplayed).toBe("Next Contact (in minutes)");
        expect(contactColumnDisplayed).toBe("Contact Type");
        expect(actionDisplayed).toBe("Contact Action");

        expect(first).toBe(true);
        expect(second).toBe(true);
        expect(third).toBe(true);
    };


    this.selectSaveButton = function() {

        var saveButton = element(by.buttonText('Save'));
        var save =  saveButton.isDisplayed();
        expect(save).toBe(true);
        saveButton.click();
        browser.sleep(2000);
    };

    this.selectResetButton = function() {

        var resetButton = element(by.buttonText('Reset'));
        var rset =  resetButton.isDisplayed();
        expect(rset).toBe(true);
        resetButton.click();
        browser.sleep(2000);
    };

    this.selectYESForConfirmation = function(action) {
        browser.sleep(2000);
        var saveButton = element(by.buttonText('Yes'));
        saveButton.click();
        var actionText = element.all(by.xpath('//label[contains(@class, \'ng-tns-c\')]'));
        var a = actionText.get(0).getText();
        expect(a).toBe(action)
    };

    this.getFieldValue = function() {
        browser.sleep(2000);
        var actionText = element.all(by.xpath('//label[contains(@class, \'ng-tns-c\')]'));
        actionText.get(0).isDisplayed();
        return actionText.get(0).getText();
    };


    this.getContactTypeValue = function(name) {
        browser.sleep(2000);
        var actionText = element(by.cssContainingText('body > app-root > app-contact-schedule-page > div > div:nth-child(2) > table > tbody > tr:nth-child(1) > td:nth-child(4)',name));
        actionText.isDisplayed();
        return actionText.getText();
    };

    this.getContactFieldCount = function() {
        browser.sleep(2000);
        var contactFieldCount = element.all(by.css('.ui-inputtext.ui-corner-all.ui-state-default.ui-widget'));
        contactFieldCount.isDisplayed();
        return contactFieldCount.count();
    };





};
module.exports = new ktc_contact_scheduling_page();

