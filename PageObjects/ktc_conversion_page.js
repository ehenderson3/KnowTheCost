var Ktc_conversion_page = function(){

    this.getConversionTitle = function() {
       return element(by.css('body > app-root > app-patient-conversion-page > div > div:nth-child(1) > div.ktc-left-align-container > span')).getText();

    };

    this.clickAutoDialerButton = function(value) {
        element(by.buttonText('Auto Dialer')).click()
    };

    this.selectWorkQueueTab = function() {
        element(by.id('#ui-tabpanel-0-label > span')).click()
    };

    this.selectAwaitingConfirmationTab = function() {
        element(by.tagName('#ui-tabpanel-1-label > span')).click();
    };

    this.selectDeclineTab = function() {
         element(by.tagName('#ui-tabpanel-2-label > span')).click();
    };

    this.selectDeclineTab = function() {
         element(by.css('.ui-button-text.ui-clickable')).click();
    };

    this.nameText = function() {
        return element(by.id('ktc-patient-details-name')).getText();
    };

    this.dobText = function() {
        return element(by.className('ktc-details-label-primary')).getText();
    };

    this.addressText = function() {
        var addressStreet = element(by.css('.ui-g-12.ktc-align-content-vertical')).getText();
        var addressCityState = element(by.css('.ui-g-12.ktc-align-content-vertical')).getText();
        var addressZip = element(by.css('.ui-g-12.ktc-align-content-vertical')).getText();
        return addressStreet  + addressCityState + addressZip
    };

    this.employerText = function() {
        return element(by.className('ktc-details-text-primary')).getText();
    };
    this.mobileText = function() {
        return element(by.className('ktc-details-text-secondary')).getText();
    };
    this.officeText = function() {
        return element(by.className('ktc-details-text-secondary')).getText();
    };
    this.homeText = function() {
        return element(by.id('ktc-patient-details-name')).getText();
    };
    this.emailText = function() {
        return element(by.id('ktc-patient-details-name')).getText();
    };
    this.insuranceNameText = function() {
        return element(by.id('ktc-patient-details-name')).getText();
    };
    this.policyNumberText = function() {
        return element(by.id('ktc-patient-details-name')).getText();
    };

    this.groupNumberText  = function() {
        return element(by.id('ktc-patient-details-name')).getText();
    };

    this.effectiveDateText = function() {
        return element(by.id('ktc-patient-details-name')).getText();
    };

    this.terminationDateText = function() {
        return element(by.id('ktc-patient-details-name')).getText();
    };


    this.AllowedRateBeforeKTCText = function() {
        return element(by.id('ktc-patient-details-name')).getText();
    };

    this.AllowedRateAfterKTCText = function() {
        return element(by.id('ktc-patient-details-name')).getText();
    };

    this.RemainingDeductibleLessAllowedBeforeKTCText= function() {
        return element(by.id('ktc-patient-details-name')).getText();
    };

    this.RemainingDeductibleLessAllowedAfterKTCText = function() {
        return element(by.id('ktc-patient-details-name')).getText();
    };


    this.TotalSavingsBeforeKTCText = function() {
        return element(by.id('ktc-patient-details-name')).getText();
    };

    this.TotalSavingsAfterKTCText = function() {
        return element(by.id('ktc-patient-details-name')).getText();
    };

    this.DeductibleTotalAmountText = function() {
        return element(by.id('ktc-patient-details-name')).getText();
    };

    this.DeductibleAmountAppliedText = function() {
        return element(by.id('ktc-patient-details-name')).getText();
    };

    this.DeductibleLeftText = function() {
        return element(by.id('ktc-patient-details-name')).getText();
    };

    this.OutOfPocketTotalAmountText = function() {
        return element(by.id('ktc-patient-details-name')).getText();
    };

    this.OutOfPocketAmountAppliedText = function() {
        return element(by.id('ktc-patient-details-name')).getText();
    };

    this.CoInsurancePercentText = function() {
        return element(by.id('ktc-patient-details-name')).getText();
    };

    this.CoPayAmountText = function() {
        return element(by.id('ktc-patient-details-name')).getText();
    };

};

module.exports = new Ktc_conversion_page();