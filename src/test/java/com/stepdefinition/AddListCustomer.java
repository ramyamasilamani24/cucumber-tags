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

public class AddListCustomer {
	static WebDriver driver;
	@Given("I want to go to telecom homepage")
	public void i_want_to_go_to_telecom_homepage() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\RAMYAVENKAT\\eclipse-workspace\\CucumberProject\\driver\\chromedriver.exe");
		   driver=new ChromeDriver();
		    driver.get("http://demo.guru99.com/telecom/");
		    driver.manage().window().maximize();
	   
	}

	@When("Enter all the fields details")
	public void enter_all_the_fields_details(DataTable data) throws InterruptedException {
		List<String> d = data.asList(String.class);
		Thread.sleep(5000);
	    driver.findElement(By.xpath("(//a[text()='Add Customer'])[1]")).click();
	    driver.findElement(By.xpath("//label[@for='done']")).click();
	    driver.findElement(By.id("fname")).sendKeys(d.get(0));
	    driver.findElement(By.id("lname")).sendKeys(d.get(1));
	    driver.findElement(By.id("email")).sendKeys(d.get(2));
	    driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys(d.get(3));
	    Thread.sleep(3000);
	    driver.findElement(By.id("telephoneno")).sendKeys(d.get(4));
	    driver.findElement(By.name("submit")).click();
	}

	@Then("validate the customer id")
	public void validate_the_customer_id() {
		 Assert.assertTrue(driver.findElement(By.xpath("(//td[@align='center'])[2]")).isDisplayed());
	}

}
