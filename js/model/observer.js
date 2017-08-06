/**
 * @function ObserverList
 * @constructor
 */
function ObserverList() {
  this.handlers = []; //Observers
}

/**
 * @function ObserverList
 */
ObserverList.prototype = {
  subscribe: function (fn) {
    this.handlers.push(fn);
  },

  unsubscribe: function (fn) {
    this.handlers = this.handlers.filter(
      function (item) {
        if (item !== fn) {
          return item;
        }
      }
    );
  },

  check: function (userPattern) {
    var matchColor = 0;
    var matchPos = 0;
    var _self = this;
    var currentHandler = [];
    console.log('User Pattern', userPattern);
    console.log('Machine Pattern', this.handlers[0]);
    userPattern.forEach(function (color, idx) {
      _self.handlers.forEach(function (handler) {
        handler.forEach(function (color2, idx2) {
          currentHandler = handler;
          if (color === color2) {
            console.log('yey a color matched:', color);
            matchColor += 1;
            if (idx === idx2) {
              console.log('and the position too :D :', idx);
              matchPos += 1;
            }
          }
        });
      });
    });
    // Switch for the classes display
    console.log('You have ' + matchColor + ' matching colors');
    console.log('You have ' + matchPos + ' matching positions');
    if (matchPos === currentHandler.length) {
      console.log('yey you won');
    }
  }
}