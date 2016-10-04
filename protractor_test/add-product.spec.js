

describe('Protractor test : React App', function() {

    beforeEach(function() {
        browser.driver.manage().window().maximize();
        browser.ignoreSynchronization = true;// Set to true for non-angular apps
        var origFn = browser.driver.controlFlow().execute;
        
        browser.driver.controlFlow().execute = function() {
            var args = arguments;

            // queue 100ms wait
            origFn.call(browser.driver.controlFlow(), function() {
                return protractor.promise.delayed(800);
            });

            return origFn.apply(browser.driver.controlFlow(), args);
        }; 
    });

    
    it('should add product', function() {
        
        browser.driver.get('http://localhost:9011/');
        
        browser.driver.findElement(by.id('lnkAddProduct')).click();

        browser.driver.findElement(by.id('Name')).sendKeys("Test product");
        browser.driver.findElement(by.id('Description')).sendKeys("Description");
        browser.driver.findElement(by.id('Price')).sendKeys("99");
        browser.driver.findElement(by.id('btnAdd')).click();

        //expect(elems.count()).toBe(4);
        browser.executeScript('window.scrollTo(0,400);');

        browser.driver.sleep(5000);
    });
});