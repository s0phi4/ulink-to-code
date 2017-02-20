'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
// const apiLink = require('./links/api_link');

$(() => {
  setAPIOrigin(location, config);
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// const authEvents = require('./auth/events.js');
// const events_links = require('./links/events_links.js');

// use require without a reference to ensure a file is bundled
require('./example');

// On document ready
$(() => {

  // authEvents.addHandlers();
  // events_links.linkHandlers();

  $('a[rel=popover]').popover({
    html: 'true',
placement: 'bottom'
});

});
