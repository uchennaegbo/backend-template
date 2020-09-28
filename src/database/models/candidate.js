('use strict');
module.exports = (sequelize, DataTypes) => {
  const Candidate = sequelize.define(
    'Candidate',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      phone: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
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
  Candidate.associate = function (models) {
    // associations can be defined here
    const { Personal, Work } = models;
    Candidate.hasOne(Personal, {
      foreignKey: 'candidateId',
      as: 'personal',
    });
    Candidate.hasOne(Work, {
      foreignKey: 'candidateId',
      as: 'work',
    });
  };

  return Candidate;
};
