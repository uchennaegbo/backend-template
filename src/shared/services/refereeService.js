import db from '@models';
const { Personal, Work } = db;

export const getPersonalRefereeById = async (pRefId) => {
  try {
    const found = await Personal.findOne({
      where: { id: pRefId },
    });

    return found;
  } catch (error) {
    console.log({ error });
    let msg = error.message;
    if (error.parent.message.includes('uuid')) {
      msg = 'Invalid User Id.';
    }
    throw new Error(msg);
  }
};

export const getWorkRefereeById = async (wRefId) => {
  try {
    const found = await Work.findOne({
      where: { id: wRefId },
    });

    return found;
  } catch (error) {
    console.log({ error });
    let msg = error.message;
    if (error.parent.message.includes('uuid')) {
      msg = 'Invalid User Id.';
    }
    throw new Error(msg);
  }
};

export const updatePersonalRefereeById = async (id, data) => {
  const {
    relationship,
    howLong,
    conduct,
    reliability,
    leadershipQualities,
    socialTraits,
    occupation,
    honesty,
    recommendations,
    comments,
    signature,
    date,
  } = data;
  try {
    const updateRef = await Personal.update(
      {
        relationship,
        howLong,
        conduct,
        reliability,
        leadershipQualities,
        socialTraits,
        occupation,
        honesty,
        recommendations,
        comments,
        signature,
        date,
      },
      { where: { id } }
    );

    return updateRef;
  } catch (error) {
    let msg = error.message;
    if (error.parent.message.includes('uuid')) {
      msg = 'Invalid User Id.';
    }
    throw new Error(msg);
  }
};

export const updateWorkRefereeById = async (id, data) => {
  const {
    dateJoined,
    dateLeft,
    reasons,
    otherComments,
    finalSalary,
    otherAllowances,
    lastPositionHeld,
    reEmploy,
    designation,
    generalComments,
    jobPerformance,
    relWithColleagues,
    conduct,
    reliability,
    honesty,
    recommendations,
    signature,
    date,
  } = data;
  try {
    const updateRef = await Work.update(
      {
        dateJoined,
        dateLeft,
        reasons,
        otherComments,
        finalSalary,
        otherAllowances,
        lastPositionHeld,
        jobPerformance,
        relWithColleagues,
        conduct,
        reliability,
        reEmploy,
        designation,
        honesty,
        recommendations,
        generalComments,
        signature,
        date,
      },
      { where: { id } }
    );

    console.log(updateRef);
    return { updateRef };
  } catch (error) {
    console.log({ error });
    let msg = error.message;
    if (error.parent.message.includes('uuid')) {
      msg = 'Invalid User Id.';
    }
    throw new Error(msg);
  }
};
