Feature: to get the tariff details
  I want to use this template for my feature file



  Scenario Outline: to check whether all the tariff details are entered
    Given Go to telecom  homepage
    When Add all the tariff details in fields"<monRen>","<locMin>","<intMin>","<freeSms>","<locCharge>","<intCharge>","<smsCharge>"
    Then validate whether the tariff details entered successfully
    And go back to home page

    Examples: 
      | monRen | locMin | intMin | freeSms | locCharge | intCharge | smsCharge |
      |   5000 |    200 |    300 |     400 |       500 |       60 |         7 |
      |   2500 |    300 |    250 |     500 |        85 |        25 |         5 |
      |   1500 |    320 |    240 |     600 |        70 |         8 |         9 |
