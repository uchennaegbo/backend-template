import db from '@models';
const { Candidate, Personal, Work } = db;

export const getCandidateById = async (candidateId) => {
  try {
    const found = await Candidate.findOne({
      where: { id: candidateId },
      include: [
        { model: Personal, as: 'personal' },
        { model: Work, as: 'work' },
      ],
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

export const getRefereeByCandidateId = async (candidateId, id) => {
  try {
    let found;

    found = await Personal.findOne({
      where: {
        candidateId,
        id,
      },
    });

    if (!found) {
      found = await Work.findOne({
        where: {
          candidateId,
          id,
        },
      });
    }
    return found;
  } catch (error) {
    let msg = error.message;
    if (error.parent.message.includes('uuid')) {
      msg = 'Invalid User Id.';
    }
    throw new Error(msg);
  }
};

// export const getAllPersonalRefereesCandidateById = async (candidateId) => {
//   try {
//     const found = await Candidate.findOne({
//       where: { candidateId },
//       includes: [{ models: Personal }, { models: Work }],
//     });
//     return found;
//   } catch (error) {
//     let msg = error.message;
//     if (error.parent.message.includes('uuid')) {
//       msg = 'Invalid User Id.';
//     }
//     throw new Error(msg);
//   }
// };

export const getWorkRefereeCandidateById = async (candidateId) => {
  const found = await Work.findOne({
    where: { candidateId },
  });

  return found;
};

export const getAllRefereesByCandidateEmail = async (email) => {
  try {
    const found = await Candidate.findAll({
      where: {
        email,
      },
      include: [
        { all: true, attributes: { exclude: ['createdAt', 'updatedAt'] } },

        // { model: Personal, as: 'personal' },
        // { model: Work, as: 'work' },
      ],
    });
    return found;
  } catch (error) {
    console.log({ error });
    let msg = error.message;
    if (error.parent.message.includes('duplicate')) {
      msg = 'Invalid User Email.';
    }
    throw new Error(msg);
  }
};
