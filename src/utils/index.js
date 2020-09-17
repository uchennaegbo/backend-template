export const generateUniqueUrl = (id, name, path = 'candidate', ) => {
  return `${process.env.FRONTENDURL}/${path}/${id}/${name}`;
};
