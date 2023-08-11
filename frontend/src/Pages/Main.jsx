import React, { useState } from 'react';
import * as Components from '../Components/Style/Style.js';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import { Formik } from 'formik';
import { SigninValidation, SignUpValidation } from '../Components/Validation/YupValidation.js';
import { http } from '../Config/axiosConfig.js';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Signup from './Signup.jsx';
import image from '../assets/logo.gif';
// import Footer from '../Footer/Footer.js';
import SignIn from './SignIn.jsx';
import Slider from './Slider.js';
import Navbar from '../Components/Layout/Navbar.jsx';
const init1 = { loginemail: '', loginpassword: '' }
const init2 = { first_name: '', last_name: '', email: '', password: '' }

function Main() {
    const [signIn, toggle] = useState(true);
    const navigator = useNavigate();
  return (
    <div>
        <Components.mydiv>
            <Navbar/>
                <Formik validationSchema={signIn ? SigninValidation : SignUpValidation}
                    initialValues={signIn ? init1 : init2}
                    onSubmit={(values) => {
                        signIn? http.post("/auth", {email: values.loginemail, password: values.loginpassword})
                            .then((res) => {
                                if (res.status === 200) {
                                    localStorage.setItem('token', res.data.token);
                                    localStorage.setItem('email',res.data.result.email);
                                    localStorage.setItem('role',res.data.result.role);
                                    localStorage.setItem('first_name',res.data.result.first_name);
                                    Swal.fire({
                                        toast: true,
                                        position: 'bottom-end',
                                        icon: 'success',
                                        title: 'Signed in successfully',
                                        showConfirmButton: false,
                                        timer: 3000,
                                        // background:'#4aa3d1',
                                        timerProgressBar: true,
                                        didOpen: (toast) => {
                                            toast.addEventListener('mouseenter', Swal.stopTimer)
                                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                                        }
                                    })

                                    navigator("/dashboard");
                                }else if(res.status === 401 || res.status === 400 || res.status === 404){
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Oops...',
                                        text: 'Something went wrong!',
                                        footer: '<a href="">Why do I have this issue?</a>'
                                      })
                                }
                            })
                        : http.post("/users", values)
                            .then((res) => {
                                if (res.status === 201) {
                                    Swal.fire({
                                        toast: true,
                                        position: 'bottom-end',
                                        icon: 'success',
                                        background:'#4aa3d1',
                                        title: 'Registration in successfully Done !',
                                        showConfirmButton: false,
                                        timer: 3000,
                                        timerProgressBar: true,
                                        didOpen: (toast) => {
                                            toast.addEventListener('mouseenter', Swal.stopTimer)
                                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                                        }
                                    })
                                }
                            })
                    }}
                >

                    {({ handleSubmit, handleBlur, handleChange, values, errors, resetForm }) => {
                        return (
                            <>
                                <Components.Container value={signIn} >
                                    <Signup onSubmit={handleSubmit} image={image} signIn={signIn} handleBlur={handleBlur} errors={errors} handleChange={handleChange} values={values} resetForm={resetForm}/>
                                    <SignIn onSubmit={handleSubmit} image={image} signIn={signIn} handleBlur={handleBlur} errors={errors} handleChange={handleChange} values={values} resetForm={resetForm} />
                                    <Slider signIn={signIn} toggle={toggle} />
                                </Components.Container>
                            </>
                        )
                    }}

                </Formik>
            </Components.mydiv> 
    </div>
  )
}

export default Main