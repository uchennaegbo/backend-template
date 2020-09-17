import { uuid as uuidv4 } from 'uuid/v4';



'use strict';
module.exports = (sequelize, DataTypes) => {
  const performanceStandard = sequelize.define(
    'performanceStandard',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      jobPerformance: DataTypes.TEXT,
      conduct: DataTypes.TEXT,
      reliability: DataTypes.TEXT,
      relWithColleagues: DataTypes.TEXT,
    },
    {}
  );
  performanceStandard.associate = function (models) {
    // associations can be defined here
    const { Work } = models;
    performanceStandard.hasOne(Work);
  };

  performanceStandard.beforeCreate((p) => (p.id = uuidv4()));

  return performanceStandard;
};
