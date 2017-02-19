 'use strict';

const successSignUp = () => {
  $('#exampleModalUp').modal('hide');
  $('.signup-clean').val('');
  $('.message').text('');
};

const failureSignUp = (error) => {
if (error) {
  $('.message').text('Nope, you used this account already, try with a different account!');
  }
};

const successSignIn = () => {
    $('#sign-up').val('');
    $('.clean-signin').val('');
    $('#exampleModalIn').modal('hide');
    $('.container_popovers').show();
    $('.pass').show();
    $('.top').hide();
    $('#change-password').show();
    $('#sign-out').show();
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
      $('.container_popovers').hide();
      $('.pass').hide();
      $('.home-page').show();
};

const failureSignOut = () => {
      $('.container_popovers').hide();
      $('.pass').hide();
      $('.home-page').show();

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
