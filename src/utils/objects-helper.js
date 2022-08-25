export const updateObjectInArray = (
  items,
  itemId,
  objectPropertyName,
  newObjectProps
) => {
  return items.map((user) => {
    if (user[objectPropertyName] === itemId) {
      return { ...user, ...newObjectProps };
    }
    return user;
  });
};
