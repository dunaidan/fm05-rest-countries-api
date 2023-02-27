# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Screenshot

![](./public/screenshot.jpg)

### Links

- Live Site URL: [Countries Project](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Axios](https://axios-http.com/) - Promise based HTTP client for the browser and node.js
- [Material UI](https://mui.com/material-ui/getting-started/overview/) - For styles

### What I learned

In this project, I learned how to create a custom theme in Material Ui, and to switch between light and dark themes. Also, I worked with Axios and send GET requests to Countries API, I spent time figuring out how to send as few calls as possible to the API for better performance. I found that I couldn't send other data from getStaticPaths and I decided to create a JSON file with the country code and country name that is used in border sections at each country.


### Continued development

Material UI is a great tool but I want to learn more css and maybe tailwind to be more flexible.

### Useful resources

- [Material UI Documentation](https://mui.com/material-ui/customization/theming/) - This helped me to create a custom theme
- [How to send data from getStaticPaths](https://github.com/vercel/next.js/discussions/11272) - This helped me to increase performance


## Author

- Frontend Mentor - [@dunaidan](https://www.frontendmentor.io/profile/dunaidan)
- Linkedin - [@dandunai](https://www.linkedin.com/in/dandunai/)