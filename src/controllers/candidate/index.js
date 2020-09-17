import response from '@response';
import { generateUniqueUrl } from '../../utils';
import * as service from './service';
import { validateCandidateEmail } from '../../shared/services/validateEmail';
import sendMail from '../../shared/messaging/sendmail';


// Handle candidate form details
export const registerCandidate = async (req, res) => {
  try {
    if (!validateCandidateEmail(req.body.email)) {
      return response(res, 401, 'Value must be a valid Access Bank email.');
    }

    const onboarded = await service.onboard(req.body);

    const { id, name, email } = onboarded;
    // TODO: GENERATE UNIQUE URL
    const generatedUrl = generateUniqueUrl(
      id,
      name.replace(/\s/g, '').toLocaleLowerCase()
    );
    // SEND EMAIL
    const emailSent = await sendMail(
      `Dear ${name}, Kindly click on the link below to provide two references to further complete your application.\n ${generatedUrl}`,
      `REFEREES UPDATE`,
      email
    );
    // RETURN RESPOSE
    console.log(onboarded, emailSent);

    return response(res, 200, onboarded);
  } catch (error) {
    return response(res, 500, error.message);
  }
};
