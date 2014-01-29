var Promise = require('promise');
var element = require('tiny-element');
var delegate = require('tiny-delegate');

var prominent = function (selector, evt, options) {
  options = options || {};
  
  return new Promise(function (resolve, reject) {
    var el = element(selector);
    if (!el) return reject();
    
    if (options.delegate) {
      var bind = delegate(options.delegate)
      bind(selector, evt, resolve);
    }
    else{
      el.addEventListener(evt, resolve);
    }
  });
};

module.exports = prominent;