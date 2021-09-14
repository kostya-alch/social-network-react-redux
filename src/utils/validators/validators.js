import * as Yup from 'yup';

export const loginFormSchema = Yup.object().shape({
  email: Yup.string()
    //минимальная длина - 2 символа
    .min(2, 'Must be longer than 2 characters')
    //максимальная длина - 20 символов
    .max(20, 'Nice try, nobody has a first name that long')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Must be longer than 8 characters')
    .required('Required'),
});

export const required = (value) => {
  if (value) return undefined;

  return 'Field is required';
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
  return undefined;
};
