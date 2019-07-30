Feature: Customer details
  I want to use this template for my feature file

  Scenario Outline: Enter all the datas from customer
    Given I want to go to telecom page
    When Enter all the fields detail"<firstName>","<lastName>","<email>","<address>","<mobile no>"
    Then validate the customer id details

    Examples: 
      | firstName | lastName | email             | address      | mobile no  |
      | ramya     | masila   | venkat@gmail.com  | chennai      | 9566013688 |
      | kuzhali   | venkat   | kuzhali@gmail.com | thirunelveli | 8872884579 |
      | raja      | manic    | manic@gmail.com   | madurai      | 9840194963 |
