'use strict';
const api_link = require('./api_link');
const ui_link = require('./ui_link');
// const save = require('../store');

const onGetLinks = function (event) {
  event.preventDefault();
  $('.container_popovers').hide();
  $('.resourcesTable').show();
  api_link.getLinks()
  .then(function(resources) {
    ui_link.showUserResources(resources);
  });
};


const onCreateLink = function (event) {
  // let resourceTag = $('.js').val();
  event.preventDefault();
  api_link.createLink()
 .then(ui_link.success)
 .catch(ui_link.failure);
 };

const onShowLink = function (event) {
  event.preventDefault();
  api_link.showLink()
  .then(ui_link.success)
  .catch(ui_link.failure);
};

const onUpdateLink = function (event) {
   event.preventDefault();
   api_link.updateLink(resourceId, name, url)
   .then(ui_link.success)
   .catch(ui_link.failure);
};

const onDeleteLink = function(event){
  let resourceDelete = $('#resourceDelete').val();
  event.preventDefault();
  api_link.deleteLink(resourceIdDelete)
  .then(ui_link.success)
  .catch(ui_link.failure);
};

const linkHandlers = function () {
$('.see_links').on('click', onGetLinks);
$('.save-js').on('click', onCreateLink);

};
module.exports = {
  linkHandlers,
};
