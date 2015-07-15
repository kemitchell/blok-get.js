var blokGet = require('./')
var blokPut = require('blok-put')
var isSHA256 = require('is-sha-256-hex-digest')
var levelup = require('levelup')
var memdown = require('memdown')
var sha256 = require('sha256')
var test = require('tape');

test('put and get an empty object', function(t) {
  t.plan(4)
  var value = { a: 'b' }
  var level = levelup({ db: memdown })
  blokPut(level, sha256, value, function(error, digest) {
    t.error(error, 'no error')
    t.ok(isSHA256(digest), 'callback argument is a valid digest')
    blokGet(level, digest, function(error, gotValue) {
      t.error(error, 'no error')
      t.same(gotValue, value, 'retrieves put value') }) }) })
