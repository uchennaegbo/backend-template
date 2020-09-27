import db from '@models';
const { Candidate, Personal, Work } = db;

export const getCandidateById = async (candidateId) => {
  try {
    const found = await Candidate.findOne({
      where: { id: candidateId },
    });
    return found;
  } catch (error) {
    let msg = error.message;
    if (error.parent.message.includes('uuid')) {
      msg = 'Invalid User Id.';
    }
    throw new Error(msg);
  }
};

export const getPersonalRefereeCandidateById = async (candidateId, id) => {
  console.log({ candidateId, refId }, 'Inside Service');
  try {
    const found = await Personal.findOne({
      where: {
        candidateId,
        id,
      },
    });
    console.log(found, "UYTREWSXCFVGHJNBVCFGVCXD");
    return found;
  } catch (error) {
    console.log({ error }, "WWWWWWWWWWWW");
    let msg = error.message;
    if (error.parent.message.includes('uuid')) {
      msg = 'Invalid User Id.';
    }
    throw new Error(msg);
  }
};

export const getPersonalRefereesCandidateById = async (candidateId) => {
  const found = await Personal.findAll({
    where: { candidateId },
  });

  return found;
};

export const getWorkRefereeCandidateById = async (candidateId) => {
  const found = await Work.findOne({
    where: { candidateId },
  });

  return found;
};

export const getCandidateByEmail = async (email) => {
  const found = await Candidate.findOne({
    where: { email },
  });

  return found;
};

export const updateCandidateEmailById = async (candidateId, email) => {
  const found = await Candidate.update(
    { email },
    { where: { id: candidateId } }
  );

  return found;
};
