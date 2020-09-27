export const generateUniqueUrl = (id, refId = '', path = 'candidate') => {
  return `${process.env.FRONTENDURL}/${path}/${id}/${refId}`;
};
