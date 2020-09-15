import joi from '@hapi/joi';

export const onboardStaffSchema = joi.object({
  firstName: joi.string().min(2).max(35).trim().required(),
  lastName: joi.string().min(2).max(35).trim().required(),
  email: joi.string().email().required(),
  phone: joi.string().length(11).required(),
  level: joi.string().valid('entry', 'experienced').trim().required(),
  // personalRefFirstName: joi.string().min(2).max(35).required(),
  // personalRefLastName: joi.string().min(2).max(35).required(),
  // personalRefEmail: joi.string().email().required(),
  // lastEmployerRefFirstName: joi.string().when('level', {
  //   is: 'experienced',
  //   then: joi.string().min(2).max(35).required(),
  // }),
  // lastEmployerRefLastName: joi.string().when('level', {
  //   is: 'experienced',
  //   then: joi.string().min(2).max(35).required(),
  // }),
  // lastEmployerRefEmail: joi.string().when('level', {
  //   is: 'experienced',
  //   then: joi.string().email().trim().required(),
  // }),
});

export const addReferee = joi.object({
  personalRefFirstName: joi.string().min(2).max(35).required(),
  personalRefLastName: joi.string().min(2).max(35).required(),
  personalRefEmail: joi.string().email().required(),
  lastEmployerRefFirstName: joi.string().when('level', {
    is: 'experienced',
    then: joi.string().min(2).max(35).required(),
  }),
  lastEmployerRefLastName: joi.string().when('level', {
    is: 'experienced',
    then: joi.string().min(2).max(35).required(),
  }),
  lastEmployerRefEmail: joi.string().when('level', {
    is: 'experienced',
    then: joi.string().email().trim().required(),
  }),
});