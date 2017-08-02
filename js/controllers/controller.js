function controller(game_view, game_model) {
  var game_ui = game_view;
  var game_data = game_model;
  

  // Inits
  game_data.createMachinePattern('beginner');
  var machinePattern = game_data.getMachinePattern(); // Machine Pattern

  // Inits Observer
  game_data.initObserver(machinePattern);

  // Variables View
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
  var btnCheck = document.getElementById('checkPatterns');

  // Instances
  var mastermind = new game_ui.Mastermind();
  var drag = new game_ui.DragCommand('dragstart');
  var drop = new game_ui.DropCommand('drop');

  // Events View
  target.addEventListener('dragover', function() {
    game_ui.dragover(event, machinePattern.length, target);
  });
  // game_ui.dragstart([color], callback);
  // Array donde se ejecutan estas variables
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
  btnCheck.addEventListener('click', function() {
    var userPattern = game_ui.createUserPattern(target);
    // game_data.insertUserPattern(userPattern);
    // game_data.getUserPattern(); //only testing

    game_data.check(userPattern);
  })
};

controller(game_ui, game_data);