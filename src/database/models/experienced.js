'use strict';
module.exports = (sequelize, DataTypes) => {
  const Experienced = sequelize.define(
    'Experienced',
    {
      refId: DataTypes.INTEGER,
      dateJoined: DataTypes.DATE,
      dateLeft: DataTypes.DATE,
      reasons: DataTypes.STRING,
      otherComments: DataTypes.TEXT,
      finalSalary: DataTypes.INTEGER,
      otherAllowances: DataTypes.INTEGER,
      lastPositionHeld: DataTypes.STRING,
      performanceStandardId: {
        type: DataTypes.INTEGER,
        foreignKey: {
          model: 'perfomanceStandard',
          key: 'id',
        },
      },
      reEmploy: DataTypes.TEXT,
      designation: DataTypes.TEXT,
    },
    {}
  );
  Experienced.associate = function (models) {
    // associations can be defined here
    const { Referee, performanceStandard } = models;
    Experienced.belongsTo(Referee, {
      foreign: 'refId',
    });

    Experienced.hasOne(performanceStandard);
  };
  return Experienced;
};
