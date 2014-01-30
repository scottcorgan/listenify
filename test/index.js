var listen = require('../index.js');
var trigger = require('tiny-trigger');
var test = require('tape');
var matches = require('matches-selector');

test('binds an event to an element with a callback', function (t) {
  document.body.innerHTML = '<div class="click-me"></div>';
  
  var clicked = listen('.click-me', 'click');
  
  clicked(function (e) {
    t.ok(matches(e.target, '.click-me'), 'handled click event');
    t.end();
  });
  
  trigger('.click-me', 'click');
});

test('triggers all callbacks for an event binding', function (t) {
  document.body.innerHTML = '<div class="click-me"></div>';
  
  var calledAmount = 0;
  var clicked = listen('.click-me', 'click');
  
  clicked(function (e) {
    calledAmount += 1;
  });
  clicked(function (e) {
    calledAmount += 1;
  });
  
  trigger('.click-me', 'click');
  
  setTimeout(function () {
    t.equal(calledAmount, 2, 'called both callbacks');
    t.end();
  }, 0);
});

test('stores meta data for each binding', function (t) {
  var clicked = listen('.click-me', 'click');
  
  t.equal(clicked.selector, '.click-me', 'selector');
  t.equal(clicked.type, 'click', 'event type');
  t.ok(matches(clicked.element, '.click-me'), 'element');
  t.end();
});

test('does not bind to an element that does not exist', function (t) {
  document.body.innerHTML = '';
  
  var threwError = false;
  var clicked;
  
  try {clicked = listen('.imagniary', 'click');}
  catch (e) {threwError = true;}
 
  t.notOk(threwError, 'did not throw error');
  t.end();
});

test('supports css selectors and node objects', function (t) {
  document.body.innerHTML = '<div class="clicker"></div>';
  
  var el = document.querySelector('.clicker');
  var clicked = listen(el, 'click');
  
  clicked(function (e) {
    t.ok(matches(e.target, '.clicker'), 'handled click event');
    t.end();
  });
  
  trigger('.clicker', 'click');
});

test('removes all listeners', function (t) {
  document.body.innerHTML = '<div class="clicker"></div>';
  
  var didClick = 0;
  var clicked = listen('.clicker', 'click');
  
  clicked(function (e) {didClick += 1;});
  clicked(function (e) {didClick += 1;});
  clicked.off();
  
  trigger('.clicker', 'click');
  
  setTimeout(function () {
    t.equal(didClick, 0, 'no click handlers');
    t.deepEqual(clicked.listeners, [], 'removed listeners');
    t.end();
  }, 0);
});

test('removes a single listener', function (t) {
  document.body.innerHTML = '<div class="clicker"></div>';
    
  var didClick = 0;
  var clicked = listen('.clicker', 'click');
  
  clicked(clickListener);
  clicked(function () {didClick += 1;});
  clicked.off(clickListener);
  
  trigger('.clicker', 'click');
  
  
  setTimeout(function () {
    t.equal(didClick, 1, 'only one listener executed');
    t.deepEqual(clicked.listeners.length, 1, '1 listener left');
    t.end();
  }, 0);
  
  function clickListener (e) {
    didClick += 1;
  }
});

test('delegates events to node', function (t) {
  t.end();
});
