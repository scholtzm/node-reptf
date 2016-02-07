var request = require('request');

function doRequest(url, steamID, timeout, callback) {
  var options = {
    url: url,
    method: 'POST',
    timeout: timeout,
    json: true,
    qs: {
      str: steamID
    }
  };

  request(options, function(error, response, body) {
    if(!error && response.statusCode === 200) {
      callback(null, body);
    } else {
      callback(error, null);
    }
  });
}

// Main API object
var repTFAPI = {
  _BANS_URL: 'https://rep.tf/api/bans',
  _PROFILE_URL: 'https://rep.tf/api/profile',

  // default timeout value
  timeout: 10000
};

/**
 * Returns users's list of bans.
 * @param {string}   steamID  User's SteamID64 as string.
 * @param {function} callback Callback function.
 */
repTFAPI.getBans = function(steamID, callback) {
  doRequest(this._BANS_URL, steamID, this.timeout, callback);
};

/**
 * Returns users's profile.
 * @param {string}   steamID  User's SteamID64 as string.
 * @param {function} callback Callback function.
 */
repTFAPI.getProfile = function(steamID, callback) {
  doRequest(this._PROFILE_URL, steamID, this.timeout, callback);
};

// Export API object
module.exports = repTFAPI;
