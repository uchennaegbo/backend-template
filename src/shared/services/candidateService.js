import db from '@models';
const { Candidate, Personal, Work } = db;

export const getCandidateById = async (candidateId) => {
  const found = await Candidate.findOne({
    where: { id: candidateId },
  });
  console.log(found, ">>>>>>><<<<<<<<<");
  return found;
};

export const getPersonalRefereeCandidateById = async (candidateId) => {
  const found = await Personal.findOne({
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
