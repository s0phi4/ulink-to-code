'use strict';
const config = require('../config');
// const resourceTemplate = require('../templates/resource.handlebars');



const success = (data) => {
  console.log(data);
};
const failure = (error) => {
  console.log(error);
};

// const successSave = () => {
//   $('.save').popover('hide');
// };
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
  failure,
  successChange,
  // successSave,
  showUserResources
};
