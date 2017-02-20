'use strict';
//
const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const authEvents = require('./auth/events.js');
// const apiLink = require('./links/api_link');
//
// On document ready
$(() => {
  setAPIOrigin(location, config);
  authEvents.addHandlers();
  // events_links.linkHandlers();
  $('a[rel=popover]').popover({
    html: 'true',
placement: 'bottom'
});

});
