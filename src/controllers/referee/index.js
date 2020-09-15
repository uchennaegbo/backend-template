import response from '@response';
//email service
// db storage

// Handle personal referee form details
export const personalReferee = async (req, res) => {
  try {
    const {
      personalRefEmail,
      lasEmployerRefName,
      lasEmployerRefEmail,
    } = req.body;

    const reqData = { staffId, name, email, level };
    // validate that they are staff before storing them in the database
    // Generate referee links using staffId
    // Store referees details
    // Send mails to all concerned

    return response(res, 200, reqData);
  } catch (error) {
    return response(res, 500, error);
  }
};

// Handle last employer form details
export const lastEmployer = async (req, res) => {
  try {
    const {
      staffId,
      name,
      email,
      level,
      personalRefFullName,
      personalRefEmail,
      lasEmployerRefName,
      lasEmployerRefEmail,
    } = req.body;

    const reqData = { staffId, name, email, level };
    // validate that they are staff before storing them in the database
    // Generate referee links using staffId
    // Store referees details
    // Send mails to all concerned

    return response(res, 200, reqData);
  } catch (error) {
    return response(res, 500, error);
  }
};