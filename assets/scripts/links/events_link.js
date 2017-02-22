'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api_link = require('./api_link');
const ui_link = require('./ui_link');

const onGetLinks = function (event) {
  if (event) {
    event.preventDefault();
  }
  // $('.container_popovers').hide();
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
  console.log(data);

  api_link.createLink(data)
 .then(ui_link.success)
 .then(onGetLinks)
 .catch(ui_link.failure);
 };

// const onShowLink = function (event) {
//   event.preventDefault();
//   api_link.showLink()
//   .then(ui_link.success)
//   .catch(ui_link.failure);
// };

const onUpdateLink = function (event) {
  console.log("HELLO");
   event.preventDefault();
   let data = getFormFields(event.target);
   let id = $(event.target).data('id');
   console.log(id);
   api_link.updateLink(data,id)
   .then(ui_link.success)
   .then($('#exampleModalUpdate').modal('hide'))
   .then(onGetLinks)
   .catch(ui_link.failure);
};

const onDeleteLink = function(event){
  event.preventDefault();
  let id = $(event.target).data('id');
  console.log(id);
  api_link.deleteLink(id)
  .then(ui_link.success)
  .then(onGetLinks)
  .catch(ui_link.failure);
};

const onClean = function(){
  $('.clean-change').val('');
  $('#messageUpdate').text('');

};

const linkHandlers = function () {
$('.see_links').on('click', onGetLinks);
$('#javascript').on('submit', onCreateLink);
$('.resourcesTable').on('submit','.update-info',onUpdateLink);
$('.resourcesTable').on('click','.delete_information', onDeleteLink);
$("#clean-in").on('click', onClean);

};
module.exports = {
  linkHandlers,
};
