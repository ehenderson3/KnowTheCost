var ktc_navigation_page = function(){

    this.conversionTab= function() {
        element(by.xpath('/html/body/app-root/app-menubar/p-menubar/div/p-menubarsub/ul/li[1]/a/span[2]')).click();

    };

    this.selectProvidersTab = function() {
        element(by.xpath('/html/body/app-root/app-menubar/p-menubar/div/p-menubarsub/ul/li[2]/a/span[2]')).click();

    };

    this.selectProcedureCodeTab= function() {
        element(by.xpath('/html/body/app-root/app-menubar/p-menubar/div/p-menubarsub/ul/li[3]/a/span[2]')).click();
    };

    this.selectTPATab = function() {
        element(by.linkText('TPAs')).click();
    };

    this.selectScripts = function() {
        var b =element(by.xpath('/html/body/app-root/app-menubar/p-menubar/div/p-menubarsub/ul/li[6]/a/span[2]'));
        browser.actions().mouseMove(b).perform();
        browser.sleep(2000);
        element(by.linkText('Scripts')).click();

    };



    this.selectUsersTab = function() {
        element(by.xpath('//span[contains(text(),\'Users\')]')).click();
    };

    this.selectScheduleTab = function() {
        browser.sleep(2000);
        var b =element(by.xpath('/html/body/app-root/app-menubar/p-menubar/div/p-menubarsub/ul/li[6]/a/span[2]'));
        browser.actions().mouseMove(b).perform();
        browser.sleep(200);
        element(by.linkText('Schedule')).click();

    };

//submit-login

};

module.exports = new ktc_navigation_page();