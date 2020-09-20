import joi from '@hapi/joi';

export const onboardRefereeSchema = joi.object({
  personals: joi.array().items({
    firstName: joi.string().min(2).max(35).trim().required(),
    lastName: joi.string().min(2).max(35).trim().required(),
    email: joi.string().email().required(),
    candidateId: joi.string().uuid().required(),
  }),
});

export const onboardExpRefereeSchema = joi.object({
  personals: joi.array().items({
    firstName: joi.string().min(2).max(35).trim().required(),
    lastName: joi.string().min(2).max(35).trim().required(),
    email: joi.string().email().required(),
    candidateId: joi.string().uuid().required(),
  }),
  experienced: joi.object({
    firstName: joi.string().min(2).max(35).trim().required(),
    lastName: joi.string().min(2).max(35).trim().required(),
    email: joi.string().email().required(),
    candidateId: joi.string().uuid().required(),
  }),
});
