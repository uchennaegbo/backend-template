import response from '@response';
import { generateUniqueUrl } from '../../utils';
import * as service from './service';
import { validateRefereeEmail } from '../../shared/services/validateEmail';
import sendMail from '../../shared/messaging/sendmail';
import settings from '../../settings.json';
import {
  getCandidateById,
  getRefereeByCandidateId,
} from '../../shared/services/candidateService';
import {
  updatePersonalRefereeById,
  updateWorkRefereeById,
} from '../../shared/services/refereeService';

const { HR_EMAIL } = process.env;

// Handle Referee form details
export const registerPersonalReferees = async (req, res) => {
  const { personals } = req.body;

  try {
    for (const value of personals) {
      if (validateRefereeEmail(value.email)) {
        return response(res, 401, 'Value must be a valid Work email.');
      }
    }

    const onboarded = await service.onboardPersonalReferees(personals);

    for (const { candidateId, firstName, lastName, id, email } of onboarded) {
      const {
        firstName: first,
        lastName: last,
        email: candidateEmail,
      } = await getCandidateById(candidateId);

      const candidateName = `${first} ${last}`;

      // GENERATE UNIQUE URL
      const generatedUrl = generateUniqueUrl(candidateId, id, 'referee');

      // SEND EMAIL
      if (settings.sendMail) {
        const emailSent = await sendMail(
          `Hello  ${firstName},

          This is to notify you that ${candidateName} has been offered employment at Access Bank and has provided you as a personal reference.
          
          Kindly click on the link below to fill in accurate details.\n${generatedUrl}\nThank you.
          
          Kind regards.`,
          `ACCESS BANK REFERENCE FORM`,
          email
        );
        await sendMail(
          `Dear Team,\n This is to notify you that the candidate "${candidateName}" has completed their form and has providied ${firstName} ${lastName} as their personal reference. \nKind regards.`,
          `ACCESS BANK REFERENCE UPDATE`,
          HR_EMAIL
        );
        await sendMail(
          `Hi ${first},
  
        Thank you for filling the reference form.
        
        Your response has been sent to the HR team.
        
        Kind regards.`,
          `ACCESS BANK REFERENCE UPDATE`,
          candidateEmail
        );
      }
    }
    // RETURN RESPONSE

    return response(res, 200, onboarded);
  } catch (error) {
    console.log(error);
    return response(res, 500, error.message);
  }
};

export const registerExperienceReferees = async (req, res) => {
  const { personals, experienced } = req.body;
  const values = [...personals, experienced];
  try {
    for (const value of values) {
      if (validateRefereeEmail(value.email)) {
        return response(res, 401, 'Value must be a valid Work email.');
      }
    }

    const onboarded = await service.onboardExperienceReferees(values);

    for (const prop in onboarded) {
      const { candidateId, firstName, lastName, id, email } = onboarded[prop];

      const {
        firstName: first,
        lastName: last,
        email: candidateEmail,
      } = await getCandidateById(candidateId);

      const candidateName = `${first} ${last}`;

      // GENERATE UNIQUE URL
      const generatedUrl = generateUniqueUrl(candidateId, id, 'referee');
      // SEND EMAIL
      let emailSent;
      if (settings.sendMail && prop > onboarded.length - 2) {
        emailSent = await sendMail(
          `Hello  ${firstName},

          This is to notify you that ${candidateName} has been offered employment at Access Bank and has provided you as a last employer reference.
 
          Kindly click on the link below to fill in accurate details.\n${generatedUrl}\n 

          Thank you

          Kind regards.`,
          `ACCESS BANK REFERENCE FORM`,
          email
        );

        await sendMail(
          `Dear Team,\n This is to notify you that the candidate "${candidateName}" has completed their form and has providied ${firstName} ${lastName} as their last employer reference.\nKind regards.`,
          `ACCESS BANK REFERENCE UPDATE`,
          HR_EMAIL
        );
      } else {
        emailSent = await sendMail(
          `Hello  ${firstName},

          This is to notify you that ${candidateName} has been offered employment at Access Bank and has provided you as a personal reference.
          
          Kindly click on the link below to fill in accurate details.\n${generatedUrl}\n          
          Thank you
          
          Kind regards.`,
          `ACCESS BANK REFERENCE FORM`,
          email
        );
        await sendMail(
          `Dear Team,\nThis is to notify you that the candidate "${candidateName}" has completed their form and has providied ${firstName} ${lastName} as their personal reference.\nKind regards.`,
          `ACCESS BANK REFERENCE UPDATE`,
          HR_EMAIL
        );
      }
      await sendMail(
        `Hi ${first},

      Thank you for filling the reference form.
      
      Your response has been sent to the HR team.
      
      Kind regards.`,
        `ACCESS BANK REFERENCE AUTOMATION UPDATE`,
        candidateEmail
      );
    }

    return response(res, 200, onboarded);
  } catch (error) {
    return response(res, 500, error.message);
  }
};

