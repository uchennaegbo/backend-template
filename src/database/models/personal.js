
('use strict');
module.exports = (sequelize, DataTypes) => {
  const Personal = sequelize.define(
    'Personal',
    {
      
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      phone:DataTypes.STRING,
      coy: DataTypes.STRING,
      candidateId: DataTypes.UUID,
      relationship: DataTypes.STRING,
      howLong: DataTypes.STRING,
      conduct: DataTypes.STRING,
      reliability: DataTypes.STRING,
      leadershipQualities: DataTypes.STRING,
      socialTraits: DataTypes.STRING,
      occupation: DataTypes.TEXT,
      honesty: DataTypes.TEXT,
      recommendations: DataTypes.TEXT,
      comments: DataTypes.TEXT,
      signature: DataTypes.TEXT,
      date: DataTypes.DATE,
    },
    {}
  );
  Personal.associate = function (models) {
    // associations can be defined here
    const { Candidate } = models;
    Personal.belongsTo(Candidate, {
      foreign: 'candidateId',
    });
  };
  Personal.beforeCreate((user) => (user.id = uuidv4()));

  return Personal;
};
