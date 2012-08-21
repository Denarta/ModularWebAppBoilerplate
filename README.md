ModularWebAppBoilerplate
========================

An extremely simple (mobile) web app that can be used as boilerplate for web apps developed with modularity in mind.

Basically, the web app is composed of two nested views (represented as different Handlebars templates), backed by a Javascript module defined using Require.js. jQuery is used as a convenience library, it can be substituted by more mobile-friendly libraries like Zepto. 

The web app is purposegully super-simple, it shows:

* a string that can be filled dynamically by the Javascript module
* a set of links which are dynamically filled by the first Javascript module too
* a Google Maps map centered on L'Aquila, the city I currently live in ;) 

Used libraries
--------------

* [RequireJS](http://requirejs.org/): a JavaScript file and module loader for keeping your Javascript codebase modular and well organized
* [Handlebars](http://handlebarsjs.com/): a minimal templating engine based on Mustache
* [jQuery](http://jquery.com/): the ubiquitous JavaScript Library for document traversing, event handling, animations, etc.
* [GMaps](https://developers.google.com/maps/documentation/javascript/): the ultra-famous Javascript library from Google for embedding Google Maps in your own web pages.