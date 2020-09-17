import response from '@response';
import { generateUniqueUrl } from '../../utils';
import * as service from './service';
import { validateRefereeEmail } from '../../shared/services/validateEmail';
import sendMail from '../../shared/messaging/sendmail';


// Handle Referee form details
export const registerReferee = async (req, res) => {
  try {
    if (validateRefereeEmail(req.body.email)) {
      return response(res, 401, 'Value must be a valid Work  email.');
    }

    const onboarded = await service.onboard(req.body);

    const { id, name, email, candidateName } = onboarded;
    // TODO: GENERATE UNIQUE URL
    const generatedUrl = generateUniqueUrl(
      id,
      name.replace(/\s/g, '').toLocaleLowerCase()
    );
    // SEND EMAIL
    const emailSent = await sendMail(
      `Dear ${name}, ${candidateName} has provided you as their referee. Kindly click on the link below to fill out the reference form to further complete their application.\n ${generatedUrl}`,
      `REFEREES FORM`,
      email
    );
    // RETURN RESPOSE
    console.log(onboarded, emailSent);

    return response(res, 200, onboarded);
  } catch (error) {
    return response(res, 500, error.message);
  }
};
