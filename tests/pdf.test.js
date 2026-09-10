const test = require('node:test');
const assert = require('node:assert/strict');
test('invoice service has the expected identity', () => {
  assert.equal(require('../app').service, 'invoice');
});
