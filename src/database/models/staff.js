'use strict';
module.exports = (sequelize, DataTypes) => {
  const Staff = sequelize.define(
    'Staff',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      level: {
        type: DataTypes.ENUM,
        values: ['entry', 'experienced'],
        allowNull: false,
      },
      isCompleted: DataTypes.BOOLEAN,
    },
    {}
  );
  Staff.associate = function (models) {
    // associations can be defined here
    const { Referee } = models;
    Staff.hasMany(Referee);
  };
  return Staff;
};
