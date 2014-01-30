# listenify
 
Partially applied DOM event listeners. Makes awesome use of [partial application](http://en.wikipedia.org/wiki/Partial_application).

[![browser support](https://ci.testling.com/scottcorgan/listenify.png)](https://ci.testling.com/scottcorgan/listenify)
 
## Install
 
NPM 

```
npm install listenify --save
```

Bower

```
bower install listenify --save
```

## Usage
 
### Browserify

```js
var listen = require('listenify');
var clicked = listen('.selector', 'click');

function handler1 (e) {
  // Do stuff
}

function handler2 (e) {
  // Do stuff
}

clicked(handler1);
clicked(handler2);

clicked.off(); // No more listeners
```

### Standalone

```html
<script src="/bower_components/listenify/dist/listenify.js"></script>
```

```js
var listen = window.listenify;
var clicked = window.listen('.selector', 'click');

function handler1 (e) {
  // Do stuff
}

function handler2 (e) {
  // Do stuff
}

clicked(handler1);
clicked(handler2);

clicked.off(handler1); // Removed this listner
```

## listenify(selector, event)

* `selector` - a valid css selector or DOM node object
* `event` - a valid DOM event (click, submit, etc.)

```js
var listen = require('listenify');
var clicked = listen('.selector', 'click');
```

Returns a partially applied function, which also has a number of properties and methods on it:

* `off([listener])` - Removes event listeners. If no arguments are passed, it removes all listeners and event listeners. If you pass sthe listener function as an argument, that listener will be removed, but the rest will remain.
* `element` - the DOM node associated with this listener
* `type` - the type of event passed in (i.e, click, submit, etc);
* `listeners` - an array of all the listeners on this bound element.

```js
var listen = require('listenify');
var clicked = listen('.selector', 'click');

console.log(clicked.element === document.querySelector('.selector')); // true
console.log(clicked.type === 'click'); // true

clicked.listeners.forEach(function (listener) {
  // Do Stuff
});

clicked.off(); // Removed all listeners
```
 
## Run Tests
 
Requires [Phantomjs](http://phantomjs.org/download.html) is installed
 
```
npm install
npm test
```

## Credits

Huge thanks to the following for fixing my code!

* **[Matthias Le Brun](http://bloodyowl.github.io/)** - Helped me through fixing my borked promises implementation. Ultimately leading to using this with partial application.
* **[Ben Lower](http://blowery.org/)** - Helped me avoid a wrong promises definition.