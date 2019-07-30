@regression
Feature: Adding customer details
  I want to use this template for my feature file

 @regression @smoke
  Scenario: Telecom details
    Given I want to go to telecom homepage
    When Enter all the fields and get the details
      | sai     | senthhil | senthil@gmail.com   | coimbatore | 9524159737 |
      | ramya   | raja     | ramyaraja@gmail.com | chennai    | 9566013688 |
      | manic   | masila   | manic@gmail.com     | guindy     | 8956478512 |
      | karthik | praveen  | karthip@gmail.com   | pondy      |  956745896 |
    Then validate the customer id
@sanity @smoke
    Scenario: Telecom details
    Given I want to go to telecom homepage
    When Enter all the fields details
      | sabari | nathan | sabari@gmail.com | pollachi | 9524159737 |
    Then validate the customer id
    