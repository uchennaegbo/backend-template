export default validateEmail = (email) => {
  const personalEmails = ['gmail.com', 'yahoo.com', 'outlook.com'];
  let domain = email.split('@').pop().toLocaleLowerCase();
  return personalEmails.includes(domain);
};
