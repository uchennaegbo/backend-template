import db from '@models';

const { Personal, Work } = db;

export const onboardPersonalReferees = async (details) => {
  try {
    const newPersonalReferees = await Personal.bulkCreate(details);

    return  newPersonalReferees;
  } catch (error) {
    let msg = error.message;
    if (error.parent.message.includes('duplicate')) {
      msg = 'Email already exists.';
    }
    throw new Error(msg);
  }
};


export const onboardExperienceReferees = async (details) => {
  try {
    const newExperienceReferees = await Work.bulkCreate(details);

    return { newExperienceReferees };
  } catch (error) {
    console.log(error);
    let msg = error.message;
    if (error.parent.message.includes('duplicate')) {
      msg = 'Email already exists.';
    }
    throw new Error(msg);
  }
};