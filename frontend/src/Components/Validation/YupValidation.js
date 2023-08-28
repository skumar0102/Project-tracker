
import * as Yup from 'yup';

export const SigninValidation = Yup.object({

    loginemail:Yup.string().max(100).required('* Please enter your email'),
    loginpassword:Yup.string().max(100).required('* Please enter your password')
    
})


export const SignUpValidation = Yup.object({

    employee_code:Yup.string().max(10).required('* Please enter Employee Code'),
    first_name:Yup.string().max(100).required('* Please enter First Name'),
    last_name:Yup.string().max(100).required('* Please enter Last Name'),
    email:Yup.string().max(100).required('* Please enter your email'),
    // password:Yup.string().max(100).required('* Please enter your password').matches(
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    //   ),
    password:Yup.string().max(100).required('* Please enter your password'),
    role:Yup.string().max(100).required('* Please choose Role'),
    avatar:Yup.string()
    
})