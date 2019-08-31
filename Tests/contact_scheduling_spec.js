describe('To test the Price Transparency Contact Scheduling process',  () => {
    browser.manage().timeouts().implicitlyWait(5000)
        beforeEach(function () {
            browser.get('https://pricetransparency.dev.surgeforward.com/login');
            //browser.get('http://localhost:12387/');
            ktc_login_page.enterEmailFieldValue('preauthadmin@knowthecosts.com');
            ktc_login_page.enterPasswordFieldValue('knowthecost');
            ktc_login_page.clickSubmitButton();

    });

    //PRTR-213 As an admin I want to setup an automated patient contact interval schedule to automate the next time a patient should receive a call, email or text

    var ktc_navigation_page = require('../PageObjects/ktc_navigation_page.js');
    var ktc_contact_scheduling_page = require('../PageObjects/ktc_contact_scheduling_page.js');
    var ktc_login_page = require('../PageObjects/ktc_login_page.js');



    it('All elements on page load within 3 seconds', function() {
        var loginTitleText = ktc_login_page.getLoginTitle();
        expect(loginTitleText).toBe('KnowTheCost');

        ktc_navigation_page.selectProvidersTab();
        ktc_navigation_page.selectProcedureCodeTab();
        ktc_navigation_page.selectTPATab();
        ktc_navigation_page.selectScheduleTab();
        var schedulingTitle = ktc_contact_scheduling_page.getPatientContactSchedulingTitle();
        expect(schedulingTitle).toBe('Patient Contact Scheduling');
        ktc_contact_scheduling_page.validatePatientContactSchedulingPageElements();
    });


    /*
    Each "Contact Action" dropdown has a selectable option for "Call"
    Each "Contact Action" dropdown has a selectable option for "Text"
    Each "Contact Action" dropdown has a selectable option for "Email"
    "Contact Action" heading is present
    "Next Contact (in minute)" heading is present
    "Contact Type" heading is present
    Left side of first row in table says "1st Contact"
 	Left side of second row in table says "2nd Contact"
 	Left side of third row in table says "3rd Contact"
     */


     it('When the page loads, all field selections from the previous save should be present', async () => {
        var loginTitleText = ktc_login_page.getLoginTitle();
        expect(loginTitleText).toBe('KnowTheCost');

        ktc_navigation_page.selectProvidersTab();
        ktc_navigation_page.selectProcedureCodeTab();
        ktc_navigation_page.selectTPATab();
        ktc_navigation_page.selectScheduleTab();
        var schedulingTitle = ktc_contact_scheduling_page.getPatientContactSchedulingTitle();
        expect(schedulingTitle).toBe('Patient Contact Scheduling');
        ktc_contact_scheduling_page.validatePatientContactSchedulingPageElements();
        var a = await ktc_contact_scheduling_page.getFieldValue();
         console.log(a)

        if (a === "Text"){
            ktc_contact_scheduling_page.clickContactActions(0, "Call");
            ktc_contact_scheduling_page.clickContactActions(1,"Call");
            ktc_contact_scheduling_page.clickContactActions(2,"Call");
            ktc_contact_scheduling_page.selectSaveButton();
            ktc_contact_scheduling_page.selectYESForConfirmation("Call");
            ktc_contact_scheduling_page.getContactTypeValue('1st Call');


        } else if (a === "Call") {
            ktc_contact_scheduling_page.clickContactActions(0, "Email");
            ktc_contact_scheduling_page.clickContactActions(1,"Email");
            ktc_contact_scheduling_page.clickContactActions(2,"Email");
            ktc_contact_scheduling_page.selectSaveButton();
            ktc_contact_scheduling_page.selectYESForConfirmation("Email");
            ktc_contact_scheduling_page.getContactTypeValue('1st Email');


        } else if (a === "Email"){
            ktc_contact_scheduling_page.clickContactActions(0, "Text");
            ktc_contact_scheduling_page.clickContactActions(1,"Text");
            ktc_contact_scheduling_page.clickContactActions(2,"Text");
            ktc_contact_scheduling_page.selectSaveButton();
            ktc_contact_scheduling_page.selectYESForConfirmation("Text");
            ktc_contact_scheduling_page.getContactTypeValue("1st Text")

        } else {}

    }
);

    /*
    If any field in any row is empty, "Save" button is not enabled and clicking it does nothing
    Clicking "Add Additional Interval" button should result in a new row at the bottom (without auto-filled details)
    Each time user clicks "Add Additional Interval," a new row should be added
    */

    it('Once "Contact Action" has been selected, "Next Contact" is required', async () => {
            var loginTitleText = ktc_login_page.getLoginTitle();
            expect(loginTitleText).toBe('KnowTheCost');

            ktc_navigation_page.selectProvidersTab();
            ktc_navigation_page.selectProcedureCodeTab();
            ktc_navigation_page.selectTPATab();
            ktc_navigation_page.selectScheduleTab();
            var schedulingTitle = ktc_contact_scheduling_page.getPatientContactSchedulingTitle();
            expect(schedulingTitle).toBe('Patient Contact Scheduling');
            ktc_contact_scheduling_page.validatePatientContactSchedulingPageElements();
            var a = await ktc_contact_scheduling_page.getFieldValue();
            ktc_contact_scheduling_page.clickAddContactActions(0);
            ktc_contact_scheduling_page.clearNextContactField(3);
            ktc_contact_scheduling_page.isSaveButtonEnabled(false);
        }
    )


    it('If the minus button is clicked next to a row, a prompt should come up asking the user to confirm the deletion,', async () => {
            var loginTitleText = ktc_login_page.getLoginTitle();
            expect(loginTitleText).toBe('KnowTheCost');

            ktc_navigation_page.selectProvidersTab();
            ktc_navigation_page.selectProcedureCodeTab();
            ktc_navigation_page.selectTPATab();
            ktc_navigation_page.selectScheduleTab();
            var schedulingTitle = ktc_contact_scheduling_page.getPatientContactSchedulingTitle();
            expect(schedulingTitle).toBe('Patient Contact Scheduling');
            ktc_contact_scheduling_page.validatePatientContactSchedulingPageElements();
            var a = await ktc_contact_scheduling_page.getFieldValue();
            ktc_contact_scheduling_page.clickMinusContactActions(2);
            ktc_contact_scheduling_page.selectYESForDeleting()
        }
    )

    it('If user makes changes in any fields without saving and refreshes the page, the changes are not saved and the previously saved schedule is shown', async () => {
            var loginTitleText = ktc_login_page.getLoginTitle();
            expect(loginTitleText).toBe('KnowTheCost');
            ktc_navigation_page.selectProvidersTab();
            ktc_navigation_page.selectProcedureCodeTab();
            ktc_navigation_page.selectTPATab();
            ktc_navigation_page.selectScheduleTab();
            var schedulingTitle = ktc_contact_scheduling_page.getPatientContactSchedulingTitle();
            expect(schedulingTitle).toBe('Patient Contact Scheduling');
            ktc_contact_scheduling_page.validatePatientContactSchedulingPageElements();
            var a = await ktc_contact_scheduling_page.getFieldValue();
            ktc_contact_scheduling_page.clickAddContactActions(2);
            ktc_contact_scheduling_page.enterNextContactField(1, "12");
            var fieldCount = ktc_contact_scheduling_page.getContactFieldCount();
            ktc_contact_scheduling_page.selectResetButton();
            ktc_contact_scheduling_page.selectYESForDeleting();
            var postResetFieldCount = ktc_contact_scheduling_page.getContactFieldCount();
            expect(fieldCount).toBeGreaterThan(postResetFieldCount);
        }
    )
});


