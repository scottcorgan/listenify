# prominent
 
Partially applied DOM event listeners. Make awesome use of [partial application](http://en.wikipedia.org/wiki/Partial_application).

[![browser support](https://ci.testling.com/scottcorgan/prominent.png)](https://ci.testling.com/scottcorgan/prominent)
 
## Install
 
NPM 

```
npm install prominent --save
```

Bower

```
bower install prominent --save
```

## Usage
 
### Browserify

```js
var prominent = require('prominent');
var clicked = prominent('.selector', 'click');

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
<script src="/bower_components/prominent/dist/prominent.js"></script>
```

```js
var prominent = window.prominent;
var clicked = window.prominent('.selector', 'click');

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

## prominent(selector, event)

* `selector` - a valid css selector or DOM node object
* `event` - a valid DOM event (click, submit, etc.)

Returns a partially applied function, which also has a number of properties and methods on it:

* `off([listener])` - Removes event listeners. If no arguments are passed, it removes all listeners and event listeners. If you pass sthe listener function as an argument, that listener will be removed, but the rest will remain.
* `element` - the DOM node associated with this listener
* `type` - the type of event passed in (i.e, click, submit, etc);
* `listeners` - an array of all the listeners on this bound element.
 
## Run Tests
 
Requires [Phantomjs](http://phantomjs.org/download.html) is installed
 
```
npm install
npm test
```

## Credits

Huge thanks to the following for fix my code!

* **[Matthias Le Brun](http://bloodyowl.github.io/)** - Helped me through fixing my borked promises implementation. Ultimately leading to using this with partial application.
* **[Ben Lower](http://blowery.org/)** - Helped me avoid a wrong promises implementation.