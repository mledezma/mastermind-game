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
    userPattern.forEach(function (color, idx) {
      _self.handlers.forEach(function (handler) {
        handler.forEach(function (color2, idx2) {
          currentHandler = handler;
          if (color === color2) {
            matchColor += 1;
            if (idx === idx2) {
              matchPos += 1;
            }
          }
        });
      });
    });
    // Switch for the classes display
    console.log('You have ' + matchColor + ' matching colors');
    console.log('You have ' + matchPos + ' matching positions');
    this.handlers.forEach(function(handler) {
      var clues = document.getElementById('clues');
      var clue = clues.querySelectorAll('.clue');
      clue.forEach(function(el){
        el.classList.remove('white');
        el.classList.remove('black');  
        el.classList.add('gray');
      });    
    })
    for(var i = 0; i < matchColor; i++) {
      var clues = document.getElementById('clues');
      var clue = clues.querySelectorAll('.clue');
      clue[i].classList.remove('gray');       
      clue[i].classList.add('black');
      console.log(clue[i]);
    }
    for(var i = 0; i < matchPos; i++) {
      var clues = document.getElementById('clues');
      var clue = clues.querySelectorAll('.clue');
      clue[i].classList.remove('gray');      
      clue[i].classList.remove('black');      
      clue[i].classList.add('white');
    }
    if (matchPos === currentHandler.length && currentHandler.length !== 0) {
      alert('You won');
    }
  }
}