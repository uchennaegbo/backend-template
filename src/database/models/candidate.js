import { uuid as uuidv4 } from 'uuid/v4';

('use strict');
module.exports = (sequelize, DataTypes) => {
  const Candidate = sequelize.define(
    'Candidate',
    {
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        // unique: true,
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
  Candidate.associate = function (models) {
    // associations can be defined here
    const { Personal, Work } = models;
    Candidate.hasOne(Personal);
    Candidate.hasOne(Work);
  };

  Candidate.beforeCreate((user) => (user.id = uuidv4()));
  return Candidate;
};
