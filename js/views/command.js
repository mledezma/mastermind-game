/**
 * @function run
 */
// This is mostly part of the controller
var run = function() {
    // Variables
    var pattern = [];
    var color = document.getElementById('red');
    var color2 = document.getElementById('blue');
    var color3 = document.getElementById('white');
    var color4 = document.getElementById('black');
    var color5 = document.getElementById('orange');
    var color6 = document.getElementById('purple');
    var color7 = document.getElementById('green');
    var color8 = document.getElementById('yellow');

    var target = document.getElementById('target');

    // Instances
    console.log(game_ui);
    var mastermind = new game_ui.Mastermind();
    var drag = new game_ui.DragCommand('dragstart');
    var drop = new game_ui.DropCommand('drop');

    // Events
    target.addEventListener('dragover',  game_ui.dragover);

    color.addEventListener('dragstart', function(){
        mastermind.execute(drag);
    });
    color2.addEventListener('dragstart', function(){
        mastermind.execute(drag);
    });
    color3.addEventListener('dragstart', function(){
        mastermind.execute(drag);
    });
    color4.addEventListener('dragstart', function(){
        mastermind.execute(drag);
    });
    color5.addEventListener('dragstart', function(){
        mastermind.execute(drag);
    });
    color6.addEventListener('dragstart', function(){
        mastermind.execute(drag);
    });
    color7.addEventListener('dragstart', function(){
        mastermind.execute(drag);
    });
    color8.addEventListener('dragstart', function(){
        mastermind.execute(drag);
    });

    target.addEventListener('drop', function(){
        mastermind.execute(drop);
    });
}();
