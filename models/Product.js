/* eslint-disable camelcase */
const db = require('../db');

function Product({
  name,
  slogan,
  description,
  category,
  default_price,
}) {
  this.name = name;
  this.slogan = slogan;
  this.description = description;
  this.category = category;
  this.default_price = default_price;
}

// eslint-disable-next-line func-names
Product.prototype.createProduct = async function () {
  // eslint-disable-next-line no-useless-catch
  try {
    const { rows } = await db.query(
      `INSERT INTO products(name, slogan, description, category, default_price)
      VALUES ($1, $2, $3, $4, $5)`,
      [this.name, this.slogan, this.description, this.category, this.default_price],
    );
    return rows;
  } catch (err) {
    throw err;
  }
};
