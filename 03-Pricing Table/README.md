# Pricing Table

<br>
<p align="center">
<img src="assets/pricing-table.png">
</p>
<p align="center">A pricing table built with HTML and CSS</p>

<p></p>
<br>

## Key Features Implemented

- A table design with zebra stripes and rounded corners using the semantic HTML `<table>` element
- A responsive layout for both mobile and desktop environments (~600px, 768px, 992px, 1200px)
- Horizontal scrolling for smaller screens using `overflow-x` property

<br>

## Challenges and Lessons

### 1. Confilect between `border-collapse: collapse` and `border-radius`

When using `border-collapse: collapse` on a table, you can't directly apply `border-radius` to create rounded corners. One solution is to set `border-spacing: 0` and apply borders to individual cells where needed, without collapsing the borders.

**Alternative Solution:**
You can maintain `border-collapse: collapse` and rounded corners by using a box-shadow to simulate a border around the table.

```
table {
  border-collapse: collapse;
  border-spacing: 0;
  border-radius : 7px;
  border-style : hidden;
  box-shadow : 0 0 0 1px #666;
}
```

---

### 2. `border` and `border-radius` apply to cells, not rows or columns

Borders and rounded corners can only be applied to individual table cells (`<td>` or `<th>` elements), not entire rows or columns.

---

### 3. Aligning table content

**Text alignment:** Horizontal alignment can be set with `text-align`, and vertical alignment with `vertical-align`.

**Image alignment:** Images can be aligned horizontally and vertically within a table cell using a flexbox

---

### 4. `table-layout: fixed` for controlling table width

By default, the width of table cells are adjusted based on its content size. For precise control over column widths, you need to set `table-layout: fixed` to the table element.

However, even with this setting, the table and its cells shrink to a minimum width to accomodate the longest unbreakable content.

---

### 5. Column widths in tables with headers

To effectively control the width of a column in a table with headers (`<th>`), you need to set the width for both the `<th>` and the corresponding `<td>` elements.

<br>

## Future Improvements

1. Replace X and ✓ with vector icons
2. Remove the white vertical space at the right edge of the screen on mobile devices

<br>

## Acknowledgments

This project is inspired by the pricing table from NordVPN's production page:

<p>
<img src="assets/nordvpn-prod.png" width="70%">
</p>
