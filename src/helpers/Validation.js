import * as Yup from 'yup';

export const registerValidation = () => {
  return Yup.object().shape({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      phone: Yup.number().min(10).typeError('Please enter valid phone number').required('Required'),
      addressLine1: Yup.string().required('Required'),
      addressLine2: Yup.string(),
      country: Yup.string().required('Required'),
      state: Yup.string().required('Required'),
      city: Yup.string().required('Required'),
      arrivalDate: Yup.date().required('Required'),
      departureDate: Yup.date().required('Required'),
      message: Yup.string(),
      termsOfService: Yup.boolean()
          .oneOf([true], 'The terms and conditions must be accepted.')
          .required('The terms and conditions must be accepted.')
    })
};