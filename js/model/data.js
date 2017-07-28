/**
 * @class
 * @desc Creates a model MVC class
 */

var game_data = (function () {
  // Deberia haber una variable a la cual despues de ejecutado el factory del machinePattern
  // se pueda acceder al valor del patron de la maquina
  var machinePattern = []; // Only for testing
  var userPattern = [];

  /**
   * Represents a pattern.
   * @constructor
   * @param {string} type - Type of level.
   */
  var createMachinePattern = function (type) {
    var factory = new FactoryPattern();
    var newPattern = factory.createPattern(type);
    var finalPattern = newPattern.create();
    machinePattern = finalPattern; // Only for testing
  }

  /**
   * Represents a user pattern.
   * @function
   * @param {array} finalPattern
   */
  var insertUserPattern = function (finalPattern) {
      userPattern = finalPattern;
  }

  /**
   *Matchs patterns
   * @function
   * @param {array} observerPattern
   */
  var matchPatterns = function (observerPattern) {
    var observerAttempt = new ObserverList();
    observerAttempt.subscribe(observerPattern);
  }

  /**
   *Data to change color pegs for each attempt
   * @function
   * @return {object} messages
   */
  var changePegs = function(){
    var messages = {
      right: '../img/right-peg.png',
      wrong: '../img/wrong-peg.png'
    }

    return messages;
  }


  return {
    createMachinePattern: createMachinePattern,
    userPattern: userPattern,
    matchPatterns: matchPatterns,
    showMachinePattern: function() {return machinePattern},
    changePegs: changePegs
  }

})();
