
    Feature: Tricon Infotech Website Navigation

    Scenario: Validate visibility of all menu items
      Given I am on the Tricon Infotech homepage
      Then I should see all menu items
  
    Scenario: Validate visibility of the Contact Us section
      Given I am on the Tricon Infotech homepage
      When I scroll to the bottom of the page
      Then I should see the Contact Us section
    