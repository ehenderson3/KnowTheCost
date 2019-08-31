
exports.config = {

	seleniumAddress: 'http://localhost:4444/wd/hub',
	capabilities: {
		'browserName': 'chrome'
	},
	onPrepare: () => { let globals = require('protractor');
	//let browser = globals.browser;	browser.manage().window().maximize();
		browser.ignoreSynchronization = true;//it makes protractor not wait for Angular promises
	},
	specs: ['../Tests/*_spec.js'],
	jasmineNodeOpts: {
		isVerbose: false,
		showColors: true,
		includeStackTrace: false,
		defaultTimeoutInterval: 400000//defaultTimeoutInterval is a timeout from jasmine for each it to not make test run forever or very long - http://www.protractortest.org/#/timeouts#timeouts-from-jasmine
	}
};
/*
exports.config = {
//seleniumAddress: 'http://localhost:4444/wd/hub',
//directConnect: true,
	specs: ['todo-spec.js'],

	capabilities: {
		'browserName': 'chrome',

	},
	useAllAngular2AppRoots: true,
	framework: 'jasmine'
};*/
