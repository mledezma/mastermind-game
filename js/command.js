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
 * @function dragStart
 * @param {string} event
 */
function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}

/**
 * @function dragover
 * @param {string} event
 */
function dragover(event) {
    event.preventDefault();
}

/**
 * @function Drop
 * @param {string} event
 */
function drop(event) {
    console.log("Drop");
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
    event.dataTransfer.clearData();
}

// Events
document.getElementById('color').addEventListener('dragstart', dragStart);
document.getElementById('target').addEventListener('drop', drop);
document.getElementById('target').addEventListener('dragover', dragover);
document.getElementById('target2').addEventListener('drop', drop);
document.getElementById('target2').addEventListener('dragover', dragover);



/*-----------------------------------------------------
---------------------Command Test----------------------
-----------------------------------------------------*/


function dragExecute(event, value){
    console.log('event', event);  
    console.log('value', value);  
};
var Command = function(execute,event,value) {
    this.execute = execute;
    this.event = event;
    this.value = value;  
    this.hi = 'hi';  
};
var DragCommand = function(event, value){
    return new Command(dragExecute,event,value);
};

var Mastermind = function() {
    var commands = [];

    return {
        execute: function(command) {
            commands.push(command);
            // command.value = target; command.name.function --> EventListener
            var test = document.getElementById(command.value);
            test.addEventListener('click', function(){
                console.log(command.hi)
            });
            log.add(commands[commands.length-1]);  
            return test;          
        },
        getCommands: function() {
            return commands;
        }
    }
};

var config = {
    value: 'test',
    hi: 'Hello',
}

var run = function(){
    var mastermind = new Mastermind();
    var test2 = new DragCommand(event,'test');
    console.log(test2);
    mastermind.execute(test2);
    
};

run();