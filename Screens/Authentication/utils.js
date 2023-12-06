import * as yup from "yup";

const signupOptions =['Student', 'Alumini', 'Faculty', 'Not a Part of GEC BSP']
const bloodGroup = ['A+','B+', 'AB+', 'O+', 'A-', 'B-', 'AB-', 'O-']

export const loginInitialValue = {
    username: '',
    password: ''
}

export const loginValidationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required')
})

export const SignUpInitialValue = {
    username: '',
    contactno: '',
    emailadress: '',
    createpassword: '',
    confirmpassword: '',
    bloodGroup: '',
    role:''
}

export const SignUpValidationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    contactno: yup
    .string()
    .min(
        10, 
        ({ min }) =>
         `${'Mobile number must be'} ${min} ${'character'}`,)
         .required('Mobile Number is required')
         .matches(/^[6789]\d{9}$/,'Mobile number should start from 6,7,8 or 9'),
    emailadress: yup
    .string()
    .email('Invalid email adress')
    .required('Email is required')
    .matches(/@gmail\.com$/,'Email must end with @gmail.com'),

    createpassword: yup.
    string().
    required('Password is required'),

    confirmpassword: yup.
    string().
    required('Password Confirmation is required')
    .min(8,'Password must be atleast of 8 characters')
    .oneOf([yup.ref('password'), null], 'Password must match'),

    bloodGroup: yup
    .string()
    .oneOf(bloodGroup,'Invalid blood Group')
    .required('Blood Group is required'),

    role: yup
    .string()
    .oneOf(signupOptions, 'Invalid Role')
    .required('Role is required')



})
