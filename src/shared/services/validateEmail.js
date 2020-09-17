export const validateRefereeEmail = (email) => {
  const personalEmails = ['gmail.com', 'yahoo.com', 'outlook.com'];
  let domain = email.split('@').pop().toLocaleLowerCase();
  return personalEmails.includes(domain);
};

export const validateCandidateEmail = (email) => {
  const personalEmails = ['accessbankplc.com'];
  let domain = email.split('@').pop().toLocaleLowerCase();
  return personalEmails.includes(domain);
};
