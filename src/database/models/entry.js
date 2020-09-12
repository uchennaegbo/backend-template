'use strict';
module.exports = (sequelize, DataTypes) => {
  const Entry = sequelize.define(
    'Entry',
    {
      refId: DataTypes.INTEGER,
      relationship: DataTypes.STRING,
      howLong: DataTypes.STRING,
      conduct: DataTypes.STRING,
      reliability: DataTypes.STRING,
      leadershipQualities: DataTypes.STRING,
      socialTraits: DataTypes.STRING,
      occupation: DataTypes.TEXT,
    },
    {}
  );
  Entry.associate = function (models) {
    // associations can be defined here
    const { Referee } = models;
    Entry.belongsTo(Referee, {
      foreign: 'refId',
    });
  };
  return Entry;
};
