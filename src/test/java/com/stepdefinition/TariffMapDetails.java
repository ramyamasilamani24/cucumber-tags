package com.stepdefinition;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class TariffMapDetails {
	static WebDriver driver;
	@Given("Go to telecom  homepage")
	public void go_to_telecom_homepage() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\RAMYAVENKAT\\eclipse-workspace\\CucumberProject\\driver\\chromedriver.exe");
		   driver=new ChromeDriver();
		    driver.get("http://demo.guru99.com/telecom/");
		    driver.manage().window().maximize();
		    driver.findElement(By.xpath("//a[text()='Add Tariff Plan']")).click();
	}
	@When("Add all the tariff details in fields are entered")
	public void add_all_the_tariff_details_in_fields_are_entered(DataTable dt) {
		List<Map<String, String>> add = dt.asMaps(String.class,String.class);
		 driver.findElement(By.name("rental")).sendKeys(add.get(1).get("monRen"));
		    driver.findElement(By.id("local_minutes")).sendKeys(add.get(2).get("locMin"));
		   driver.findElement(By.id("inter_minutes")).sendKeys(add.get(2).get("intMin"));
		    driver.findElement(By.id("sms_pack")).sendKeys(add.get(1).get("freesms"));
		    driver.findElement(By.id("minutes_charges")).sendKeys(add.get(2).get("loc charge"));
		    driver.findElement(By.id("inter_charges")).sendKeys(add.get(2).get("intCharge"));
		    driver.findElement(By.id("sms_charges")).sendKeys(add.get(1).get("smsCharge"));
		    driver.findElement(By.xpath("//input[@type='submit']")).click();
		
	  
	}



	@When("Add all the tariff details in fields{string},{string},{string},{string},{string},{string},{string}")
	public void add_all_the_tariff_details_in_fields(String A, String B, String C, String D, String E, String F, String G) {
		 driver.findElement(By.name("rental")).sendKeys(A);
		    driver.findElement(By.id("local_minutes")).sendKeys(B);
		   driver.findElement(By.id("inter_minutes")).sendKeys(C);
		    driver.findElement(By.id("sms_pack")).sendKeys(D);
		    driver.findElement(By.id("minutes_charges")).sendKeys(E);
		    driver.findElement(By.id("inter_charges")).sendKeys(F);
		    driver.findElement(By.id("sms_charges")).sendKeys(G);
		    driver.findElement(By.xpath("//input[@type='submit']")).click();
	    
	}

	@Then("validate whether the tariff details entered successfully")
	public void validate_whether_the_tariff_details_entered_successfully() {
		Assert.assertTrue(driver.findElement(By.xpath("//h2[text()='Congratulation you add Tariff Plan']")).isDisplayed());
	}

	@Then("go back to home page")
	public void go_back_to_home_page() {
		driver.findElement(By.xpath("(//a[text()='Home'])[1]")).click();
	    
	}


}
