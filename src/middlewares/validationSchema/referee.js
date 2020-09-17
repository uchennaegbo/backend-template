import joi from '@hapi/joi';

export const addReferee = joi.object({
  personalRefFirstName: joi.string().min(2).max(55).required(),
  personalRefLastName: joi.string().min(2).max(55).required(),
  personalRefEmail: joi.string().email().required(),
  lastEmployerRefFirstName: joi.string().min(2).max(55).required(),
  lastEmployerRefLastName: joi.string().min(2).max(55).required(),
  lastEmployerRefEmail: joi.string().email().trim().required(),
});