export const getReferee = async (req, res) => {
  const { candidateId, id } = req.params;

  try {
    const foundReferee = await getRefereeByCandidateId(candidateId, id);
    if (!foundReferee) {
      return response(res, 404, 'Referee does not exist');
    }

    return response(res, 200, foundReferee);
  } catch (error) {
    return response(res, 500, error.message);
  }
};

export const updatPersonalRefereeInfo = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const foundReferee = await updatePersonalRefereeById(id, data);
    if (!foundReferee) {
      return response(res, 404, 'Error fetching Referee.');
    }
    const { firstName, lastName, email, candidateId } = foundReferee;
    const {
      firstName: first,
      lastName: last,
      email: candidateEmail,
    } = await getCandidateById(candidateId);

    const candidateName = `${first} ${last}`;

    if (settings.sendMail) {
      await sendMail(
        `Hi ${firstName},

      Thank you for filling the reference form.
      
      Your response has been sent to the HR team.
      
      Kind regards.`,
        `ACCESS BANK REFERENCE UPDATE`,
        email
      );
      await sendMail(
        `Dear Team,\nThis is to notify you that the referee "${firstName} ${lastName}" has completed their form as personal referee for "${candidateName}".\nKind regards.`,
        `ACCESS BANK REFERENCE UPDATE`,
        HR_EMAIL
      );
      await sendMail(
        `Dear ${candidateName},\nThis is to notify you that your referee "${firstName} ${lastName}" has completed their form as personal referee.\nKind regards.`,
        `ACCESS BANK REFERENCE UPDATE`,
        candidateEmail
      );
    }
    return response(res, 200, foundReferee);
  } catch (error) {
    return response(res, 500, error.message);
  }
};

export const updateWorkRefereeInfo = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const foundReferee = await updateWorkRefereeById(id, data);
    if (!foundReferee) {
      return response(res, 404, 'Error fetching Referee.');
    }
    const {
      firstName: first,
      lastName: last,
      email: candidateEmail,
    } = await getCandidateById(candidateId);

    const { firstName, lastName, email, candidateId } = foundReferee;

    const candidateName = `${first} ${last}`;

    if (settings.sendMail) {
      await sendMail(
        `Hi ${firstName},

      Thank you for filling the reference form.
      
      Your response has been sent to the HR team.
      
      Kind regards.`,
        `ACCESS BANK REFERENCE UPDATE`,
        email
      );
      await sendMail(
        `Dear Team,\nThis is to notify you that the referee "${firstName} ${lastName}" has completed their form as last employer reference for "${candidateName}".\nKind regards.`,
        `ACCESS BANK REFERENCE UPDATE`,
        HR_EMAIL
      );
      await sendMail(
        `Dear ${candidateName},\nThis is to notify you that your referee "${firstName} ${lastName}" has completed their form as your last employer referee.\nKind regards.`,
        `ACCESS BANK REFERENCE UPDATE`,
        candidateEmail
      );
    }

    return response(res, 200, foundReferee);
  } catch (error) {
    return response(res, 500, error.message);
  }
};
