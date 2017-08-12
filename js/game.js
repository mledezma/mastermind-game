/**
 * @function Game Init the game
 */

function game(view, model) {
  // Dudas sobre constructor con respecto a la privacidad
  var ui = view;
  var data = model;  
  console.log('game_ui',ui);
  console.log('game_data',data);
  game_handlers.getInstance(data,ui);
}

game(game_ui,game_data);