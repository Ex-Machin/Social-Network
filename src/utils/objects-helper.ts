export const updateObjectInArray = (
  items: any,
  itemId: any,
  objectPropertyName: any,
  newObjectProps: any
) => {
  return items.map((user: any) => {
    if (user[objectPropertyName] === itemId) {
      return { ...user, ...newObjectProps };
    }
    return user;
  });
};
