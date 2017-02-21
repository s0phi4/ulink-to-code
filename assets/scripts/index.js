'use strict';
//
const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const authEvents = require('./auth/events.js');
const resourceEvents = require('./links/events_link.js');
//
// On document ready
$(() => {
  setAPIOrigin(location, config);
  authEvents.addHandlers();
  resourceEvents.linkHandlers();
  $('a[rel=popover]').popover({
    html: 'true',
placement: 'bottom'
});

});
