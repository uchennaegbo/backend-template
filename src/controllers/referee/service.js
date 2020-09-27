import db from '@models';

const { Personal, Work } = db;

export const onboardPersonalReferees = async (details) => {
  try {
    console.log(details, "ALL REFEREES CREATED");
    const newPersonalReferees = await Personal.bulkCreate(details);

    return newPersonalReferees;
  } catch (error) {
    console.log(error);
    let msg = error.message;
    if (error.parent.message.includes('duplicate')) {
      msg = 'Email already exists.';
    }
    throw new Error(msg);
  }
};

export const onboardExperienceReferees = async (details) => {
  const personals = details.slice(0, 2);

  try {
    const newExperiencePersonalReferees = await Personal.bulkCreate(personals);
    const newExperienceReferees = await Work.create(details.slice(-1)[0]);

    console.log([newExperiencePersonalReferees, newExperienceReferees]);
    return [...newExperiencePersonalReferees, newExperienceReferees];
  } catch (error) {
    let msg = error.message;
    if (error.parent.message.includes('duplicate')) {
      msg = 'Email already exists.';
    }
    throw new Error(msg);
  }
};
