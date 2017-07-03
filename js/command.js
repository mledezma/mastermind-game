var pattern = [];

/**
 * @function Log Helper
 * @param {} msg
 */
var log = (function(){
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

    pattern = [];            
    var targets = target.getElementsByTagName('p');
    console.log(targets);
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
var Command = function(execute, name, target) {
    this.execute = execute;
    this.name = name;    
    this.target = target;
};

/**
 * @instance Command#DragCommand
 * @param {string} name - The name of the event listener
 * @param {DOMElement} target - DOM Element to aply the last param
 */
var DragCommand = function(name, target){
    return new Command(drag, name, target);
};

/**
 * @instance Command#DropCommand
 * @param {string} name - The name of the event listener
 * @param {DOMElement} target - DOM Element to aply the last param
 */
var DropCommand = function(name, target){
    return new Command(drop, name, target);
};

//ToDo: Try to fusion Dragover and Drop command because both have the same target
/**
 * @instance Command#DragoverCommand
 * @param {string} name - The name of the event listener
 * @param {DOMElement} target - DOM Element to aply the last param
 */
var DragoverCommand = function(name, target){
    return new Command(dragover, name, target);
};

/**
 * @constructor
 */
var Mastermind = function() {
    var commands = [];

    return {
        execute: function(command) {
            commands.push(command.name);
            // command.value = target; command.name.function --> EventListener
            var input = document.getElementById(command.target);
            input.addEventListener(command.name, function(event){
                command.execute(event);
            });
            log.add(commands[commands.length-1]);      
        },
        getCommands: function() {
            return commands;
        }
    }
};

/**
 * @function run
 */
var run = function(){
    var mastermind = new Mastermind();
    var drag = new DragCommand('dragstart', 'color');
    var drag2 = new DragCommand('dragstart', 'color2');    
    var drop = new DropCommand('drop', 'target');
    var dragover = new DragoverCommand('dragover', 'target');
    mastermind.execute(drag);
    mastermind.execute(drag2);
    mastermind.execute(dragover);    
    mastermind.execute(drop);
    //log.show();
}();