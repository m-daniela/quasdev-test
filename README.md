## Requirements

From [here](https://2advanced.ro/tests/js-test.html).

## Description

Each row has an onclick event attached and, when clicked, the row contents change their color and another row appears underneath, containing the user card and message, with all available data. If the user is gold, the card's background is set to a golden color. 

When the user clicks the row again or on one of the cards, the information is hidden. 

I have used React to build the table and rowclick functionality. I have also used a package, called [light-sanitize-html](https://www.npmjs.com/package/light-sanitize-html), for sanitizing the message and comment string, since `<br/>` tags were present, so they could be inserted as HTML, without generating security issues. And I have used SASS instead of regular CSS because I find it easier to visualize the stylesheets in a nested format. 

I have chosen this approach to avoid creating the nodes manually and to make use of JSX, even if there are methods specifically created to work with tables in Vanilla Javascript (like `table.insertRow(), row.insertCell()`).

The users and messages arrays are made available globally using React Context API. 