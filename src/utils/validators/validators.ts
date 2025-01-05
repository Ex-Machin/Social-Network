export type FieldValidatorType = (value:string) => string | undefined  

export const required: FieldValidatorType = (value) => {
  if (!!value) {
    return undefined;
  }

  return "Field is required";
};

export const maxLengthCreator = (maxLenght: number): FieldValidatorType => (value) => {
  return  value.length > maxLenght ? `Max length is ${maxLenght} symbols` : undefined
};
