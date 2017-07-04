var pattern = [];

/**
 * @function Log Helper
 * @param {} msg
 */
var log = (function() {
    var log = " ";

    return {
        add: function(msg) { log += msg + "\n" },
        show: function() { alert(log); log = ""}
    }
})();

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
    var data = event.dataTransfer.getData("text");
    var target = event.target;
    target.appendChild(document.getElementById(data));
    event.dataTransfer.clearData();

    // Adds every new dropped element to the pattern array
    pattern = [];            
    var targets = target.getElementsByTagName('p');
    for(var i = 0; i < targets.length; i++) {
        pattern.push(targets[i].id);
    }
}

/**
 * @function dragover
 * @param {string} event
 */
function dragover(event) {
    event.preventDefault();
}

/**
 * @constructor
 * @description Default class for Commands
 * @param {function} execute - The callback to execute
 * @param {string} name - The name of the event listener
 * @param {DOMElement} target - DOM Element to aply the last param
 */
var Command = function(execute, name) {
    this.execute = execute;
    this.name = name;
};

/**
 * @instance Command#DragCommand
 * @param {string} name - The name of the event listener
 */
var DragCommand = function(name) {
    return new Command(drag, name);
};

/**
 * @instance Command#DropCommand
 * @param {string} name - The name of the event listener
 */
var DropCommand = function(name) {
    return new Command(drop, name);
};

/**
 * @constructor
 */
var Mastermind = function() {
    var commands = [];

    return {
        execute: function(command) {
            commands.push(command);
            log.add(commands[commands.length-1].name);                  
            commands.forEach(function(element){
                element.execute(event);              
                commands.pop();
            });
        },
        getCommands: function() {
            return commands;
        }
    }
};

/**
 * @function run
 */
var run = function() {
    // Variables
    var color = document.getElementById('color');
    var color2 = document.getElementById('color2');
    var target = document.getElementById('target');

    // Instances
    var mastermind = new Mastermind();
    var drag = new DragCommand('dragstart');   
    var drop = new DropCommand('drop');

    // Events
    target.addEventListener('dragover', dragover);
    color.addEventListener('dragstart', function(){
        mastermind.execute(drag);
    });
    color2.addEventListener('dragstart', function(){
        mastermind.execute(drag);
    });
    target.addEventListener('drop', function(){
        mastermind.execute(drop);
    });
}();