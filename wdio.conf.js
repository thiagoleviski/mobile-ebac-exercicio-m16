
exports.config = {
    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',
    specs:[
        './test/specs/**/*.spec.js'
    ],
    framework: 'mocha',
    capabilities:[{
        "platformName":"Android",
        "platformVersion":"11.0",
        "deviceName":"Thiago-EBAC",
        "automationName":"UiAutomator2",
        "app":"./app/android/wdio.apk",
        "appWaitActivity":".MainActivity",
    }],
    services: ["appium"],
}