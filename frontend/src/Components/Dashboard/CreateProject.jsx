import React,{useState,useEffect} from 'react';
import Box from '@mui/joy/Box';
import {Container,Grid,CssBaseline,TextField,InputLabel,MenuItem,Select,FormControl,Button,Typography} from '@mui/material';
import SideandNavbar from './SideandNavbar';
import { useFormik } from 'formik';
import {ProjectValidation} from './Validation.js';
import {FormGroup} from 'react-bootstrap';
import { http } from '../../Config/axiosConfig.js';
import Swal from 'sweetalert2';
import { message } from 'antd';
import {useParams,useNavigate} from 'react-router-dom';
import Back from '../../assets/bg1.jpg';

function CreateProject() {
  const ID = useParams().id;
  const [type, setType] = useState("create");
  const [refresh, setRefresh] = useState()
  const navigate = useNavigate();
    const formik = useFormik({
        validationSchema:ProjectValidation,
        initialValues : {
          project_name:"",
          description:"",
          email:"",
          date_of_creation:"",
          project_type:""
        },
        onSubmit:(values)=>{
          if(type === "create"){
            http.post("/project",values).then((res)=>{
              if(res.status === 201){
                message.config({top:100})
                message.success('Project created successfully Done !');   
              }
              formik.resetForm();
            })
          } else if (type === "Edit"){
            http.put(`/project/${ID}`,values).then((res)=>{
              if(res.status === 200){
                message.config({top:100})
                message.success('Issue Updated successfully Done !'); 
              }
              formik.resetForm();
            navigate('/viewproject');
            })
          }
        }
    
      })
      
      useEffect(() => {
        http.get(`/project/${ID}`)
        .then((res) =>{
         setType("Edit");
         formik.setFieldValue("project_name",res.data.project_name);
         formik.setFieldValue("description",res.data.description);
         formik.setFieldValue("summary",res.data.summary);
         formik.setFieldValue("email",res.data.email);
         formik.setFieldValue("date_of_creation",res.data.date_of_creation);
         formik.setFieldValue("project_type",res.data.project_type);
        }).catch((err) => console.log(err.message))
      }, [refresh])
      
    
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
          backgroundImage : `url(${Back})`,
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
          
        }}
      >
        <Container maxWidth="lg"  sx={{ mt: 10, mb: 4 }}>
          <Grid container sx={{display:'flex',padding:2}}  columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <div style={{width:"100%"}}>
            <h1>{type === "Edit" ? "Update" : "Create New"} Project</h1>
            <hr/>
            

            <TextField style={{width:"91.5%"}} variant='outlined' label='Project Name *' color='secondary' name="project_name" value={values.project_name} onBlur={handleBlur} onChange={handleChange}  />&nbsp;&nbsp;&nbsp;&nbsp;            
           <br/>
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
            <TextField style={{width:"91.5%"}} variant='outlined' label='Email Id *' color='secondary' name="email" value={values.email} onBlur={handleBlur} onChange={handleChange}  />
            {errors.email && touched.email ? (
                <Typography  style={{ color: "red" }}>
                  {errors.email}
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
        <Button variant='contained' type="submit" color='info'  sx={{ color: '#fff' }} >{type === "Edit" ? "Update Project" : "Create Project +"}</Button>

            </div>
          </Grid>
          </Container>
          </Box>
          </Box>
          </FormGroup>
  )
}

export default CreateProject