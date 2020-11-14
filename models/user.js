'use strict';
const {hashPassword} = require('../helpers/bcrypt');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING
    }
  }, {
    hooks: {
      beforeCreate: (user) => {
        user.password = hashPassword(user.password),
        user.role = 'admin'
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};