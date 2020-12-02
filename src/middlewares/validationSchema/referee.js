import joi from '@hapi/joi';

export const onboardRefereeSchema = joi.object({
  personals: joi.array().items({
    firstName: joi.string().min(2).max(35).trim().required(),
    lastName: joi.string().min(2).max(35).trim().required(),
    email: joi.string().email().required(),
    candidateId: joi.string().uuid().required(),
    phone: joi.string().min(11).max(14).required(),
    coy: joi.string().min(2).max(35).trim().required(),
  }),
});

export const onboardExpRefereeSchema = joi.object({
  personals: joi.array().items({
    firstName: joi.string().min(2).max(35).trim().required(),
    lastName: joi.string().min(2).max(35).trim().required(),
    email: joi.string().email().required(),
    candidateId: joi.string().uuid().required(),
    phone: joi.string().min(11).max(14).required(),
    coy: joi.string().min(2).max(35).trim().required(),
  }),
  experienced: joi.object({
    firstName: joi.string().min(2).max(35).trim().required(),
    lastName: joi.string().min(2).max(35).trim().required(),
    email: joi.string().email().required(),
    candidateId: joi.string().uuid().required(),
    phone: joi.string().min(11).max(14).required(),
    coy: joi.string().min(2).max(35).trim().required(),
  }),
});

export const lastEmployer = joi.object({
  conduct: joi.string().min(2).max(225).trim().required(),
  date: joi.date().required(),
  dateJoined: joi.date().required(),
  dateLeft: joi.date().required(),
  designation: joi.string().trim().required(),
  finalSalary: joi.string().pattern(/^[0-9]+$/, { name: 'finalSalary' }),
  generalComments: joi.string().min(2).max(225).trim().required(),
  honesty: joi.string().min(2).max(225).trim().required(),
  jobPerformance: joi.string().min(2).max(225).trim().required(),
  lastPositionHeld: joi.string().min(2).max(225).trim().required(),
  otherAllowances: joi
    .string()
    .pattern(/^[0-9]+$/, { name: 'otherAllowances' }),
  otherComments: joi.string().min(2).max(225).trim().required(),
  reEmploy: joi.string().min(2).max(225).trim().required(),
  reasons: joi.string().min(2).max(225).trim().required(),
  recommendations: joi.string().min(2).max(225).trim().required(),
  relWithColleagues: joi.string().min(2).max(225).trim().required(),
  reliability: joi.string().min(2).max(225).trim().required(),
  signature: joi.bool().required(),
});

export const personal = joi.object({
  relationship: joi.string().min(2).max(225).trim().required(),
  howLong: joi.string().min(2).max(225).trim().required(),
  conduct: joi.string().min(2).max(225).trim().required(),
  reliability: joi.string().min(2).max(225).trim().required(),
  leadershipQualities: joi.string().min(2).max(225).trim().required(),
  socialTraits: joi.string().min(2).max(225).trim().required(),
  occupation: joi.string().trim().required(),
  honesty: joi.string().min(2).max(225).trim().required(),
  recommendations: joi.string().min(2).max(225).trim().required(),
  comments: joi.string().min(2).max(225).trim().required(),
  signature: joi.bool().required(),
  date: joi.date().required(),
});
