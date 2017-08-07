/**
 * @class 
 * @desc Creates a controller MVC class
 */
var game_handlers = (function () {

  // Instance stores a reference to the Singleton
  var instance;

  function init(game_model,game_view) {
    // Inits
    game_model.createMachinePattern('beginner');
    var machinePattern = game_model.getMachinePattern();
    game_model.initObserver(machinePattern);

    // Variables
    var pattern = [];
    var target = document.getElementById('target');
    var btnCheck = document.getElementById('btnCheck');
    var btnInstruction = document.getElementById('btnInstruction');
    var modalInstruction = document.getElementById('modalInstruction');
    var opacity = document.getElementById('opacity');

    // Instances
    var mastermind = new game_view.Mastermind();
    var drag = new game_view.DragCommand('dragstart');
    var drop = new game_view.DropCommand('drop');

    // Events View
    game_view.execDragover(target, function () {
      game_view.dragover(event, machinePattern.length, target);
    });
    game_view.execDrag(['red', 'blue', 'white', 'black', 'orange', 'purple', 'green', 'yellow'], function () {
      mastermind.execute(drag);
    });
    game_view.execDrop(target, function () {
      mastermind.execute(drop);
    });
    game_view.execClick(btnCheck, function () {
      var userPattern = game_view.createUserPattern(target);
      game_model.insertUserPattern(userPattern);
      game_model.getUserPattern(); //only testing
      game_model.check(userPattern);
    });
    game_view.execClick(btnInstruction, function () {
      modalInstruction.style.display = 'block';
      opacity.style.display = 'block';
    });
    game_view.execClick(opacity, function () {
      modalInstruction.style.display = 'none';
      opacity.style.display = 'none';
    });
  };

  return {
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function (game_model,game_view) {
      if (!instance) {      
        instance = init(game_model,game_view);       
      }
      return instance;
    }
  };
})();