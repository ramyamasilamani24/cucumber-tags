Feature: Telecom homepage
  I want to use this template for my feature file

  @tag1
  Scenario: Add details of customer
    Given Go to browser and open telecom homepage
    And click add customer
    When Enter the customer details
      | firstName | Raghav           |
      | lastName  | Preetha          |
      | email     | raghav@gmail.com |
      | address   | coimbatore       |
      | phone     |       9941420161 |
    Then Validate the details entered successfully
