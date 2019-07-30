package com.stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/",glue="com.stepdefinition",
plugin= {"html:target","json:target/report.json","rerun:src/test/resources/failed.txt"},tags= {"@regression,@smoke"})

public class TestRunner {

}
