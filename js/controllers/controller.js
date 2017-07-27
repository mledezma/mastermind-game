function controller(game_view, game_model) {
  var game_ui = game_view;
  var game_data = game_model;
  
  // Inits
  game_data.machinePattern('beginner');
  var machinePattern = game_data.showMachinePattern(); // Machine Pattern  
  console.log(machinePattern); // Muestra el patron creado

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
  var mastermind = new game_ui.Mastermind();
  var drag = new game_ui.DragCommand('dragstart');
  var drop = new game_ui.DropCommand('drop');

  // Events
  target.addEventListener('dragover', function() {
    game_ui.dragover(event, machinePattern.length, target);
  });
  color.addEventListener('dragstart', function () {
    mastermind.execute(drag);
  });
  color2.addEventListener('dragstart', function () {
    mastermind.execute(drag);
  });
  color3.addEventListener('dragstart', function () {
    mastermind.execute(drag);
  });
  color4.addEventListener('dragstart', function () {
    mastermind.execute(drag);
  });
  color5.addEventListener('dragstart', function () {
    mastermind.execute(drag);
  });
  color6.addEventListener('dragstart', function () {
    mastermind.execute(drag);
  });
  color7.addEventListener('dragstart', function () {
    mastermind.execute(drag);
  });
  color8.addEventListener('dragstart', function () {
    mastermind.execute(drag);
  });

  target.addEventListener('drop', function () {
    mastermind.execute(drop);
  });
};

controller(game_ui, game_data);