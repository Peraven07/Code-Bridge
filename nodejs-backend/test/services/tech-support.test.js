const assert = require('assert');
const app = require('../../src/app');

describe('\'TechSupport\' service', () => {
  it('registered the service', () => {
    const service = app.service('techsupport');

    assert.ok(service, 'Registered the service');
  });
});
