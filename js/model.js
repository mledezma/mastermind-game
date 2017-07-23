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
  this.machinePattern = function(type) {
    var factory = new FactoryPattern();
    var newPattern = factory.createPattern(type);
    var finalPattern = newPattern.create();
  }

  this.userPattern = function(){
    //co

  }

  this.matchPatterns = function(){
// Observer
  }

  this.hits = function(){

  }

  return {
    machinePattern: machinePattern,
    userPattern: userPattern,
    matchPatterns: matchPatterns,
    hits: hits
  }

})();
