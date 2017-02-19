'use strict';
const success = (data) => {
  console.log(data);
};
const failure = (error) => {
  console.log(error);
};


const showUserResources = function(data) {
let resourceTemplate = require('./templates/user_resource.handlebars');
$('.resourcesTable').html(resourceTemplate({
  resources: data.resources
  }));
};




module.exports = {
  success,
  failure,
  showUserResources
};
