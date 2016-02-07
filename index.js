var request = require('request');

var timeout = 10000; // 10s, hardcoded for now

// Main API object
var repTFAPI = {
  _BANS_URL: 'http://rep.tf/api/bans?str=',
  _PROFILE_URL: 'http://rep.tf/api/profile?str='
};

/**
 * Returns users's list of bans.
 * @param {string}   steamID  User's SteamID64 as string.
 * @param {function} callback Callback function.
 */
repTFAPI.getBans = function(steamID, callback) {
  var finalUrl = this._BANS_URL + steamID;

  var options = {
    url: finalUrl,
    method: 'POST',
    timeout: timeout,
    json: true
  };

  request(options, function(error, response, body) {
    if(!error && response.statusCode === 200) {
      callback(null, body);
    } else {
      callback(error, null);
    }
  });
};

/**
 * Returns users's profile.
 * @param {string}   steamID  User's SteamID64 as string.
 * @param {function} callback Callback function.
 */
repTFAPI.getProfile = function(steamID, callback) {
  var finalUrl = this._PROFILE_URL + steamID;

  var options = {
    url: finalUrl,
    method: 'POST',
    timeout: timeout,
    json: true
  };

  request(options, function(error, response, body) {
    if(!error && response.statusCode === 200) {
      callback(null, body);
    } else {
      callback(error, null);
    }
  });
};

// Export API object
module.exports = repTFAPI;
