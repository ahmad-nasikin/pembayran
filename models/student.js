'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    address: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: "Format Email Salah"
        }
      }
    }
  });
  Student.associate = (models) => {
    Student.belongsToMany(models.Course, {
      through: 'StudentCourse'
    })
  }
  return Student;
};
