('use strict');
module.exports = (sequelize, DataTypes) => {
  const Work = sequelize.define(
    'Work',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      coy: DataTypes.STRING,
      candidateId: DataTypes.UUID,
      dateJoined: DataTypes.DATE,
      dateLeft: DataTypes.DATE,
      reasons: DataTypes.STRING,
      otherComments: DataTypes.TEXT,
      finalSalary: DataTypes.STRING,
      otherAllowances: DataTypes.STRING,
      lastPositionHeld: DataTypes.STRING,
      jobPerformance: DataTypes.TEXT,
      conduct: DataTypes.TEXT,
      reliability: DataTypes.TEXT,
      relWithColleagues: DataTypes.TEXT,
      reEmploy: DataTypes.TEXT,
      designation: DataTypes.TEXT,
      honesty: DataTypes.TEXT,
      recommendations: DataTypes.TEXT,
      generalComments: DataTypes.TEXT,
      signature: DataTypes.BOOLEAN,
      date: DataTypes.DATE,
    },
    {}
  );
  Work.associate = function (models) {
    // associations can be defined here
    const { Candidate } = models;
    Work.belongsTo(Candidate, {
      foreignKey: 'candidateId',
      as: 'work',
    });
  };
  return Work;
};
