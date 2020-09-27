import db from '@models';
const { Personal, Work } = db;

export const getPersonalRefereeById = async (pRefId) => {
  const found = await Personal.findOne({
    where: { id: pRefId },
  });

  return found;
};

export const getWorkRefereeById = async (wRefId) => {
  const found = await Work.findOne({
    where: { id: wRefId },
  });

  return found;
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
    console.log({ error });
  }
};

export const updateWorkRefereeById = async (wRefId, email) => {
  const found = await Work.update({ email }, { where: { id: wRefId } });

  return found;
};
