/**
 * @function Game Init the game
 */

function game() {
  // Convertir en constructors --> new
  console.log('game_ui',game_ui);
  console.log('game_data',game_data);
  game_handlers(game_data, game_ui);
}

game();