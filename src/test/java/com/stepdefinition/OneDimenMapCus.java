package com.stepdefinition;

import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class OneDimenMapCus {
	static WebDriver driver;
	@Given("Go to browser and open telecom homepage")
	public void go_to_browser_and_open_telecom_homepage() {
		 System.setProperty("webdriver.chrome.driver", "C:\\Users\\RAMYAVENKAT\\eclipse-workspace\\CucumberProject\\driver\\chromedriver.exe");
		   driver=new ChromeDriver();
		   driver.get("http://demo.guru99.com/telecom/");
			driver.manage().window().maximize();
	}

	@Given("click add customer")
	public void click_add_customer() {
		driver.findElement(By.xpath("(//a[text()='Add Customer'])[1]")).click();
	}

	@When("Enter the customer details")
	public void enter_the_customer_details(DataTable data) throws InterruptedException {
	  Map<String, String> m = data.asMap(String.class, String.class);
	    Thread.sleep(5000);
	    
	    driver.findElement(By.xpath("//label[@for='done']")).click();
	    driver.findElement(By.id("fname")).sendKeys(m.get("firstName"));
	    driver.findElement(By.id("lname")).sendKeys(m.get("lastName"));
	    driver.findElement(By.id("email")).sendKeys(m.get("email"));
	    driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys(m.get("address"));
	    driver.findElement(By.id("telephoneno")).sendKeys(m.get("phone"));
	    
	}

	@Then("Validate the details entered successfully")
	public void validate_the_details_entered_successfully() {
		driver.findElement(By.name("submit")).click();
	}

}
