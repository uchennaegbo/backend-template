import db from '@models';

const { Personal, Work } = db;

export const onboard = async (details) => {
  const {
    personalRefFirstName,
    personalRefLastName,
    personalRefEmail,
    lastEmployerRefFirstName,
    lastEmployerRefLastName,
    lastEmployerRefEmail,
  } = details;

  try {
    const newPersonalReferee = await Personal.create({
      name: `${personalRefFirstName} ${personalRefLastName}`,
      email: personalRefEmail,
    });

    const newWorkReferee = await Work.create({
      name: `${lastEmployerRefFirstName} ${lastEmployerRefLastName}`,
      email: lastEmployerRefEmail,
    });
    return { newPersonalReferee, newWorkReferee };
  } catch (error) {
    let msg = error.message;
    if (error.parent.message.includes('duplicate')) {
      msg = 'Email already exists.';
    }
    throw new Error(msg);
  }
};
