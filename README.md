# Logan White - 8/1/23

# Frontend Mentor - Interactive Card Details Form solution

This is a solution to the [Interactive Card Details Form challenge on Frontend Mentor](https://www.frontendmentor.io). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### Screenshot

![](images/ICDFScreenshot.PNG)

### Links

- Live Site URL: 

## UI Breakdown

This website has two backgrounds contained in a background wrap, one that has a color gradient on the left third of the screen, and another that is white for the rest of the screen. There are three main elements: Two wraps with background images, set to the background images height and widths that simulate the front and back of a credit card, and a form wrap that contains all of the input fields the user must submit card information into. The card wraps have relative display, and the display fields within them (name, card number, cvc, etc.) are positioned within them with transform: translate. The form wrap is a vertical flexbox with inner divisions to allow for inline fields. Each input field has three states: focused (purple when user has selected it), error (red when users submitted and recieved an error), and defualt (white, when no other state has been applied). 

# Features

As users update information in the input fields, the output fields inside the card wraps update in real time with each keyup. Fields cannot recieve redundant inputs: no spaces or letters in the number fields, as well as auto spacing in the card number fields. When users hit the submit button, there is input validation for a handful of things:
    - Name field cannot start or end with whitespace, and MUST contain a space somewhere to denote a full name.

    - The number field is automatically spaced every four digits, and cannot reviece non-number inputs. Also, the input must be 19 characters long (16 numbes + 3 spaces)

    - The Month field must be two digits and between 01 and 12.

    - The Year field must be two digits and at least equal to the current year pulled by the program.

    - The CVC field must be three digits long.

When any of these errors are flagged, each field has an error output field that sends the message to the user

# Functionality

- Live Field Updates
    At the start of the JS program, each text input and text output element is pulled from HTML. There is an event listener for each input field where, on keyup, the .value of the input field is pasted into the .innerHTML of the output field. There is a bit more nuance to these event listeners, since the output returns to the default (name = "Jane Appleseed") if the length of the .value is 0.

- Keydown Input Checking
    Whenever you are using an event listener, event.preventDefault() to cancel the action that triggered the branch of code. Using this, I simply made an additional listener for each field on keydown that runs preventDefualt() if the keyCode matches an undesired value, like 32 for Space for example.

- Input Validation
    Input validation was done through two main components. The first component is the branch logic used in each validation function, and the second compoent is the application of the "error-highlight" class that is applied to the input field. The first if statement in each branch considers every criteria for validation, and only runs if the input is valid, removing the error class and changing the .innerHTML of the error field to '', effectively making it dissapear. 

    Then, the individual errors are searched for one by one using else if, and if found, the error class is applied and the .innerHTML is changed to the corresponding error message.

- Completed Page Progression
    If there were no errors found in either field, the .innerHTML of the form wrap is changed to make a new flexbox. This is done through the submit button, where a validateAll function runs the valdiation function for each field is ran, and then ONLY IF the error class is not contained in any of the input fields, the .innerHTML is changed.

# What I learned

- There are a few big tools I learned to use in this project. 

    - The usage of any image as a background for a div is much easier than I thought it was. First, you must set the width and height set to the exact pixel size of the image you want to use. Then, you must use the background-image style with the value url("parent/file/path").

    - The usage of the event.preventDefault() function is really useful for preventing any sort of action inside a field, in effect. 

    - Use of the ::placeholder css state allows you to adjust the placeholder text in an input field

    - 
