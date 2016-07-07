# less-plugin-urlencode
Simple URL Encode Function for Less

## Installation

Put the _`urlencode.less.js`_ file in your project and include the following in your Less file:

```less
@plugin 'path/to/urlencode.less.js';
```

Then you can use the `urlencode()` function anywhere.

## Use

`urlencode()` accepts a string which it will return, unquoted and URL encoded (using JavaScript's [`encodeURIComponent()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent "encodeURIComponent() - JavaScript | MDN")).
