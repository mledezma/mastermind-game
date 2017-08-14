/**
 * @class 
 * @desc Creates a controller MVC class
 */
var game_handlers = (function () {

  // Instance stores a reference to the Singleton
  var instance;

  function init(game_model,game_view) {
    // Variables
    var machinePattern = [];
    var pattern = [];
    var targetNum = 0;    
    var target = 'target' + targetNum;
    var btnCheck = document.getElementById('btnCheck');
    var btnInstruction = document.getElementById('btnInstruction');
    var modalInstruction = document.getElementById('modalInstruction');
    var opacity = document.getElementById('opacity');
    var attempts = 1;

    // Instances
    var mastermind = new game_view.Mastermind();
    var drag = new game_view.DragCommand('dragstart');
    var drop = new game_view.DropCommand('drop');

    // Events View
    game_view.execClick(btnCheck, function () {
      if(attempts >= 10) {
        if (confirm("Has perdido, deseas jugar de nuevo?") == true) {  
          window.location.reload();
          return;
        } else {
          return;
        }
      };
      var userPattern = game_view.createUserPattern(target);
      attempts+=1;
      game_model.insertUserPattern(userPattern);
      game_model.check(userPattern);
      target.removeEventListener('dragover', game_view.dragover);
      targetNum+=1;
      targetName = 'target' + targetNum;
      game_view.renderGame(machinePattern, targetName, false);
      target = document.getElementById(targetName);
      game_view.execDragover(target, function () {
        game_view.dragover(event, machinePattern.length, target);
      });
      game_view.execDrop(target, function () {
        mastermind.execute(drop);
      });
      game_view.switchColors(machinePattern);
    });
    game_view.execClick(btnInstruction, function () {
      modalInstruction.style.display = 'block';
      opacity.style.display = 'block';
    });
    game_view.execClick(opacity, function () {
      modalInstruction.style.display = 'none';
      opacity.style.display = 'none';
    });
    game_view.execClick('startGame', function(){
      var hidden = document.querySelector('.hidden');
      var level = document.getElementById('level');      
      hidden.classList.remove('hidden');
      document.getElementById('introWrapper').classList.add('hidden');
      game_model.createMachinePattern(level.value);
      machinePattern = game_model.getMachinePattern();
      game_model.initObserver(machinePattern);
      game_view.renderGame(machinePattern, target, true);
      target = document.getElementById('target'+targetNum);
      game_view.execDrag(machinePattern, function () {
        mastermind.execute(drag);
      });
      game_view.execDragover(target, function () {
        game_view.dragover(event, machinePattern.length, target);
      });
      game_view.execDrop(target, function () {
        mastermind.execute(drop);
      });
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