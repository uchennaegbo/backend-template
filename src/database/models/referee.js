'use strict';
module.exports = (sequelize, DataTypes) => {
  const Referee = sequelize.define(
    'Referee',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      staffId: DataTypes.INTEGER,
      honesty: DataTypes.STRING,
      recommendations: DataTypes.TEXT,
      comments: DataTypes.TEXT,
      signature: DataTypes.TEXT,
      date: DataTypes.DATE,
    },
    {}
  );
  Referee.associate = function (models) {
    // associations can be defined here
    const { Staff, Entry, Experienced } = models;
    Referee.belongsTo(Staff, {
      foreignKey: 'staffId',
    });

    Referee.hasOne(Entry);
    Referee.hasOne(Experienced);
  };
  return Referee;
};
