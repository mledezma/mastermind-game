/**
 * @class 
 * @desc Creates a controller MVC class
 */
//ToDO: Convert to singleton
var game_handlers = function(game_view, game_model) {
  // Inits
  game_data.createMachinePattern('beginner');
  var machinePattern = game_data.getMachinePattern();
  game_data.initObserver(machinePattern);

  // Variables
  var pattern = [];
  var color1 = document.getElementById('red');
  var color2 = document.getElementById('blue');
  var color3 = document.getElementById('white');
  var color4 = document.getElementById('black');
  var color5 = document.getElementById('orange');
  var color6 = document.getElementById('purple');
  var color7 = document.getElementById('green');
  var color8 = document.getElementById('yellow');
  var target = document.getElementById('target');
  var btnCheck = document.getElementById('btnCheck');

  // Instances
  var mastermind = new game_ui.Mastermind();
  var drag = new game_ui.DragCommand('dragstart');
  var drop = new game_ui.DropCommand('drop');

  // Events View
  game_ui.execDragover(target, function () {
    game_ui.dragover(event, machinePattern.length, target);
  });
  game_ui.execDrag([color1, color2, color3, color4, color5, color6, color7, color8], function () {
    mastermind.execute(drag);
  });
  game_ui.execDrop(target, function () {
    mastermind.execute(drop);
  })
  game_ui.execClick(btnCheck, function () {
    var userPattern = game_ui.createUserPattern(target);
    game_data.insertUserPattern(userPattern);
    game_data.getUserPattern(); //only testing
    game_data.check(userPattern);
  });
};