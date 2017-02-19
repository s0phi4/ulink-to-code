'use strict';

const successCreateGame = () => {
  $('#board').show();
  $('h2').hide();
};

const showUserResources = function(data) {
let resourceTemplate = require('./templates/user-resource.handlebars');
$('h2').show();
$('h2').text('You killed time '+ data.games.length + ' times!');
};



module.exports = {
  showUserResources,
  successCreateGame,
};
