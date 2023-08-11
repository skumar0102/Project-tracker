import React from 'react';
import Box from '@mui/joy/Box';
import {Container,Grid,CssBaseline,TextField,InputLabel,MenuItem,Select,FormControl,Button,Typography} from '@mui/material';
import SideandNavbar from './SideandNavbar';
import { useFormik } from 'formik';
import {ProjectValidation} from './Validation.js';
import {FormGroup} from 'react-bootstrap';
import { http } from '../../Config/axiosConfig.js';
import Swal from 'sweetalert2';
function CreateProject() {
    const formik = useFormik({
        validationSchema:ProjectValidation,
        initialValues : {
          project_name:"",
          project_code:"",
          description:"",
          phone:"",
          date_of_creation:"",
          project_type:""
        },
        onSubmit:(values)=>{
          http.post("/project",values).then((res)=>{
            if(res.status === 201){
              Swal.fire({
                toast: true,
                position: 'bottom-end',
                icon: 'success',
                background:'#4aa3d1',
                title: 'Project created successfully Done !',
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
            <h1>Create New Project</h1>
            <hr/>
            <Grid >

            <TextField style={{width:"45%"}} variant='outlined' label='Project Name *' color='secondary' name="project_name" value={values.project_name} onBlur={handleBlur} onChange={handleChange}  />&nbsp;&nbsp;&nbsp;&nbsp;            
            <TextField style={{width:"45%"}} variant='outlined' label='Project Code *' color='secondary' name="project_code" value={values.project_code} onBlur={handleBlur} onChange={handleChange}  />
            </Grid>
            {errors.project_name && touched.project_name ? (
                <Typography  style={{ color: "red" }}>
                  {errors.project_name}
                </Typography>
              ) : null}
            {errors.project_code && touched.project_code ? (
                <Typography  style={{ color: "red" }}>
                  {errors.project_code}
                </Typography>
              ) : null}
            <br/>
            <Grid >
            <TextField style={{width:"91.5%"}} variant='outlined' label='Description *' color='secondary' name="description" multiline rows={4} value={values.description} onBlur={handleBlur} onChange={handleChange}  />
            {errors.description && touched.description ? (
                <Typography  style={{ color: "red" }}>
                  {errors.description}
                </Typography>
              ) : null}
            </Grid>
            <br/>
            <Grid >
            <TextField style={{width:"91.5%"}} variant='outlined' label='Phone  Number *' color='secondary' name="phone" value={values.phone} onBlur={handleBlur} onChange={handleChange}  />
            {errors.phone && touched.phone ? (
                <Typography  style={{ color: "red" }}>
                  {errors.phone}
                </Typography>
              ) : null}
            </Grid>
            <br/>
            <Grid >
        <InputLabel id="demo-simple-select-autowidth-label" >Date of Creation *</InputLabel>
            <TextField style={{width:"91.5%"}} type='date' variant='outlined'  color='secondary' name="date_of_creation" value={values.date_of_creation} onBlur={handleBlur} onChange={handleChange}  />
            {errors.date_of_creation && touched.date_of_creation ? (
                <Typography  style={{ color: "red" }}>
                  {errors.date_of_creation}
                </Typography>
              ) : null}
            </Grid>
            <br/>
            <Grid>
        <FormControl sx={{ minWidth: 1045 }}>
            <InputLabel id="demo-simple-select-autowidth-label" >Project Type *</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          name="project_type"
          autoWidth  
          label='Project_type *'
          value={values.project_type} onBlur={handleBlur} onChange={handleChange}  
        >
      <MenuItem style={{minWidth: 400 }}>
            <em>None</em>
          </MenuItem>
          <MenuItem sx={{ minWidth: 1045 }} value="WEBSITE">WEBSITE</MenuItem>
          <MenuItem value="SOFTWARE">SOFTWARE</MenuItem>
          <MenuItem value="ANDROID APP">ANDROID APP</MenuItem>
        </Select>
        {errors.project_type && touched.project_type ? (
                <Typography  style={{ color: "red" }}>
                  {errors.project_type}
                </Typography>
              ) : null}
        </FormControl>
            </Grid>
            <br/>
        <Button variant='contained' type="submit" color='info'  sx={{ color: '#fff',ml:1 }} >Create Project +</Button>

            </div>
          </Grid>
          </Container>
          </Box>
          </Box>
          </FormGroup>
  )
}

export default CreateProject