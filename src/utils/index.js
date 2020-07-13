export const getItemById = (objectsArray, id) =>
  objectsArray.filter((item) => item.id === id)[0];
