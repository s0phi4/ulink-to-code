'use strict';
const config = require('../config');
// const resourceTemplate = require('../templates/resource.handlebars');



const success = (data) => {
  console.log(data);
};

const onUpdateSuccess = (id) => {

  $(`#exampleModalUpdate-${id}`).modal("hide");
};

const failure = (error) => {
  console.log(error);
};

const successSave = (data) => {
  config.resource = data.resource;
  $('.clean-info').val('');
};
const successChange = (data) => {
    config.resource = data.resource;

};

const showUserResources = function(data) {
let resourceTemplate = require('../templates/resource.handlebars');
$('.resourcesTable').html(resourceTemplate({
  resources: data.resources
  }));
};




module.exports = {
  success,
  onUpdateSuccess,
  failure,
  successChange,
  successSave,
  showUserResources
};
