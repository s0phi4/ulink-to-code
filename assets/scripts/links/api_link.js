'use strict';
const config = require('../config');
const store = require('../store');

//get all links
const getLinks = function () {
  return $.ajax( {
    url:config.apiOrigin + '/resources',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    }
  });
};
//create link
const createLink = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/resources',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};
// Show link
// const showLink = function () {
//   return $.ajax({
//     url: config.apiOrigin + '/resources/',
//     method: 'GET',
//     headers: {
//       Authorization: `Token token=${store.user.token}`,
//     }
//   });
// };
//Update link only name and URL
const updateLink = function(data) {
  return $.ajax ({
    url: config.apiOrigin + '/resources/' + data.resource.id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};

// Delete link
const deleteLink = function(resourceIdDelete) {
  return $.ajax ({
    url: config.apiOrigin + '/resources/' + resourceIdDelete,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

module.exports = {
  getLinks,
  createLink,
  // showLink,
  updateLink,
  deleteLink
};
