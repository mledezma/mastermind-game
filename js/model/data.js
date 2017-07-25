/**
 * @class
 * @desc Creates a model MVC class
 */

var game_data = (function(){

  /**
   * Represents a pattern.
   * @constructor
   * @param {string} type - Type of level.
   */
  var machinePattern = function(type) {
    var factory = new FactoryPattern();
    var newPattern = factory.createPattern(type);
    var finalPattern = newPattern.create();
  }

  /**
   * Represents a user pattern.
   * @constructor
   */
  var userPattern = function(){
    //Se queda en el view?

  }

  /**
   *Matchs patterns
   * @function
   * @param {array} observerPattern
   */
  var matchPatterns = function(observerPattern){
    var observerAttempt = new ObserverList();
    observerAttempt.subscribe(observerPattern);
  }

  /**
   *Counts attempts
   * @function
   * @param {array} observerPattern
   */
  var attempts = function(){
    //
  }

  return {
    machinePattern: machinePattern,
    userPattern: userPattern,
    matchPatterns: matchPatterns,
    attempt: attempt
  }

})();
