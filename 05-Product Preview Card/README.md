# Product Preview Card

<br>
<p align="center">
<img src="assets/project-mobile.png" width="40%">
</p>
<p align="center">
<img src="assets/project-desktop.png" width="80%">
</p>
<p align="center">A product preview card built with HTML and CSS</p>

<p></p>
<br>

## Key Features

- Responsive layout switching from a single column on mobile to a two-column layout on desktop using CSS grid
- Responsive images that adjust art directions for mobile and desktop screens using `<picture>`
- Accessible text and elements that scales with default font size of browsers using a relative unit `rem`
- Strikethrough text with visually hidden information for enhanced accessibility
- Hover effects on the button using the pseudo-class `:hover`

<br>

## Development Process

1. Designed the basic layout for mobile and desktop screens using CSS grid
   <img src="assets/step-01.png"  width="70%">
2. Structured the content with semantic HTML tags and set up responsive images  
   <img src="assets/step-02.png"  width="70%">
3. Applied typography and implemented spacing with flexbox
   <img src="assets/step-03.png"  width="70%">
4. Added visual details and finishing touches
   <img src="assets/step-04.png"  width="70%">

<br>

## What I learned

### 1. Accessibility from the Perspective of Browser Default Font Size

#### Misunderstanding

A common misconception in accessibility is that using `rem` units alone makes elements scalable to the screen sizes and therefore accessible. However, `rem` only adapts to the default font size settings of the browser - it does not inherently adjust to screen size unless you specify to do so with media queries.
<br><br>

#### Responsiveness ≠ Accessibility

There are many requirements to making website accessible for people with different needs, ranging from screen reading to keyboard navigation. While creating a responsive website that adapts its layout to different device sizes can help improve accessibility, it’s only one part of the process and not enough on its own. [As Jim Byrne stated](https://jimbyrne.co.uk/what-is-responsive-website-design-and-how-does-it-relate-to-accessibility/), a responsive website responds to screen size and an accessible website responds to a users’ access needs.
<br><br>

#### Browser Default Font Sizes Vary

For accessibility, it’s essential to consider that users may increase their browser’s default font size for better readability. Accessible designs maintain a solid layout that doesn't break even when the font size is scaled up significantly.
<br><br>

#### Why Use `rem` Instead of `px` for Accessibility

The `rem` unit is based on the root font size, so if users increase the default font size, elements sized in `rem` will adjust accordingly. In contrast, `px` remains fixed, regardless of user settings. `rem` is generally better for font sizes and layout elements that need to be flexible to match user preferences.
<br><br>

#### `rem` Isn't One-Size-Fits-All Solution

There are cases where `px` can still be useful, such as for borders or padding where scaling with font size isn’t necessary. It’s worth considering whether each element should grow with font size increases. Testing these choices by adjusting the browser font size helps in deciding when to use `rem` vs. `px`.
<br><br>

#### Design Choices for This Project

- `rem`
  - Main containers (#image-container and #detail-container) - should expand if text size increases
  - Media queries - to ensure the layout adjusts to available screen space, considering font size rather than just physical screen dimensions
  - Line heights - prevents text overlap at larger font sizes
- `px`
  - Padding - does not need to scale with font size, especially on smaller screens where space is limited due to the increased font sizes

<br>

### 2. `<img>` vs `<picture>` for Responsive Image

<br>

### 3. How to implement strikethrough text with accessibilty in mind

<br>

### 4. Combination of Grid and Flexbox

<br>

### 5. The Adoption of Utility First CSS

<br>

### 6. How to check the radius value in pixel in Figma

<br>

## Improvement Logs

- Removed the redundant declaration of CSS variables for font families by defining them directly with utility classes
- Changed the flexbox layout for the main container to grid system for a simpler control
- Changed two `<section>` containers for a product card with an `<article>` element

<br>

## Continued Development

-

<br>

## Useful Resources

-

<br>

## Acknowledgments

This project is inspired by [the challenge from Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa).
