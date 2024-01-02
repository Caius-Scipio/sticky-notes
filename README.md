# React Sticky Notes

This REACT version of my sticky notes was an attempt to take a JavaScript program I previously wrote and conver it.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Changes made](#changes-made)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

The challenge was simple: take a simple JavaScript program and recerate it using React

### Screenshot

Not yet available

![](link.png)

## My process

### Built with

- CSS custom properties
- REACT

### Changes made

  - Component-Based Structure: the UI is divided into modular components each with its own logic, state, and lifecycle methods.
  - State Management: I am using the useState hook to manage the state of the stickies, note text, and note color.
  - Lifecycle Methods: I am using the useEffect hook to initialize the application.
  - Event Handling: I'm using the onSubmit, onChange, and onClick events directly in JSX.
  - Rendering: I am using JSX syntax to define the UI.
  - Conditional Rendering: I conditionally render components based on state.
  - Component Re-rendering: with React, it updates and re-renders only the necessary components when the state changes.

### What I learned

Making this React app was a pleasure, and if I had to summarize the three major takeaways, I'd have to say:
- Translating vanilla JavaScript to React is not a straight forward process.
- Thinking in components will take time, I'm sure I should've made a component or two for creating the stickies.
- Component styling may be something useful to employ in future projects.

Here is some code I am particularly proud of, or think was interesting:

```css
ul#stickies li:nth-child(even) {
.
.
.
}

ul#stickies li:nth-child(odd) {
.
.
.
}

ul#stickies li:nth-child(3n) {
.
.
.
}
```
```js
useEffect(() => {
  const stickiesArray = JSON.parse(localStorage.getItem("stickiesArray")) || [];
  const stickyObjects = stickiesArray.map((key) => {
    const stickyData = JSON.parse(localStorage.getItem(key));
    return stickyData ? { id: key, ...stickyData } : null;
  }).filter((sticky) => sticky !== null);
  setStickies(stickyObjects);
}, []);
```

### Continued development

This Sticky Note app is not quite done yet. Here are some things I'd like to do in the future with it:
  - Add a priority to each note
  - Add a label to each note
  - Be able to sort by due date or color

### Useful resources

- [w3schools](https://www.w3schools.com/) - My reference to remember the syntax and possibilites.

## Author

- Website - [Caius Scipio](https://caius-scipio.github.io/Portfolio/)
