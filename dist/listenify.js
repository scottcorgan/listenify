!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.listenify=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
var matches = _dereq_('matches-selector');
var element = _dereq_('tiny-element');
var indexesOf = _dereq_('indexes-of');

module.exports = function (selector, type) {
  return listen(selector, type);
};
 
function listen (selector, type) {
  instance.element = element(selector);
  
  if (instance.element) instance.element.addEventListener(type, triggerListeners);
  
  function triggerListeners (e) {
    var len = instance.listeners.length;
    var i = 0;
    
    for(i; i < len; i += 1) {
      instance.listeners[i].call(this, e);
    }
  }
  
  function instance (listener) {
    instance.listeners.push(listener);
  };
  
  instance.listeners = [];
  instance.selector = selector;
  instance.type = type;
  
  instance.off = function (listenerToRemove) {
    if (instance.element && !listenerToRemove) {
      instance.element.removeEventListener(type, triggerListeners);
      instance.listeners = [];
    }
    
    if (listenerToRemove) {
      var idxs = indexesOf(instance.listeners, listenerToRemove);
      var len = idxs.length;
      var i = 0;
      
      for(i; i < len; i += 1) {
        instance.listeners.splice(idxs[i], 1);
      }
    }
  };
  
  return instance;
};
},{"indexes-of":2,"matches-selector":3,"tiny-element":4}],2:[function(_dereq_,module,exports){
module.exports = function (ary, item) {
  var i = -1, indexes = []
  while((i = ary.indexOf(item, i + 1)) !== -1)
    indexes.push(i)
  return indexes
}

},{}],3:[function(_dereq_,module,exports){
'use strict';

var proto = Element.prototype;
var vendor = proto.matches
  || proto.matchesSelector
  || proto.webkitMatchesSelector
  || proto.mozMatchesSelector
  || proto.msMatchesSelector
  || proto.oMatchesSelector;

module.exports = match;

/**
 * Match `el` to `selector`.
 *
 * @param {Element} el
 * @param {String} selector
 * @return {Boolean}
 * @api public
 */

function match(el, selector) {
  if (vendor) return vendor.call(el, selector);
  var nodes = el.parentNode.querySelectorAll(selector);
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i] == el) return true;
  }
  return false;
}
},{}],4:[function(_dereq_,module,exports){
var slice = [].slice;
var ctx = document;

module.exports = function (selector, multiple) {
  return (typeof selector == 'string')
    ? (multiple) ? slice.call(ctx.querySelectorAll(selector), 0) : ctx.querySelector(selector)
    : (selector.length) ? slice.call(selector, 0) : selector;
};
},{}]},{},[1])
(1)
});