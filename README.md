##Knwl.js
====

[![Build Status](https://api.travis-ci.org/loadfive/Knwl.js.png)](https://api.travis-ci.org/loadfive/Knwl.js.png)

Knwl.js is a Natural Language Processor built with JavaScript, put simply, **Knwl.js scans through text, user data, or just about anything for data of interest**, phone numbers, dates, locations, emails, times, and more. Even check if the string may be spam, or get the overall emotion. 

###Use It
Knwl.js was built to be simple, for normal use, **all you need is one file**, ```knwl.js```. Just include this file in the ```<head>``` of a page.

First, create a new instance of the ```Knwl()``` object:
```javascript
var hal = new Knwl();
```

Now, initiate Knwl.js on a string:
```javascript
hal.init("This is a string with information.");
```

Finally, use ```.get()``` to scan the string for certain data:
```javascript
var locsFound = hal.get("places");
var datesFound = hal.get("dates");
```

####.get() Data Types
```"dates"``` - dates found in string.

```"times"``` - times found in string.

```"links"``` - links found in string.

```"emails"``` - emails found in string.

```"phones"``` - phone numbers found in string.

```"places"``` - locations found in string.

```"readingTime"``` - estimated reading time of string.

```"emotion"``` - estimated emotion, works best with shorter strings (comments, etc).

```"spam"``` - checks if text is possibly spam. Returns true or false.


*Please note that Knwl.js is still in early development, and can yield varying results.*


###Building

For Node, if uglify-js is installed globally ( `npm install uglify-js -g` ) then 

    uglifyjs -o ./knwl.min.js ./knwl.js

will create *knwl.min.js*. 


###Licence

Project released under an MIT license.







