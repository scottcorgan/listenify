var Promise = require('promise');
var element = require('tiny-element');

var prominent = function (selector, evt) {
  return new Promise(function (resolve, reject) {
    var el = element(selector);
    
    if (!el) return reject();
    
    el.addEventListener(evt, function (e) {
      resolve(e);
    });
  });
};

module.exports = prominent;