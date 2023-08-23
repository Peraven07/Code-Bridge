const assert = require('assert');
const app = require('../../src/app');

describe('\'contactus\' service', () => {
  it('registered the service', () => {
    const service = app.service('contactus');

    assert.ok(service, 'Registered the service');
  });
});
