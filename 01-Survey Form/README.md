# Survey Form

<img src="surveyform.png">

<p></p>
A survey form built with HTML and CSS

<p></p>
<br>

## Key Features Implemented

- A form containing text, email, number, radio buttons, checkboxes, and dropdown input fields
- A responsive layout for both mobile and desktop environments
- An achored background image using the pseudo element `::before`

<br>

## Challenges and Learnings

### 1. The width of `select` element

`select` element (dropdown fields) can have narrower width compared to other input fields, even when the width is explicitly defined. This happens because the default setting of the select element allows the longest option to determine the width.

**Solution:**

The issue can be resolved by applying `box-sizing: border-box` and explicitly defining the width and height for all input fields.

<br>

### 2. The vertical alignment of radio button/checkbox items

It is hard to vertically align radio button/checkbox icons and its text content when the size of the icons are manually increased. The `vertical-align` property doesn't provide a precise alignment.

**Solution:**

By using `display: flex` on the label, the radio button/checkbox icon and text content become two flex items. They can be easily aligned with `align-items: center`.

<br>

### 3. Relationship between labels and inputs

Should a form label nest the input fields or should they be separated?

- Usecase 1: `<label><input /></label>`
- Usecase 2: `<label></label><input />`

Separating labels and inputs while linking with `for` attributes allows for more flexible layouts. However, when both elements need to appear inline (such as radio button/checkbox and its text content), nesting the input element inside the label is more effective and keeps the layout simpler.

<br>

### 4. The background shifting at the end of the page

The background image may shift at the end of the page when scrolling, making an unwanted white space on top or bottom of the page, even with the following CSS properties:

- `background-size: cover`
- `background-attachment: fixed`
- `background-position: center`
- `background-repeat: no-repeat`

**Solution:**

This issue was resolved by creating an invisible element before the body’s content with `body::before` and applying a background image and styles to it.

<br>

## Future Improvements

1. Adding subtle animations to buttons and input elements
2. Adding ARIA attributes for better accessibility

<br>

## Acknowledgments

This project is based on a certification project from <a href="https://survey-form.freecodecamp.rocks/">freeCodeCamp</a>
