'use strict'
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    nbInStock: DataTypes.INTEGER,
  }, {})
  Product.associate = function (models) {
  }

  return Product
}
