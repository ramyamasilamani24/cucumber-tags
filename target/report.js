$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/AddCustomer.feature");
formatter.feature({
  "name": "Customer telecom details",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.scenario({
  "name": "Telecome customer information",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "I want to launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustomerSteps.i_want_to_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the telecom webpage",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.enter_the_telecom_webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I need to enter the fields present",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.i_need_to_enter_the_fields_present()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.click_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate whether i got the customer id",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerSteps.i_validate_whether_i_got_the_customer_id()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/AddCustomer1.feature");
formatter.feature({
  "name": "Adding customer details",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.scenario({
  "name": "Telecom details",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "I want to go to telecom homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AddListCustomer.i_want_to_go_to_telecom_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter all the fields and get the details",
  "rows": [
    {
      "cells": [
        "sai",
        "senthhil",
        "senthil@gmail.com",
        "coimbatore",
        "9524159737"
      ]
    },
    {
      "cells": [
        "ramya",
        "raja",
        "ramyaraja@gmail.com",
        "chennai",
        "9566013688"
      ]
    },
    {
      "cells": [
        "manic",
        "masila",
        "manic@gmail.com",
        "guindy",
        "8956478512"
      ]
    },
    {
      "cells": [
        "karthik",
        "praveen",
        "karthip@gmail.com",
        "pondy",
        "956745896"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddListCustomer.enter_all_the_fields_and_get_the_details(DataTable)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"fname\"}\n  (Session info: chrome\u003d75.0.3770.142)\n  (Driver info: chromedriver\u003d2.46.628402 (536cd7adbad73a3783fdc2cab92ab2ba7ec361e1),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027RAMYAVENKAT-PC\u0027, ip: \u0027192.168.0.114\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.46.628402 (536cd7adbad73a..., userDataDir: C:\\Users\\RAMYAV~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:50665}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 75.0.3770.142, webStorageEnabled: true}\nSession ID: ca579598dd1ce91fbb533a422a91ce1e\n*** Element info: {Using\u003dxpath, value\u003dfname}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.stepdefinition.AddListCustomer.enter_all_the_fields_and_get_the_details(AddListCustomer.java:31)\r\n\tat ✽.Enter all the fields and get the details(src/test/resources/AddCustomer1.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "validate the customer id",
  "keyword": "Then "
});
formatter.match({
  "location": "AddListCustomer.validate_the_customer_id()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Telecom details",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@sanity"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "I want to go to telecom homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AddListCustomer.i_want_to_go_to_telecom_homepage()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d75.0.3770.142)\n  (Driver info: chromedriver\u003d2.46.628402 (536cd7adbad73a3783fdc2cab92ab2ba7ec361e1),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027RAMYAVENKAT-PC\u0027, ip: \u0027192.168.0.114\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.46.628402 (536cd7adbad73a..., userDataDir: C:\\Users\\RAMYAV~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:50709}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 75.0.3770.142, webStorageEnabled: true}\nSession ID: 2bc601bcce462e4d097aa48f8faa4312\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat com.stepdefinition.AddListCustomer.i_want_to_go_to_telecom_homepage(AddListCustomer.java:22)\r\n\tat ✽.I want to go to telecom homepage(src/test/resources/AddCustomer1.feature:16)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Enter all the fields details",
  "rows": [
    {
      "cells": [
        "sabari",
        "nathan",
        "sabari@gmail.com",
        "pollachi",
        "9524159737"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddListCustomer.enter_all_the_fields_details(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "validate the customer id",
  "keyword": "Then "
});
formatter.match({
  "location": "AddListCustomer.validate_the_customer_id()"
});
formatter.result({
  "status": "skipped"
});
});