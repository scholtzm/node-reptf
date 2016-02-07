var repTFAPI = require('../');
var expect = require('chai').expect;
var nock = require('nock');

var steamID = '76561197960435530';

nock('https://rep.tf')
  .post('/api/bans')
  .query({
    str: steamID
  })
  .reply(200, '{}');

nock('https://rep.tf')
  .post('/api/profile')
  .query({
    str: steamID
  })
  .reply(200, '{}');

describe('RepTFAPI Wrapper', function () {

  it('provides information about bans', function(done) {
    repTFAPI.getBans(steamID, function(error, result) {
      expect(error).to.be.null;
      expect(result).to.be.truthy;

      return done();
    });
  });

  it('provides profile information', function(done) {
    repTFAPI.getProfile(steamID, function(error, result) {
      expect(error).to.be.null;
      expect(result).to.be.truthy;

      return done();
    });
  });

});
