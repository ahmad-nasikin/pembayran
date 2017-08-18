'use strict';
module.exports = function(sequelize, DataTypes) {
  var Course = sequelize.define('Course', {
    course_name: DataTypes.STRING,
    price: DataTypes.STRING
  });
  Course.associate = (models) => {
    Course.belongsToMany(models.Student, {
      through: 'StudentCourse'
    })
  }
  return Course;
};
