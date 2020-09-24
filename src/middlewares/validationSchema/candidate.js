import joi from '@hapi/joi';

export const onboardCandidateSchema = joi.object({
  firstName: joi.string().min(2).max(35).trim().required(),
  lastName: joi.string().min(2).max(35).trim().required(),
  email: joi.string().email().required(),
  phone: joi.string().min(11).max(14).required(),
  level: joi.string().valid('entry', 'experienced').trim().required(),
});


