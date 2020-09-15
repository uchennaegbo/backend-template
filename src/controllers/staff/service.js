import db from '@models';
import { response } from 'express';
import { staff } from '.';

const { Staff, Referee } = db;

export const onboard = async (details) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    level,
    // personalRefFirstName,
    // personalRefLastName,
    // personalRefEmail,
    // lastEmployerRefFirstName,
    // lastEmployerRefLastName,
    // lastEmployerRefEmail,
  } = details;

  try {
    const newStaff = await Staff.create({
      name: firstName + lastName,
      email,
      phone,
      level,
    });

    // const personalReferee = await Referee.create(
    //   {
    //     name: personalRefFirstName + personalRefLastName,
    //     email: personalRefEmail,
    //     staffId: newStaff.id,
    //   },
    //   { transaction }
    // );

    // if (
    //   details?.lastEmployerRefFirstName &&
    //   details?.lastEmployerRefLastName &&
    //   details?.lastEmployerRefEmail
    // ) {
    //   const lastEmployer = await Referee.create(
    //     {
    //       name: lastEmployerRefFirstName + lastEmployerRefLastName,
    //       email: lastEmployerRefEmail,
    //     },
    //     { transaction }
    //   );
    // }

    // return { ...newStaff, ...personalReferee, ...lastEmployer };
    return newStaff;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const addReferee = async (refereeObject) => {
  try {
    const {
      personalRefFirstName,
      personalRefLastName,
      personalRefEmail,
      lastEmployerRefFirstName,
      lastEmployerRefLastName,
      lastEmployerRefEmail,
      staffId,
    } = refereeObject;

    // Lets get to know our staff
    const findStaff = await Staff.findOne({
      where: {
        id: staffId,
      },
    });
    if (!findStaff) {
      throw Error('staff does not exist');
    }
    // Validate if the staff level is entry or experienced
    if (staff.level === 'entry' || (staff.level === 'experienced' && !staff.isCompleted)) {
      // Check if staff does not have a referee already
      const findReferee = await Referee.findOne({
        where: {
          staffId: staff.id,
          isCompleted: false
        },
      });
      if (findReferee|| findReferee.types === 'entry') {
        throw new Error('staff cannot add more than one personal referee');

      }
      const createEntryReferee = await Referee.create({
        name: `${personalRefFirstName} ${personalRefLastName}`,
        email: personalRefEmail,
        staffId,
        type: staff.level,
      });
      if (staff.level === 'entry') {

          createEntryReferee.isCompleted = true;
          createEntryReferee.save();
          return createEntryReferee;
        }
      }
    //   if (staff.level === 'experienced') {

    //   }


    const findReferee = await Referee.findAll({
        where: {
            staffId,
            isCompleted: false
        }
    });
    if (findReferee.length > 1 ) {
        throw new Error('Experienced professional Cannot have more than 2 referees');
    };
    const createExperiencesRef = await Referee.create({
        name: `${lastEmployerRefFirstName} ${lastEmployerRefLastName}`,
        email: lastEmployerRefEmail,
        staffId,
    });
    if (createExperiencesRef.length >= 2) {
        createExperiencesRef.isCompleted = true;
        createExperiencesRef.save();
    }
    return createExperiencesRef
  } catch (error) {}
};
