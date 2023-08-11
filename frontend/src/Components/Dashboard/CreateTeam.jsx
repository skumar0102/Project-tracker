import React,{useState} from 'react';
import Box from '@mui/joy/Box';
import {Container,Grid,CssBaseline,TextField,InputLabel,MenuItem,Select,FormControl,Button,Typography} from '@mui/material';
import SideandNavbar from './SideandNavbar';
import { useFormik } from 'formik';
import {MemberValidation} from './Validation.js';
import {FormGroup} from 'react-bootstrap';
import { http } from '../../Config/axiosConfig.js';
import Swal from 'sweetalert2';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function CreateTeam() {

  const formik = useFormik({
    validationSchema:MemberValidation,
    initialValues : {
      first_name:"",
      last_name:"",
      email:"",
      phone:"",
      date_of_joining:"",
      designation:""
    },
    onSubmit:(values)=>{
      http.post("/team",values).then((res)=>{
        if(res.status === 201){
          Swal.fire({
            toast: true,
            position: 'bottom-end',
            icon: 'success',
            background:'#4aa3d1',
            title: 'Member created successfully Done !',
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
    }

  })

  const { handleChange, values, handleSubmit, handleBlur, errors, touched } =
formik;

  return (
    <FormGroup onSubmit={handleSubmit} >
    <Box sx={{ display: "flex" ,margin:0}} component="form">
    <CssBaseline />
  <SideandNavbar/>
    <Box
        component="main"
        sx={{
          
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
          
        }}
      >
        <Container maxWidth="lg"  sx={{ mt: 10, mb: 4,ml:0 }}>
          <Grid container sx={{display:'flex',padding:2}}  columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <div style={{width:"100%"}}>
            <h1>Create Team Member</h1>
            <hr/>
            <Grid >

            <TextField style={{width:"45%"}} variant='outlined' label='First Name *' color='secondary' name="first_name" value={values.first_name} onBlur={handleBlur} onChange={handleChange}  />&nbsp;&nbsp;&nbsp;&nbsp;            
            <TextField style={{width:"45%"}} variant='outlined' label='Last Name' color='secondary' name="last_name" value={values.last_name} onBlur={handleBlur} onChange={handleChange}  />
            </Grid>
            {errors.first_name && touched.first_name ? (
                <Typography  style={{ color: "red" }}>
                  {errors.first_name}
                </Typography>
              ) : null}
            <br/>
            <Grid >
            <TextField style={{width:"91.5%"}} variant='outlined' label='Email Id *' color='secondary' name='email' value={values.email} onBlur={handleBlur} onChange={handleChange}  />
            {errors.email && touched.email ? (
                <Typography  style={{ color: "red" }}>
                  {errors.email}
                </Typography>
              ) : null}
            </Grid>
            <br/>
            <Grid >
            <TextField style={{width:"91.5%"}} variant='outlined' label='Phone  Number *' color='secondary' name='phone' value={values.phone} onBlur={handleBlur} onChange={handleChange}  />
            {errors.phone && touched.phone ? (
                <Typography  style={{ color: "red" }}>
                  {errors.phone}
                </Typography>
              ) : null}
            </Grid>
            <br/>
            <Grid >
        <InputLabel id="demo-simple-select-autowidth-label" >Date of joining *</InputLabel>
            <TextField style={{width:"91.5%"}} type='date' variant='outlined'  color='secondary' name='date_of_joining' value={values.date_of_joining} onBlur={handleBlur} onChange={handleChange}  />
            {errors.date_of_joining && touched.date_of_joining ? (
                <Typography  style={{ color: "red" }}>
                  {errors.date_of_joining}
                </Typography>
              ) : null}
            </Grid>
            <br/>
            <Grid>
        <FormControl sx={{ minWidth: 1045 }}>
            <InputLabel id="demo-simple-select-autowidth-label" >Designation *</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          name='designation'
          autoWidth  
          label='Designation *'
          value={values.designation} onBlur={handleBlur} onChange={handleChange}  
        >
      <MenuItem style={{minWidth: 400 }}>
            <em>None</em>
          </MenuItem>
          <MenuItem sx={{ minWidth: 1045 }} value="SOFTWARE ENGINEER">SOFTWARE ENGINEER</MenuItem>
          <MenuItem value="BACKEND DEVELOPER">BACKEND DEVELOPER</MenuItem>
          <MenuItem value="FRONTEND DEVELOPER">FRONTEND DEVELOPER</MenuItem>
          <MenuItem value="TESTER">TESTER</MenuItem>
        </Select>
        {errors.designation && touched.designation ? (
                <Typography  style={{ color: "red" }}>
                  {errors.designation}
                </Typography>
              ) : null}
        </FormControl>
            </Grid>
            <br/>
            {/* <Grid>
            <input style={{width:"91.5%"}} type='file' label='Upload Image' variant='outlined' color='secondary' name='file' value='' onBlur={handleBlur} onChange={handleChange}  />
            </Grid>
            <br/> */}
        <Button variant='contained' type="submit" color='info'  sx={{ color: '#fff' }} ><AddCircleIcon/> &nbsp; Create Member </Button>

            </div>
          </Grid>
          </Container>
          </Box>
          </Box>
          </FormGroup>
  )
}

export default CreateTeam