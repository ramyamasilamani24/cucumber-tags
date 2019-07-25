package com.stepdefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AddCustomerSteps{

	static WebDriver driver;
	@Given("I want to launch the browser")
	public void i_want_to_launch_the_browser() {
	    System.setProperty("webdriver.chrome.driver", "C:\\Users\\RAMYAVENKAT\\eclipse-workspace\\CucumberProject\\driver\\chromedriver.exe");
	   driver=new ChromeDriver();
	    
	}

	@Given("enter the telecom webpage")
	public void enter_the_telecom_webpage() {
		driver.get("http://demo.guru99.com/telecom/");
		driver.manage().window().maximize();
	    
	}

	@When("I need to enter the fields present")
	public void i_need_to_enter_the_fields_present() throws InterruptedException {
		Thread.sleep(5000);
	    driver.findElement(By.xpath("(//a[text()='Add Customer'])[1]")).click();
	    driver.findElement(By.xpath("//label[@for='done']")).click();
	    driver.findElement(By.id("fname")).sendKeys("venkat");
	    driver.findElement(By.id("lname")).sendKeys("venda");
	    driver.findElement(By.id("email")).sendKeys("venkat1385@gmail.com");
	    driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys("nellai");
	    driver.findElement(By.id("telephoneno")).sendKeys("9789931161");
	    
	    
	}
	@When("click the submit button")
	public void click_the_submit_button() {
		driver.findElement(By.name("submit")).click();
	}	
	
	

@Then("I validate whether i got the customer id")
	public void i_validate_whether_i_got_the_customer_id() {
	   Assert.assertTrue(driver.findElement(By.xpath("(//td[@align='center'])[2]")).isDisplayed());
	
	}

}
