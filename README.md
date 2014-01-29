# prominent
 
DOM event listeners as promises

[![browser support](https://ci.testling.com/scottcorgan/prominent.png)](https://ci.testling.com/scottcorgan/prominent)
 
## Install
 
```
npm install prominent --save
```
 
## Usage
 
```js
var bind = require('prominent');
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

### bind(selector, event)

Returns a promise

* `selector` - a valid css selector or DOM node object
* `event` - a valid DOM event (click, submit, etc.)
 
## Run Tests
 
Requires [Phantomjs](http://phantomjs.org/download.html) is installed
 
```
npm install
npm test
```