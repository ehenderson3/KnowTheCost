var ktc_script_page = function(){
    var saveYouMoneyTextEng = "hi, Our company is Know your price and we are an avocate for the patient.  Our business model is simple we find out the prices for proceedures we shop around to get you the best price for any procedure that you have an appointment.";
    var saveYouMoneyTextSpn = "Hola,Nuestra empresa es Conozca su precio y somos un abogado para el paciente. Nuestro modelo de negocio es simple: averiguamos los precios de los procedimientos que buscamos para obtener el mejor precio para cualquier procedimiento que tenga una cita.";


    this.validateAllScriptElements = function() {

        browser.sleep(2000);
        var englishLanguageScriptTextField = element(by.tagName('textarea'));
        var spanishLanguageScriptTextField = element(by.tagName('textarea'));
        var saveButton = element(by.buttonText('Save'));
        var resetButton = element(by.buttonText('Reset'));
        var contactScriptTitleText = element(by.className('ktc-page-title'));

        var englishTextField =  englishLanguageScriptTextField.isDisplayed();
        var spanishTextField =  spanishLanguageScriptTextField.isDisplayed();
        var savButton =  saveButton.isDisplayed();
        var resButton =  resetButton.isDisplayed();
        var scriptText =  contactScriptTitleText.isDisplayed();

        expect(englishTextField).toBe(true);
        expect(spanishTextField).toBe(true);
        expect(savButton).toBe(true);
        expect(resButton).toBe(true);
        expect(scriptText).toBe(true);

    };

    this.validateEnglishIsDefault = function() {

        browser.sleep(2000);
        var contactScriptTitleText = element(by.xpath('/html/body/app-root/app-contact-script-page/div/div[2]/div[1]/p-dropdown/div/label'));
        return englishTextField =  contactScriptTitleText.getText();

    };


    this.enterSpanishScript = function() {
        browser.sleep(2000);
        var englishLanguageScriptTextField = element(by.tagName('textarea'));
        var spanishLanguageScriptTextField = element(by.tagName('textarea'));
        var saveButton = element(by.buttonText('Save'));
        var resetButton = element(by.buttonText('Reset'));
        var contactScriptTitleText = element(by.className('ktc-page-title'));

        var englishTextField =  englishLanguageScriptTextField.isDisplayed();
        var spanishTextField =  spanishLanguageScriptTextField.isDisplayed();
        var savButton =  saveButton.isDisplayed();
        var resButton =  resetButton.isDisplayed();
        var scriptText =  contactScriptTitleText.isDisplayed();

        //resButton.click();
        spanishLanguageScriptTextField.clear();
        spanishLanguageScriptTextField.sendKeys(saveYouMoneyTextSpn);
        browser.sleep(2000);
        savButton.click();
        browser.sleep(100);
    };

    this.selectYESForConfirmation = function() {
    browser.sleep(7000);
    var saveButton = element(by.buttonText('Yes'));
    saveButton.click();
    var englishLanguageScriptTextField = element(by.tagName('textarea'));



};

    this.selectScriptLanguage = function(num) {
        browser.sleep(800);
        var langDropDown = element(by.css('.ui-dropdown-trigger-icon.ui-clickable.pi.pi-chevron-down'));
        langDropDown.click();
        var values = element(by.css('[role="listbox"]'));
        selectDropdownbyNum(values,num);
    };

    var selectDropdownbyNum = function ( element, optionNum ) {
        if (optionNum){
            var options = element.all(by.css('.ui-dropdown-item.ui-corner-all'));
            options.then(function(options){
                options[optionNum].click();
            });
        }
    };

    this.enterEnglishScript = function() {
        var saveYouMoneyTextEng = "hi,  Our company is Know your price and we are an advocate for the patient. Our business model is simple we find out the prices for proceedures we shop around to get you the best price for any procedure that you have an appointment.";
        browser.sleep(2000);
        var englishLanguageScriptTextField = element(by.tagName('textarea'));
        var saveButton = element(by.buttonText('Save'));
        var savButton =  saveButton.isDisplayed();

        englishLanguageScriptTextField.clear();
        englishLanguageScriptTextField.sendKeys(saveYouMoneyTextEng);
        browser.sleep(2000);
        savButton.click();
    };

    this.enterEnglishScriptNoSave = function() {
        var saveYouMoneyTextEng = "hi,  Our company is Know your price and we are an advocate for the patient. Our business model is simple we find out the prices for proceedures we shop around to get you the best price for any procedure that you have an appointment.";
        browser.sleep(2000);
        var englishLanguageScriptTextField = element(by.tagName('textarea'));
        var saveButton = element(by.buttonText('Save'));
        var savButton =  saveButton.isDisplayed();

        englishLanguageScriptTextField.clear();
        englishLanguageScriptTextField.sendKeys(saveYouMoneyTextEng);
    };

    this.clearScript = function() {
        browser.sleep(2000);
        var savButton = element(by.buttonText('Save'));
        var englishLanguageScriptTextField = element(by.tagName('textarea'));
        englishLanguageScriptTextField.sendKeys("t")
        englishLanguageScriptTextField.clear();
        browser.sleep(2000);
        var a = savButton.isEnabled();
        expect(a).toBe(true);

        savButton.click();
    };


    this.selectLanguage = function(name) {
        var langDropDown = element(by.css('.ui-dropdown-trigger-icon.ui-clickable.pi.pi-chevron-down'));
        langDropDown.click();
        element(by.cssContainingText('.ui-dropdown-item.ui-corner-all', name)).click();

    };

    this.selectReset = function() {

        browser.sleep(2000);
        var resetButton = element(by.buttonText('Reset'));
        var resButton =  resetButton.isDisplayed();
        expect(resButton).toBe(true);
        resetButton.click();


    };

};





module.exports = new ktc_script_page();