'use strict';
module.exports = (sequelize, DataTypes) => {
  const Work = sequelize.define(
    'Work',
    {
      staffId: DataTypes.INTEGER,
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
      honesty: DataTypes.TEXT,
      recommendations: DataTypes.TEXT,
      generalComments: DataTypes.TEXT,
      signature: DataTypes.TEXT,
      date: DataTypes.DATE,
    },
    {}
  );
  Work.associate = function (models) {
    // associations can be defined here
    const { Staff, performanceStandard } = models;
    Work.belongsTo(Staff, {
      foreign: 'staffId',
    });

    Work.hasOne(performanceStandard);
  };
  return Work;
};
