# Survey Form

![A Survey Form Screenshot](surveyform.png)

A survey form bulit with HTML and CSS

## Key Features Implemented

- A form containing text, email, number, radio buttons, checkboxes, and dropdown input fields
- A responsive layout for both mobile and desktop environments
- An achored background image using the pseudo element `::before`

## Challenges and Lessons

### 1. The width of `select` element

`select` element (dropdown fields) can have narrower width compared to other input fields, even when the width is explicitly defined. This happens because the default setting of the select element allows the longest option to determine the width.

**Solution:**

The issue can be resolved by by applying `box-sizing: border-box` and explicitly defining the width and height for all input fields.

### 2. The vertical alignment of radio button/checkbox items

It is hard to vertically align radio button/checkbox icons and its text content when the size of the icons are manually increased. The `vertical-align` property doesn't provide a precise alignment.

**Solution:**

By using `display: flex` on the label, the radio button/checkbox icon and text content become two flex items. They can be easily aligned with `align-items: center`.

### 3. Relationship between labels and inputs

Should a form label nest the input fields or should they be separated?

- Usecase 1: `<label><input /></label>`
- Usecase 2: `<label></label><input />`

Separating labels and inputs while linking with `for` attributes allows for more flexible layouts. However, when both elements need to appear inline (such as radio button/checkbox and its text content), nesting the input element inside the label is more effective and keeps the layout simpler.

### 4. The background shifting at the end of the page

The background image may shift at the end of the page when srolloing, making an unwanted white space on top or bottom of the page, even with the following CSS properties:

- `background-size: cover`
- `background-attachment: fixed`
- `background-position: center`
- `background-repeat: no-repeat`

**Solution:**

This issue was resolved by creating an invisible element before the body’s content with `body::before` and applying a background image and styles to it.
