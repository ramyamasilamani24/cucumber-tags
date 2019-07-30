package com.stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="@src/test/resources/AddCustomer1.feature:6:15",glue="com.stepdefinition")
public class TestReRunner {

}
