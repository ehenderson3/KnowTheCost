describe('To test the Price Transparency User Managementyy process', function() {

    //PRTR 216 —
    // As an admin I would like to manage all the scripts available to recitation by KTC operators when making patient calls
    browser.manage().timeouts().implicitlyWait(3000)
    beforeEach(function () {

        browser.get('https://pricetransparency.dev.surgeforward.com/login');
        //browser.get('http://localhost:12387/');
        ktc_login_page.enterEmailFieldValue('preauthadmin@knowthecosts.com');
        ktc_login_page.enterPasswordFieldValue('knowthecost');
        ktc_login_page.clickSubmitButton();

    });


    //var ktc_users_page = require('../PageObjects/ktc_users_page.js');
    var ktc_login_page = require('../PageObjects/ktc_login_page.js');
    var ktc_navigation_page = require('../PageObjects/ktc_navigation_page.js');
    var ktc_script_page = require('../PageObjects/ktc_script_page.js');

    it('All elements on page SHOULD load within 3 seconds.', function() {

        ktc_navigation_page.selectProvidersTab();
        ktc_navigation_page.selectProcedureCodeTab();
        ktc_navigation_page.selectTPATab();
        ktc_navigation_page.selectScripts();
        ktc_script_page.validateAllScriptElements();
    });

    it('Language SHOULD dropdown default to English.', function() {

        ktc_navigation_page.selectProvidersTab();
        ktc_navigation_page.selectProcedureCodeTab();
        ktc_navigation_page.selectTPATab();
        ktc_navigation_page.selectScripts();
        ktc_script_page.validateAllScriptElements();
        var languageDefaultText = ktc_script_page.validateEnglishIsDefault();
        expect(languageDefaultText).toBe('English Language Script');
    });

    it('The WYSIWYG editor SHOULD contain the script for the language in the "Language" dropdown.', function() {

        ktc_navigation_page.selectProvidersTab();
        ktc_navigation_page.selectProcedureCodeTab();
        ktc_navigation_page.selectTPATab();
        ktc_navigation_page.selectScripts();
        ktc_script_page.validateAllScriptElements();
        var languageDefaultText = ktc_script_page.validateEnglishIsDefault();
        expect(languageDefaultText).toBe('English Language Script');
        ktc_script_page.selectScriptLanguage(1);
        ktc_script_page.enterSpanishScript();
        ktc_script_page.selectYESForConfirmation();

    });

    it('If user changes the selection in the Language dropdown, the WYSIWYG editor should update to the relevant script for that language', function() {

        ktc_navigation_page.selectProvidersTab();
        ktc_navigation_page.selectProcedureCodeTab();
        ktc_navigation_page.selectTPATab();
        ktc_navigation_page.selectScripts();
        ktc_script_page.validateAllScriptElements();
        var languageDefaultText = ktc_script_page.validateEnglishIsDefault();
        expect(languageDefaultText).toBe('English Language Script');

        ktc_script_page.selectLanguage("English Language Script");
        ktc_script_page.enterEnglishScript();
        ktc_script_page.selectYESForConfirmation();


        ktc_script_page.selectLanguage("Spanish Language Script");
        ktc_script_page.enterSpanishScript();
        ktc_script_page.selectYESForConfirmation();


        ktc_script_page.selectLanguage("English Language Script");
        ktc_script_page.selectLanguage("Spanish Language Script");
        ktc_script_page.selectLanguage("English Language Script");
        ktc_script_page.selectLanguage("Spanish Language Script");
        ktc_script_page.selectLanguage("English Language Script");
        ktc_script_page.selectLanguage("Spanish Language Script");

  });

  it('If a script does not exist for the selected language, the WYSIWYG editor should be empty', function() {

      ktc_navigation_page.selectProvidersTab();
      ktc_navigation_page.selectProcedureCodeTab();
      ktc_navigation_page.selectTPATab();
      ktc_navigation_page.selectScripts();
      ktc_script_page.validateAllScriptElements();
      var languageDefaultText = ktc_script_page.validateEnglishIsDefault();
      expect(languageDefaultText).toBe('English Language Script');

      ktc_script_page.selectLanguage("English Language Script");
      ktc_script_page.clearScript();
      ktc_script_page.selectYESForConfirmation();


      ktc_script_page.selectLanguage("Spanish Language Script");
      ktc_script_page.clearScript();
      ktc_script_page.selectYESForConfirmation();


      ktc_script_page.selectLanguage("English Language Script");
      ktc_script_page.selectLanguage("Spanish Language Script");
      ktc_script_page.selectLanguage("English Language Script");
      ktc_script_page.selectLanguage("Spanish Language Script");
      ktc_script_page.selectLanguage("English Language Script");
      ktc_script_page.selectLanguage("Spanish Language Script");

  });

  it('If user makes any edit to the script for a language, clickable "Save" button appears', function() {

      ktc_navigation_page.selectProvidersTab();
      ktc_navigation_page.selectProcedureCodeTab();
      ktc_navigation_page.selectTPATab();
      ktc_navigation_page.selectScripts();
      ktc_script_page.validateAllScriptElements();
      var languageDefaultText = ktc_script_page.validateEnglishIsDefault();
      expect(languageDefaultText).toBe('English Language Script');

      ktc_script_page.selectLanguage("English Language Script");
      ktc_script_page.clearScript();
      ktc_script_page.selectYESForConfirmation();


      ktc_script_page.selectLanguage("Spanish Language Script");
      ktc_script_page.clearScript();
  });


  it('If user clicks "Reset" button, confirmation prompt appears asking if user wants to discard all changes across all languages', function() {

      ktc_navigation_page.selectProvidersTab();
      ktc_navigation_page.selectProcedureCodeTab();
      ktc_navigation_page.selectTPATab();
      ktc_navigation_page.selectScripts();
      ktc_script_page.validateAllScriptElements();
      var languageDefaultText = ktc_script_page.validateEnglishIsDefault();
      expect(languageDefaultText).toBe('English Language Script');

      ktc_script_page.selectLanguage("English Language Script");
      ktc_script_page.enterEnglishScriptNoSave();
      ktc_script_page.selectReset();




  });


});