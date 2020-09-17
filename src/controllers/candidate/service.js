import db from '@models';

const { Candidate } = db;

export const onboard = async (details) => {
  const { firstName, lastName, email, phone, level } = details;

  try {
    const newCandidate = await Candidate.create({
      name: `${firstName} ${lastName}`,
      email,
      phone,
      level,
    });

    return newCandidate;
  } catch (error) {
    let msg = error.message;
    if (error.parent.message.includes('duplicate')) {
      msg = 'Email already exists.';
    }
    throw new Error(msg);
  }
};
