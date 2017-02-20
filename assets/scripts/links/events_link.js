'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api_link = require('./api_link');
const ui_link = require('./ui_link');

const onGetLinks = function (event) {
  event.preventDefault();
  $('.container_popovers').hide();
  $('.resourcesTable').show();
  api_link.getLinks()
  .then(function(resources) {
    ui_link.showUserResources(resources);
  })
  .catch(ui_link.failure);
};


const onCreateLink = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api_link.createLink(data)
 .then(ui_link.success)
 .catch(ui_link.failure);
 };

// const onShowLink = function (event) {
//   event.preventDefault();
//   api_link.showLink()
//   .then(ui_link.success)
//   .catch(ui_link.failure);
// };

const onUpdateLink = function (event) {
   event.preventDefault();
   let data = getFormFields(event.target);
   api_link.updateLink(data)
   .then(ui_link.success)
   .catch(ui_link.failure);
};

const onDeleteLink = function(event){
  event.preventDefault();
  let data = getFormFields(event.target);
  api_link.deleteLink(data)
  .then(ui_link.success)
  .catch(ui_link.failure);
};

const linkHandlers = function () {
$('.see_links').on('click', onGetLinks);
$('.save-js').on('click', onCreateLink);
$('.save-ruby').on('click', onCreateLink);
$('.save-html').on('click', onCreateLink);
$('.save-css').on('click', onCreateLink);
$('.edit').on('click', onUpdateLink);
$('.delete').on('click', onDeleteLink);

};
module.exports = {
  linkHandlers,
};
