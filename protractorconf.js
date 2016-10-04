exports.config = {
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 20000
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['protractor_test/add-product.spec.js']
}