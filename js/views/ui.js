/**
 * @class
 * @desc Creates a view MVC class
 */

var game_ui = (function () {

  /**
   * Create a dinamic Rows of the table game.
   * @function
   */
  function createRows(){
    for(i=0; i<10; i++) {
      table = document.getElementById('table');
      row = document.createElement('tr');
      row.setAttribute('class', 'row');
      row.id = 'target' + i ;
      table.appendChild(row);
    }
  }

  /**
   * Create circles of colorOptions
   * @function
   * @param {array}
   */
  function createCircles(colors){
    colors.forEach(function(element) {
      colorOptions = document.getElementById('colorOptions');
      circle = document.createElement('li');
      circle.id = element;
      circle.classList.add('circle');
      circle.setAttribute('draggable', true);
      circle.classList.add(element);
      colorOptions.appendChild(circle);
    });
  }

  /**
   * Create circles gray of the table where user will put a guess
   * @function
   * @param {array}
   */
  function createGrayCircles(level){
    rows = document.getElementsByClassName('row');

    for (var i = 0; i < rows.length; i++) {
      if (rows[i].id = 'target' + i ) {
        level.forEach(function(element) {
          td = document.createElement('td');
          circle = document.createElement('div');
          circle.classList.add('circle', 'gray');
          td.appendChild(circle);
          rows[i].appendChild(td);
        });
      }
    }
  }

  /**
   * @function drag
   * @param {string} event
   */
  this.drag = function(event) {
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

  /**
   * @function _execFunc
   * @param {*} eventListener
   * @param {* || array} string
   * @param {*} callback
   */
  var _execFunc = function(eventListener, element, callback) {
    if(Array.isArray(element)) {
      element.forEach(function(el) {
        if(typeof(el) === 'string') {
          // console.log(el);
          var test = document.getElementById(el);
          console.log(test);
          document.getElementById(el).addEventListener(eventListener, function() {
            callback();
          });
        } else if(el instanceof HTMLElement) {
          document.getElementById(el).addEventListener(eventListener, function() {
            callback();
          });
        } else {
          console.log('Invalid Type of Element:', el + '(' + typeof(el) + ')');
        }
      });
    } else if(typeof(el) === 'string') {
      document.getElementById(element).addEventListener(eventListener, function() {
        callback();
      });
    } else if(element instanceof HTMLElement) {
      document.getElementById(element.id).addEventListener(eventListener, function() {
        callback();
      });
    } else {
      console.log('Invalid Type of Element:', element + '(' + typeof(element) + ')');
    }
  }

  /**
   * @function execDrag
   * @param {* || array} HTMLNode
   * @param {*} callback
   */
  var execDrag = function(element, callback) {
    _execFunc('dragstart', element, callback);
  };

  /**
   * @function execDrop
   * @param {* || array} HTMLNode
   * @param {*} callback
   */
  var execDrop = function(element, callback) {
    _execFunc('drop', element, callback);
  };

  /**
   * @function execClick
   * @param {* || array} HTMLNode
   * @param {*} callback
   */
  var execClick = function(element, callback) {
    _execFunc('click', element, callback);
  };

   /**
   * @function execDragover
   * @param {* || array} HTMLNode
   * @param {*} callback
   */
  var execDragover = function(element, callback) {
    _execFunc('dragover', element, callback);
  };

  /**
  * @function Display game ui
  */
 var displayGame = function() {
    var intro = document.getElementById('intro')
    var gameWrapper = document.getElementById('game');
    gameWrapper.classList.remove('hidden');
    intro.className = 'hidden';
 };

  return {
    displayGame: displayGame,
    createCircles: createCircles,
    createRows: createRows,
    createGrayCircles: createGrayCircles,
    Mastermind: Mastermind,
    DragCommand: DragCommand,
    DropCommand: DropCommand,
    dragover: dragover,
    createUserPattern: createUserPattern,
    execDrag: execDrag,
    execDrop: execDrop,
    execClick: execClick,
    execDragover: execDragover,
  }
}())
