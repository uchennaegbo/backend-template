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

    for (const { candidateId, firstName, id, email } of onboarded) {
      const { firstName: first, lastName: last } = await getCandidateById(
        candidateId
      );

      const candidateName = `${first} ${last}`;

      // GENERATE UNIQUE URL
      const generatedUrl = generateUniqueUrl(candidateId, id, 'referee');

      // SEND EMAIL
      if (settings.sendMail) {
        const emailSent = await sendMail(
          `Dear ${firstName}, \n\n${candidateName} has provided you as their personal referee. Kindly click on the link below to fill out the reference form to further complete their application.\n${generatedUrl}\n \n\nKind Regards.`,
          `REFEREES FORM`,
          email
        );
      }
    }
    // RETURN RESPOSE
    console.log(onboarded);

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
      const { candidateId, firstName, id, email } = onboarded[prop];

      const { firstName: first, lastName: last } = await getCandidateById(
        candidateId
      );

      const candidateName = `${first} ${last}`;

      // GENERATE UNIQUE URL
      const generatedUrl = generateUniqueUrl(candidateId, id, 'referee');
      // SEND EMAIL
      let emailSent;
      if (settings.sendMail && prop > onboarded.length - 2) {
        emailSent = await sendMail(
          `Dear ${firstName}, \n\n${candidateName} has provided you as their Last Employer. Kindly click on the link below to fill out the reference form to further complete their application.\n${generatedUrl}\n \n\nKind Regards.`,
          `REFEREES FORM`,
          email
        );
      } else {
        emailSent = await sendMail(
          `Dear ${firstName}, \n\n${candidateName} has provided you as their Personal Referee. Kindly click on the link below to fill out the reference form to further complete their application.\n${generatedUrl}\n \n\nKind Regards.`,
          `REFEREES FORM`,
          email
        );
      }
    }
    // RETURN RESPOSE
    // console.log(onboarded);

    return response(res, 200, onboarded);
  } catch (error) {
    console.log(error);
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

    return response(res, 200, foundReferee);
  } catch (error) {
    return response(res, 500, error.message);
  }
};
