/**
 * @function Factory pattern
 */
function FactoryPattern() {

    /**
     * Represents a level.
     * @constructor
     */
    var Beginner = function () {
        this.level = 1;
        this.arrayColors =  ['red', 'blue', 'white', 'green'];
    };
    /**
     * Represents a level.
     * @constructor
     */
    var Intermediate = function () {
        this.level = 2;
        this.arrayColors = ['red', 'blue', 'white', 'green', 'black', 'yellow'];
    };
    /**
     * Represents a level.
     * @constructor
     */
    var Advanced = function () {
        this.level = 3;
        this.arrayColors = ['red', 'blue', 'white', 'green', 'black', 'yellow', 'orange', 'purple'];
    };
    /**
     * Represents a pattern.
     * @constructor
     * @param {string} type - Type of level.
     */
    this.createPattern = function (type) {
        var pattern;
        //Chosee level of the game
        if (type === "beginner") {
            pattern = new Beginner();
        } else if (type === "intermediate") {
            pattern  = new Intermediate();
        } else if (type === "advanced") {
            pattern = new Advanced();
        }

        pattern.type = type; // No se esta usando??

        //create new pattern based on level
        pattern.create = function () {
          function shuffle(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

              // Pick a remaining element...
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex -= 1;

              // And swap it with the current element.
              temporaryValue = array[currentIndex];
              array[currentIndex] = array[randomIndex];
              array[randomIndex] = temporaryValue;
            }

            return array;
          }
          var newArray = this.arrayColors;
          shuffle(newArray);
          return newArray;
        }

        return pattern;
    }
}

// /**
//  * @function Init
//  */
//
// function init() {
//   var factory = new FactoryPattern();
//   var newPattern = factory.createPattern("advanced");
//   var finalPattern = newPattern.create();
//   console.log(finalPattern);
// }
//
// init();
