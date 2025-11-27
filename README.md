# Interactive-card-details-form
HTML-CSS-JavaScript
# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./screenshots/Screenshot%202025-11-27%20at%2014-54-49%20Frontend%20Mentor%20Interactive%20card%20details%20form.png)
![](./screenshots/Screenshot%202025-11-27%20at%2014-54-59%20Frontend%20Mentor%20Interactive%20card%20details%20form.png)
![](./screenshots/Screenshot%202025-11-27%20at%2014-56-03%20Frontend%20Mentor%20Interactive%20card%20details%20form.png)
![](./screenshots/Screenshot%202025-11-27%20at%2014-58-20%20Frontend%20Mentor%20Interactive%20card%20details%20form.png)
![](./screenshots/Screenshot%202025-11-27%20at%2015-31-58%20Frontend%20Mentor%20Interactive%20card%20details%20form.png)
![](./screenshots/Screenshot%202025-11-27%20at%2015-50-54%20Frontend%20Mentor%20Interactive%20card%20details%20form.png)
![](./screenshots/Screenshot%202025-11-27%20at%2015-51-58%20Frontend%20Mentor%20Interactive%20card%20details%20form.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

```js
 const cardPatterns = {
        cardHolderName:/^[a-zA-Z\s.'-]{2,50}$/,
        cardHolderNumber:/^(?:4[0-9]{4}[-\s]?|[0-9]{4}[-\s]?){3}[0-9]{4}$/,
        cardHolderMonth:/^(0[1-9]|1[0-2]|jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)$/,
        cardHolderYear:/^20[0-9]{2}$/,
        cardHolderCvc:/^\d{3,4}$/
    }
```
## Author
- Frontend Mentor - [@911Sunag](https://www.frontendmentor.io/profile/911Sunag)

## Acknowledgments
Thanks Ai.