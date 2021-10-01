/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/extensions
const models = require('../models');

module.exports = {
  get: (req, res) => models.products.getAll()
}