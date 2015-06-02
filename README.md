# Knwl.js
Knwl.js is a Natural Language Processor built in JavaScript. There are plugins available
for parsing a String for dates, times, phone numbers, emails, places, and more.

Check out a quick demo: http://loadfive.com/os/knwl/demo

## Setup

1. Load the ```knwl.js``` script in the header of a page.

	``` html
		<script src = 'knwl.js'></script>
	```

	Think of this file as a shell, it provides a standard
	API for parser plugins and some basic task functions.

2. Load a Knwl.js parser plugin file.
	
	``` html
		<script src = 'default_plugins/datetime.js'></script>
	```
	You can load as many as you want, they should work together just fine. 
	Just remember to load parser plugins after ```knwl.js``` and you'll be set.
	
3. Initiate Knwl.js on a String.

	``` javascript
		knwl.init("This is a string. This was written on the 2nd of june, of 2015.");
	```
	
	This line runs the initial parser functions that
	prepare the String for plugins to use. **Plugins
	will not function without this method first being called
	on the String.**
	
4. Initiate a plugin to parse the String.
	
	``` javascript
		var dates = knwl.get('dates');
	```
	
	The first parameter of ```knwl.get()``` is the
	name of the parser plugin you're trying to access (make sure you've added the plugin's js file to the header of the page).
	The names of all default parser plugins are provided
	 towards the end of this document. If you're using
	plugins other than the defaults, see their respective
	documentation.
	
	Anyways, if the parser plugin is found, ```knwl.get()``` will return
	an array of this format:
	
	```javascript
	var results = [
		{ //result
			//plugin-specific properties
			"preview": "This was written on the 2nd of june of 2015.", //the sentence of rough location of the data from the String
		}
	]
	```
	
	For example, here's what is returned from ```knwl.get('dates')``` when called on the previously mentioned String:
	
	```json
	[
		{
			"year": 2015,
			"month": 6,
			"day": 2,
			"preview": "This was written on the 2nd of june of 2015.",
		}
	]
	```

## Default Plugins

	### contacts.js
			
		```knwl.get('phones');```
			
			Returns any phone numbers found in the String.
			
		```knwl.get('links');```
			
			Returns any links found in the String.
				
		```knwl.get('emails');```
			
			Returns any email addresses found in the String.
	
	
	### datetime.js
	
		```knwl.get('dates');```
		
			Returns any dates found in the String.
			
		```knwl.get('times');```
		
			Returns any times found in the String.
			
	### places.js
	
		```knwl.get('places');```
			
			Returns any places found in the String.

## Experimental Plugins

These parser plugins are not as accurate as the default plugins. However,
they should be stable (they shouldn't crash the page) to use if you are willing to use them.

In the future, some of these plugins may reach a level of accuracy that promotes them
from experimental status to the default plugins. However, some will merely stay
as experiments.

	### english.js
	
		```knwl.get('english');```
		
			Returns the simple parts (verb, subject, etc.) of basic sentences found in the String.

	### units.js
	
		```knwl.get('units');```
		
			Returns any units (grams, pounds, etc.) found in the String.
	
##Developing Parser Plugins

What's awesome about the new version of Knwl.js is that it makes it much easier
for anyone with a little knowlage of JS to build plugins. These plugins offer new
parsing abilities for Knwl.js that otherwise wouldn't exist.

If you want to try your hand at building plugins for Knwl.js, we've
provided some documentation in ```plugin_development.md```.

## Community Driven

The further development of this project was possible because of the
amazing community behind previous versions. Version 1.0 of Knwl.js marks a signifficant
change in the direction of Knwl.js to the very code-base.

We've restructured and rewritten portions of the project to facilitate
plugin development, but also to drastically increase the performance. **Knwl.js 1.0 is signifficantly
 faster and more efficient than the previous iterations.**
Yet, in the process of the relaunch, certain past features have been put on hold. But
don't worry, plugins such as spam detection and emotion will return soon!

We think that overall, this is a step in the right direction.

As always, we invite you to reengineer any part of Knwl.js (including the provided plugins) in an attempt
to make them better. Let's do this together.

You can reach us at knwl@loadfive.com with any questions, comments,
or raging complaints.

http://loadfive.com/os/knwl
