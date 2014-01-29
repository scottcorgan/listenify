# prominent
 
DOM event listeners as promises

[![browser support](https://ci.testling.com/scottcorgan/prominent.png)](https://ci.testling.com/scottcorgan/prominent)
 
## Install
 
```
npm install prominent --save
```
 
## Usage
 
### Browserify

```js
var bind = require('prominent');
var clicked = bind('.selector', 'click', {
  delegate: 'body'
});

function handler1 (e) {
  // Do stuff
}

function handler2 (e) {
  // Do stuff
}

clicked.then(handler1);
clicked.then(handler2);
```

### Standalone

```html
<script src="/bower_components/prominent/dist/prominent.js"></script>
```

```js
var bind = window.prominent;
var clicked = bind('.selector', 'click');

function handler1 (e) {
  // Do stuff
}

function handler2 (e) {
  // Do stuff
}

clicked.then(handler1);
clicked.then(handler2);
```

## bind(selector, event[, options])

Returns a promise

* `selector` - a valid css selector or DOM node object
* `event` - a valid DOM event (click, submit, etc.)
* `options` - options to pass
  * `delegate` - pass a valid css selector to delegate the event listener
 
## Run Tests
 
Requires [Phantomjs](http://phantomjs.org/download.html) is installed
 
```
npm install
npm test
```