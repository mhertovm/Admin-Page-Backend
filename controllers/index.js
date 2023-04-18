const Sequelize = require('sequelize');
const DataTypes = require('sequelize');
const sequelize = new Sequelize('mydb',null,null,{dialect:'sqlite',storage:'database.db'});

const Users = require('../models/users')(sequelize, DataTypes);
const Product = require('../models/product')(sequelize, DataTypes);
const Category = require('../models/category')(sequelize, DataTypes);
module.exports = {Users, Product, Category}
