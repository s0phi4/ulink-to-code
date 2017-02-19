'use strict';
const getFormFields = require(`../../../lib/get-form-fields`);

const api_link = require('./api_link');
const ui_link = require('./ui_link');
const save = require('../store');
// let data = getFormFields(event.target);

const onIndex = function (event) {
  event.preventDefault();
  api_game.index()
  .then((response) => {
    // save.game = response.game;
    $("#game-results").text("Games " + response.games.length);
  })
  .then(ui_game.success);
};

const onCreateGame = function (event) {
  event.preventDefault();
  api_game.createGame()
  .then ((response) => {
   save.game = response.game;
 })
 .then(ui_game.successCreateGame);
 };

const onShowGame = function (event) {
  event.preventDefault();
  // let id = parseInt($('#game-id').val());
  api_game.showGame()
  .then(ui_game.showGamesTotal);
};

const gameHandlers = function () {
  $('#getGames').on('click', onIndex);
  $('#reset').on('click', onCreateGame);
  $('#getGames').on ('click', onShowGame);

};
module.exports = {
  gameHandlers,
};
//
