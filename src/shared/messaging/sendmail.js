import $http from '../services/http';


const sendMail = async (body, subject, email) => {
  const payload = {
    To: email,
    from: process.env.MAIL_SERVICE_SENDER,
    mail_subject: subject,
    Cc: '',
    Bcc: '',
    mail_message: body,
    attachement: '',
    isBodyHtml: true,
  };
  try {
    const sent = await $http.post(process.env.ESB_EMAIL_ENDPOINT1, payload, {});
    console.log('Email sent.', sent.data, payload.to);
  } catch (err) {
    console.log(err);
    console.log(`Email notification failed for ${email}; ${err.message}`);
  }
};

export default sendMail;
