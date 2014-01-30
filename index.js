var matches = require('matches-selector');
var element = require('tiny-element');
var indexesOf = require('indexes-of');

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