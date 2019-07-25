package com.stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CustomerMapDetails {
static WebDriver driver;
@Given("I want to go to telecom page")
public void i_want_to_go_to_telecom_page() {
	System.setProperty("webdriver.chrome.driver", "C:\\Users\\RAMYAVENKAT\\eclipse-workspace\\CucumberProject\\driver\\chromedriver.exe");
	   driver=new ChromeDriver();
	   driver.get("http://demo.guru99.com/telecom/");
		driver.manage().window().maximize();
}

@When("Enter all the fields detail{string},{string},{string},{string},{string}")
public void enter_all_the_fields_detail(String A, String B, String C, String D, String E) throws InterruptedException {
	Thread.sleep(5000);
    driver.findElement(By.xpath("(//a[text()='Add Customer'])[1]")).click();
    driver.findElement(By.xpath("//label[@for='done']")).click();
    driver.findElement(By.id("fname")).sendKeys(A);
    driver.findElement(By.id("lname")).sendKeys(B);
    driver.findElement(By.id("email")).sendKeys(C);
    driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys(D);
    driver.findElement(By.id("telephoneno")).sendKeys(E);
}

@Then("validate the customer id details")
public void validate_the_customer_id_details() {
	driver.findElement(By.name("submit")).click();
}
}
