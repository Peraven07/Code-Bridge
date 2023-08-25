const users = require("./users/users.service.js");
const products = require("./products/products.service.js");
const customer = require("./customer/customer.service.js");
const cart = require("./cart/cart.service.js");
const order = require("./order/order.service.js");
const item = require("./item/item.service.js");
const contactus = require('./contactus/contactus.service.js');
const feedback = require('./feedback/feedback.service.js');
const techSupport = require('./tech-support/tech-support.service.js');
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(products);
  app.configure(customer);
  app.configure(cart);
  app.configure(order);
  app.configure(item);
  // ~cb-add-configure-service-name~
  app.configure(contactus);
  app.configure(feedback);
  app.configure(techSupport);
};
