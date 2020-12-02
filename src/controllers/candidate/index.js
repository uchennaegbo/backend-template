import response from '@response';
import { generateUniqueUrl } from '../../utils';
import * as service from './service';
import sendMail from '../../shared/messaging/sendmail';
import {
  getAllRefereesByCandidateEmail,
  getCandidateByEmail,
  getCandidateById,
} from '../../shared/services/candidateService';
import settings from '../../settings.json';
const { HR_EMAIL } = process.env;

// Handle candidate form details
export const registerCandidate = async (req, res) => {
  try {
    const onboarded = await service.onboard(req.body);

    const { id, firstName, lastName, email, level } = onboarded;
    // TODO: GENERATE UNIQUE URL
    const generatedUrl = generateUniqueUrl(id);
    // SEND EMAIL
    if (settings.sendMail) {
      if (level !== 'entry') {
        await sendMail(
          `Dear ${firstName} ${lastName},\nKindly click on the link below to fill in details of your referees.\n${generatedUrl}\nPlease note the first two referees to be provided are your personal references and the last referee to be provided must be your last employer.\nKind regards.`,
          `ACCESS BANK REFEREES UPDATE`,
          email
        );
      } else {
        await sendMail(
          `Dear ${firstName} ${lastName},\nKindly click on the link below to fill in details of your referees.\n${generatedUrl}\nKind regards.`,
          `ACCESS BANK REFEREES UPDATE`,
          email
        );
      }

      await sendMail(
        `Dear Team,\n This is to notify you that the candidate "${firstName} ${lastName}" has been created successfully and the reference form link has been sent to the candidate.\n
        Kind regards.`,
        `REFERENCE AUTOMATION UPDATE`,
        HR_EMAIL
      );
    }
    // RETURN RESPONSE
    return response(res, 200, onboarded);
  } catch (error) {
    console.log(error);
    return response(res, 500, error.message);
  }
};

export const getCandidate = async (req, res) => {
  const { id } = req.params;

  try {
    const foundCandidate = await getCandidateById(id);
    if (!foundCandidate) {
      return response(res, 404, 'User does not exist');
    }

    return response(res, 200, foundCandidate);
  } catch (error) {
    return response(res, 500, error.message);
  }
};

export const getCandidateEmail = async (req, res) => {
  const { email } = req.body;

  try {
    const foundCandidate = await getCandidateByEmail(email);
    if (!foundCandidate) {
      return response(res, 404, 'User does not exist');
    }

    return response(res, 200, foundCandidate);
  } catch (error) {
    return response(res, 500, error.message);
  }
};

export const getAllRefereesByCanEmail = async (req, res) => {
  const { email } = req.body;

  try {
    const foundReferees = await getAllRefereesByCandidateEmail(email);
    console.log(foundReferees);
    if (foundReferees.length === 0) {
      return response(res, 404, 'Record does not exist');
    }

    return response(res, 200, foundReferees);
  } catch (error) {
    return response(res, 500, error.message);
  }
};
