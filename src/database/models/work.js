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
      performanceStandardId: DataTypes.UUID,
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
    const { Candidate, performanceStandard } = models;
    Work.belongsTo(Candidate, {
      foreignKey: 'candidateId',
      as: 'work',
    });

    Work.belongsTo(performanceStandard, {
      foreign: 'performanceStandardId',
    });
  };

  // Work.beforeCreate((user) => (user.id = uuidv4()));

  return Work;
};
