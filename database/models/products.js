'use strict'
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    nbInStock: DataTypes.INTEGER,
  }, {})
  Products.associate = function (models) {
  }
  return Products
}
