
### A map of developer skills
```
front end                                             back-end dev
<-------------------------------------------------------------->
CSS HTML jQuery              front-end dev                express mongo API
     SASS
```

## SASS

  - installation with `node-sass`
     - run commandline through npm script: `./node_modules/node-sass/bin/node-sass --watch --recursive --output public stylesheets`
  - nesting: how to think about components
  - variables
    - create variable for font colors
  - math operations ex: lighten / darken colours
    - ex: lighten the font color for the title
  - how to use imports to break up your css
    - ex: show how css is broken up in desingdrop


## Responsive Design

  - supporting mobile devices: viewport meta tag
    - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
    - how to use chrome dev tools to preview mobile views
    - if there is time: how to use the XCode simulator to preview a web page on mobile
  - adaptive content
    - ex: don't show the navbar on mobile. instead show the user a link to the list of users.
    - Browser compatility Quote: "Your designs don’t need to look exactly the same in every browser, they just need to look good in every browser."
  - using percentages
  - media queries
  - min-width
     - ex: if we use a percentage on the navbar we want to make sure the sidebar doesn't shrink below a certain width.
  - max-width

