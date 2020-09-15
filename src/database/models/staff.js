'use strict';
module.exports = (sequelize, DataTypes) => {
  const Staff = sequelize.define(
    'Staff',
    {
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      phone: DataTypes.STRING,
      level: {
        type: DataTypes.ENUM,
        values: ['entry', 'experienced'],
        allowNull: false,
      },
      isCompleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {}
  );
  Staff.associate = function (models) {
    // associations can be defined here
    const { Personal, Work } = models;
    Staff.hasOne(Personal);
    Staff.hasOne(Work);
  };
  return Staff;
};
