# Web Application Testing Assignment

## Objective
To assess the candidate's ability in writing automated tests using Vitest for unit testing and WebDriverIO for end-to-end testing.

## Task Overview
Write automated tests for a simple web application. You can provide an existing application or ask the candidate to set up a basic one, like a to-do list, a simple e-commerce product page, or a form submission site.

## Requirements

### 1. Unit Testing with Vitest
- Write unit tests for `AccountSwitcher.tsx`.
- Optional: Add unit testing to `AccountSwitcherButton.tsx`

    Guidelines:
    - Cover the main functionalities of these components.
    - Include both positive and negative test cases.
    - Demonstrate the use of mocks/spies where necessary.

### 2. End-to-End Testing with WebDriverIO
- Write end-to-end tests covering a user journey in the application, since this is light app, test the following scenario:

    1. Open the user menu
    2. Click on Login (E2E)
    3. Type in the credentials 
    4. Submit the form using mouse/keyboard
    5. Expect to see the success message
    6. Go back to our homepage

    Guidelines: 
    - Interact with various elements (text fields, buttons, dropdowns, etc.).
    - Validate correct page navigation and UI element states.
    - Handle asynchronous behavior and element waiting.

### 3. Documentation
- Provide a README file with setup and test running instructions.
- Annotate the test code to explain the purpose and logic of each test.

### 4. Bonus (Optional)
- Incorporate CI using platforms like GitHub Actions to run tests on every push.

    Guidelines:
     - You can open a PR on the original public repo
     - Assume you have LT_USER & LT_PASSWORD as repo secrets



