'use strict';


const success = (data) => {
  console.log(data);
};
const failure = (error) => {
  console.log(error);
};

const successSave = () => {
  $('.save').popover('hide');
};

const showUserResources = function(data) {
let resourceTemplate = require('./templates/resource.handlebars');
$('.resourcesTable').html(resourceTemplate({
  resources: data.resources
  }));
};




module.exports = {
  success,
  failure,
  successSave,
  showUserResources
};
