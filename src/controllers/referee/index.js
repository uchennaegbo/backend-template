import response from '@response';
import { generateUniqueUrl } from '../../utils';
import * as service from './service';
import { validateRefereeEmail } from '../../shared/services/validateEmail';
import sendMail from '../../shared/messaging/sendmail';
import settings from '../../settings.json';
import {
  getCandidateById,
  getPersonalRefereeCandidateById,
} from '../../shared/services/candidateService';
import { updatePersonalRefereeById } from '../../shared/services/refereeService';

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

    for (const { candidateId, firstName, lastName, email } of onboarded) {
      const { firstName: first, lastName: last } = await getCandidateById(
        candidateId
      );

      const candidateName = `${first} ${last}`;

      // GENERATE UNIQUE URL
      const generatedUrl = generateUniqueUrl(
        candidateId,
        `${firstName}${lastName}`.replace(/\s/g, '').toLocaleLowerCase(),
        'referee'
      );
      // SEND EMAIL
      let emailSent;
      if (settings.sendMail) {
        emailSent = await sendMail(
          `Dear ${firstName}, \n\n${candidateName} has provided you as their personal referee. Kindly click on the link below to fill out the reference form to further complete their application.\n${generatedUrl}\n \n\nKind Regards.`,
          `REFEREES FORM`,
          email
        );
      } else {
        emailSent = await sendMail(
          `Dear ${firstName}, \n\n${candidateName} has provided you as their Last Employer. Kindly click on the link below to fill out the reference form to further complete their application.\n${generatedUrl}\n \n\nKind Regards.`,
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

export const getRefereeByCandidateId = async (req, res) => {
  const { candidateId, id } = req.params;
  console.log(req.params);
  console.log({ candidateId, id });

  try {
    const foundReferee = await getPersonalRefereeCandidateById(candidateId, id);
    if (!foundReferee) {
      return response(res, 404, 'Referee does not exist');
    }
    console.log(foundReferee, " THIS IS THE GOTTEN REFEREE");

    return response(res, 200, foundReferee);
  } catch (error) {
    console.log({error}, "PPPPPPPPPPPPP");
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
    console.log(foundReferee, "Updated Records");

    return response(res, 200, foundReferee);
  } catch (error) {
    return response(res, 500, error.message);
  }
};
