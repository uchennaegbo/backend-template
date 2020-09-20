import response from '@response';
import { generateUniqueUrl } from '../../utils';
import * as service from './service';
import { validateRefereeEmail } from '../../shared/services/validateEmail';
import sendMail from '../../shared/messaging/sendmail';
import settings from '../../settings.json';
import { getCandidateById } from '../../shared/services/candidateService';

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
