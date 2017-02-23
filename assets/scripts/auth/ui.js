 'use strict';
 const config = require('../config');
 const linkEvents = require('../links/events_link.js');


const successSignUp = (data) => {
  config.user = data.user;
  $('#exampleModalUp').modal('hide');
  $('.signup-clean').val('');
  $('.message').text('');
};

const failureSignUp = () => {
  $('.message').text('Nope, you used this account already, try with a different account!');
};

const successSignIn = (data) => {
    config.user = data.user;
    $('#sign-up').val('');
    $('.clean-signin').val('');
    $('#exampleModalIn').modal('hide');
    $('.container_for_info').show();
    $('.go_to_data').show();
    $('.pass').show();
    $('.top').hide();
    $('.bottom-page').hide();
    $('#change-password').show();
    $('.sign-out').show();
    linkEvents.onGetLinks();
  };

const failureSignIn = (error) => {
if (error) {
  $('.message_two').text('Nope, please use the right email and password');
  }
};

const succesChangePassword = () =>  {
$('#messagePass').text('Great! Change is successful!');
};

const successSignOut = () => {
      $('.container_for_info').hide();
      $('.go_to_data').hide();
      $('.pass').hide();
      $('.sign-out').hide();
      $('.resourcesTable').hide();
      $('.home-page').show();
      $('.top').show();
      $('.bottom-page').show();
};

const failureSignOut = () => {
      $('.container_for_info').hide();
      $('.go_to_data').hide();
      $('.pass').hide();
      $('.sign-out').hide();
      $('.resourcesTable').hide();
      $('.home-page').show();
      $('.top').show();
      $('.bottom-page').show();


};


module.exports = {
  failureSignUp,
  successSignUp,
  successSignIn,
  failureSignIn,
  succesChangePassword,
  successSignOut,
  failureSignOut,
};
