// Initializes the `TechSupport` service on path `/techsupport`
const { TechSupport } = require('./tech-support.class');
const createModel = require('../../models/tech-support.model');
const hooks = require('./tech-support.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/techsupport', new TechSupport(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('techsupport');

  service.hooks(hooks);
};
