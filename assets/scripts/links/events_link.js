'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api_link = require('./api_link');
const ui_link = require('./ui_link');

const onGetLinks = function (event) {
  if (event) {
    event.preventDefault();
  }
  $('.resourcesTable').show();
  api_link.getLinks()
  .then(function (resources) {
    ui_link.showUserResources(resources);
  })
  .catch(ui_link.failure);
};


const onCreateLink = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api_link.createLink(data)
 .then(ui_link.successSave)
 .then(onGetLinks)
 .catch(ui_link.failure);
 };


const onUpdateLink = function (event) {
   event.preventDefault();
   let data = getFormFields(event.target);
   let id = $(event.target).data('id');
    api_link.updateLink(data, id)
      .then(() => {
        ui_link.onUpdateSuccess(id);
      } )
      .then(onGetLinks)
      .catch(ui_link.failure);
};

const onDeleteLink = function(event){
  event.preventDefault();
  let id = $(event.target).data('id');
  api_link.deleteLink(id)
  .then(ui_link.success)
  .then(onGetLinks)
  .catch(ui_link.failure);
};


const linkHandlers = function () {
$('.see_links').on('click', onGetLinks);
$('#linksForm').on('submit', onCreateLink);
$('.resourcesTable').on('submit','.update-info',onUpdateLink);
$('.resourcesTable').on('click','.delete_information', onDeleteLink);

};
module.exports = {
  linkHandlers,
  onGetLinks
};
