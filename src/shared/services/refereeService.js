import db from '@models';
const { Personal,Work } = db;

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


export const updatePersonalRefereeById = async (pRefId, email) => {
  const found = await Personal.update(
    { email },
    { where: { id: pRefId } }
  );

  return found;
};

export const updateWorkRefereeById = async (wRefId, email) => {
    const found = await Work.update(
      { email },
      { where: { id: wRefId } }
    );
  
    return found;
  };