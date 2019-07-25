package com.stepdefinition;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class AddTariff {
	static WebDriver driver;
	@Given("go to telecom homepage")
	public void go_to_telecom_homepage() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\RAMYAVENKAT\\eclipse-workspace\\CucumberProject\\driver\\chromedriver.exe");
		   driver=new ChromeDriver();
		    driver.get("http://demo.guru99.com/telecom/");
		    driver.manage().window().maximize();
		    

	}

	@Given("Click the add tariff button")
	public void click_the_add_tariff_button() {
	   driver.findElement(By.xpath("//a[text()='Add Tariff Plan']")).click();
	}

	@When("Enter the tariff fields")
	public void enter_the_tariff_fields(DataTable tarif) {
	    List<String> t = tarif.asList();
	    driver.findElement(By.name("rental")).sendKeys(t.get(0));
	    driver.findElement(By.id("local_minutes")).sendKeys(t.get(1));
	   driver.findElement(By.id("inter_minutes")).sendKeys(t.get(2));
	    driver.findElement(By.id("sms_pack")).sendKeys(t.get(3));
	    driver.findElement(By.id("minutes_charges")).sendKeys(t.get(4));
	    driver.findElement(By.id("inter_charges")).sendKeys(t.get(5));
	    driver.findElement(By.id("sms_charges")).sendKeys(t.get(6));
	    driver.findElement(By.xpath("//input[@type='submit']")).click();
	}

	@Then("Validate that the tariff is updated")
	public void validate_that_the_tariff_is_updated() {
	  Assert.assertTrue(driver.findElement(By.xpath("//h2[text()='Congratulation you add Tariff Plan']")).isDisplayed());
	}

}
