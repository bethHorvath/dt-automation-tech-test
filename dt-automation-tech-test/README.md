# Digital Technology Automation Tester Tech Test


## Installation and Running

```sh
# Get set up. From this directory run:
npm install

# Run the first test file:
npm run first-test

# Run all of the files in the tests directory:
npm run all

```


----

## Test Instructions
    1) Create a branch in GitHub on which to make your changes
    2) Make sure you are able to run the first test ('Navigate to Deals Page' in test.spec.js)
    3) Refactor the code in the first test so it adheres to good coding practices 
    4) Attempt to write any one or more of the following scenarios
    (note quality is better than quantity!)
    5) Commit your code and push your branch before the end of the tech test



```sh
# Feature: This feature will make sure that the shop page is navigable and usable
Scenario 2: User sees deals on the mobile shop page 
- Given I am on the ‘https://www.sky.com/shop/mobile/deals‘ page  
- Then I see at least 3 tiles with a picture and price on them


# Feature: This feature will make sure that the shop page is navigable and usable
Scenario 3: User is prompted to create my Sky password when signing in with invalid credentials
- Given I am on the home page 
- When I try to sign in with invalid credentials  
- Then I should see a box containing the text ‘Create your My Sky password’ 


# Feature: This feature will make sure the search is working correctly
Scenario 1: Show the results determined by editorial, as well as generic searches. 
- Given I am on the home page 
- When I search ‘sky’ in the search bar 
- Then I should see an editorial section (example screenshot below)
```
![image info](./editorial-section.png)




