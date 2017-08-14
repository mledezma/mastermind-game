/**
 * @class
 * @desc Creates a model MVC class
 */

var game_data = (function () {
  var machinePattern = [];
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
    machinePattern = finalPattern;
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
   * Inits patterns observer
   * @function
   * @param {array} userPattern
   * @param {array} machinePattern
   */
  var initObserver = function () {
    observePatterns = new ObserverList();
    observePatterns.subscribe(machinePattern);
  }

  /** 
   * Checks patterns
  */
  var checkPattern = function(userPattern) {
    observePatterns.check(userPattern);
  }

  /**
   * Data to change color pegs for each attempt
   * @function
   * @return {object} messages
   */
  // Clases de css, observer
  var changePegs = function(){
    var messages = {
      right: '../img/right-peg.png',
      wrong: '../img/wrong-peg.png'
    }

    return messages;
  }


  return {
    createMachinePattern: createMachinePattern,
    insertUserPattern: insertUserPattern,
    initObserver: initObserver,
    getMachinePattern: function() {return machinePattern},
    changePegs: changePegs,
    check: checkPattern,
  }

})();
