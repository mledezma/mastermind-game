/**
 * @class 
 * @desc Creates a controller MVC class
 */
var game_handlers = (function () {

  // Instance stores a reference to the Singleton
  var instance;

  function init() {
    // Inits
    game_data.createMachinePattern('beginner');
    var machinePattern = game_data.getMachinePattern();
    game_data.initObserver(machinePattern);

    // Variables
    var pattern = [];
    var target = document.getElementById('target');
    var btnCheck = document.getElementById('btnCheck');
    var btnInstruction = document.getElementById('btnInstruction');
    var modalInstruction = document.getElementById('modalInstruction');
    var opacity = document.getElementById('opacity');

    // Instances
    var mastermind = new game_ui.Mastermind();
    var drag = new game_ui.DragCommand('dragstart');
    var drop = new game_ui.DropCommand('drop');

    // Events View
    game_ui.execDragover(target, function () {
      game_ui.dragover(event, machinePattern.length, target);
    });
    game_ui.execDrag(['red', 'blue', 'white', 'black', 'orange', 'purple', 'green', 'yellow'], function () {
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
    game_ui.execClick(btnInstruction, function () {
      modalInstruction.style.display = 'block';
      opacity.style.display = 'block';
    });
    game_ui.execClick(opacity, function () {
      modalInstruction.style.display = 'none';
      opacity.style.display = 'none';
    });
  };

  return {
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function (game_view, game_model) {
      if (!instance) {
        instance = init(game_view, game_model);
      }
      return instance;
    }
  };
})();