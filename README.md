Knwl.js
=======

Find dates, times, emails, phone numbers, links, reading time, and even the emotion hidden in text. Knwl.js makes it possible to scan through large amounts of text for data that may be of interest.

###Demo: http://byteaspect.com/knwlDemo

##How to use

Add **Knwl.js** to the ```<head>```

Create a new instance of the Knwl object:
```javascript
var x = new Knwl();
```

Initiate crawling of a string:
```javascript
x.init( string );
```

Get data:
```javascript
x.get('dates'); //returns array of dates found: [month,day,year, string snippet]
```

**Types of data that can grabbed:**

```"dates"``` - dates found in string.

```"times"``` - times found in string.

```"links"``` - links found in string.

```"emails"``` - emails found in string.

```"phones"``` - phone numbers found in string.

```"readingTime"``` - estimated reading time of string.

```"emotion"``` - estimated emotion, works best with shorter strings (comments, etc).

```"spam"``` - checks if text is possibly spam. Returns true or false.


*Please note that Knwl.js is still in early development, and can yield varying results.*






