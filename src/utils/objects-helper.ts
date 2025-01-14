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

export const addQuery = (chainSign: '?' | "&", query: string, value: any) => {
  if (value) {
    return `${chainSign}${query}=${value}`
  }
  return ''
}
