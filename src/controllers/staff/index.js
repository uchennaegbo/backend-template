import response from '@response';
import * as service from './service';

//email service
// db storage

// Handle staff form details
export const staff = async (req, res) => {
  try {
    console.log(req.body);
    
    const onboarded = await service.onboard(req.body);
    console.log(onboarded);

    // validate that they are staff before storing them in the database
    // Generate referee links using staffId
    // Store referees details
    // Send mails to all concerned

    return response(res, 200, onboarded);
  } catch (error) {
    return response(res, 500, error);
  }
};
