'use strict';
const config = require('../config');
const store = require('../store');

//get all links
const getLinks = function () {
  return $.ajax( {
    url:config.apiOrigin + '/links',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    }
  });
};
//create link
const createLink = function (name, url, tag, content_type) {
  return $.ajax({
    url: config.apiOrigin + '/links',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data: {
      "resource": {
        "name": name,
        "url":  url,
        "tag":  tag,
        "content_type": content_type
      }
    },
  });
};
// Show link
const showLink = function () {
  return $.ajax({
    url: config.apiOrigin + '/links/',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    }
  });
};
//Update link only name and URL
const updateLink = function(resourceId,name, url) {
  return $.ajax ({
    url: `${config.apiOrigin}/links/${store.resourceId}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data: {
      "resource": {
        "name": name,
        "url":  url,
      }
    },
  });
};

// Delete link
const deleteLink = function(resourceIdDelete) {
  return $.ajax ({
    url: config.apiOrigin + '/links/' + resourceIdDelete,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

module.exports = {
  getLinks,
  createLink,
  showLink,
  updateLink,
  deleteLink
};
