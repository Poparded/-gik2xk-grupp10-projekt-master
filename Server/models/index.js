'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Establish the relationship between Rating and Product
db.Rating.belongsTo(db.Product); // a rating belongs to a product
db.Product.hasMany(db.Rating,
  { onDelete: "CASCADE" });   // a product can have many ratings

// Establish the relationship between CartRow and Product
db.CartRow.belongsTo(db.Product); // a cart row belongs to a product
db.Product.hasMany(db.CartRow, { onDelete: "CASCADE" });   // a product can be in many cart rows

// Establish the relationship between CartRow and Cart
db.CartRow.belongsTo(db.Cart); // a cart row belongs to a cart
db.Cart.hasMany(db.CartRow, { onDelete: "CASCADE" });   // a cart can have many rows

// Establish the relationship between Cart and User
db.Cart.belongsTo(db.User); // a cart belongs to a user
db.User.hasMany(db.Cart, { allowNull: false, onDelete: "CASCADE" });   // a user can have many carts





db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
