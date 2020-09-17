import db from '@models';
const { Candidate } = db;

export const getCandidateById = async (candidateId) => {
  const found = await Candidate.findOne({
    where: { id: candidateId },
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
