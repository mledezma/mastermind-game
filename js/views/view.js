/**
 * @class 
 * @desc Creates a view MVC class
 */
var game_ui = (function () {
  /**
   * @function drag
   * @param {string} event
   */
  function drag(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
  }

  /**
   * @function drop
   * @param {string} event
   */
  function drop(event) {
    event.preventDefault();  

    // Prevents the appending of two li's
    if(event.target.tagName === 'LI') {
      return;
    }  
    var data = event.dataTransfer.getData("text");
    var target = event.target;
    target.appendChild(document.getElementById(data));
    event.dataTransfer.clearData();
  }

  /**
   * @function dragover
   * @param {string} event
   */
  function dragover(event, machinePattern, target) {
    var userPattern = [];
    var targets = target.getElementsByTagName('li');       
    for (var i = 0; i < targets.length; i++) {
      userPattern.push(targets[i].id);
    }
    if (userPattern.length !== machinePattern) {
      event.preventDefault();
    }
  }

  /**
   * @function createUserPattern
   * @param {*} target
   * @return {array} userPattern
   */
  //ToDo pasar a comando
  function createUserPattern(target) {
    var pattern = [];
    var targets = target.getElementsByTagName('li');
    for (var i = 0; i < targets.length; i++) {
      pattern.push(targets[i].id);
    }
    return pattern;   
  }

  /**
   * @constructor
   * @description Default class for Commands
   * @param {function} execute - The callback to execute
   * @param {string} name - The name of the event listener
   * @param {DOMElement} target - DOM Element to aply the last param
   */
  var Command = function (execute, name) {
    this.execute = execute;
    this.name = name;
  };

  /**
   * @instance Command#DragCommand
   * @param {string} name - The name of the event listener
   */
  var DragCommand = function (name) {
    return new Command(drag, name);
  };

  /**
   * @instance Command#DropCommand
   * @param {string} name - The name of the event listener
   */
  var DropCommand = function (name) {
    return new Command(drop, name);
  };

  /**
   * @constructor
   */
  var Mastermind = function () {
    var commands = [];

    return {
      execute: function (command) {
        commands.push(command);
        commands.forEach(function (element) {
          element.execute(event);
          commands.pop();
        });
      },
      getCommands: function () {
        return commands;
      }
    }
  };

  return {
    Mastermind: Mastermind,
    DragCommand: DragCommand,
    DropCommand: DropCommand,
    dragover: dragover,
    createUserPattern: createUserPattern,
  }
}())