import React,{useState,useEffect} from 'react';
import Box from '@mui/joy/Box';
import {Container,Grid,CssBaseline,TextField,InputLabel,MenuItem,Select,FormControl,Button,Typography} from '@mui/material';
import SideandNavbar from './SideandNavbar';
import { useFormik } from 'formik';
import {MemberValidation} from './Validation.js';
import {FormGroup} from 'react-bootstrap';
import { httpFile,http } from '../../Config/axiosConfig.js';
import Swal from 'sweetalert2';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {useParams,useNavigate} from 'react-router-dom';
import { message } from 'antd';
import Back from '../../assets/bg1.jpg';

function CreateTeam() {
  const ID = useParams().id;
  const [type, setType] = useState("create");
  const [refresh, setRefresh] = useState();
  const [preview,serPreview] = useState('');
  console.log(preview)
  const navigate = useNavigate();
  const formik = useFormik({
    validationSchema:MemberValidation,
    initialValues : {
      first_name:"",
      last_name:"",
      email:"",
      phone:"",
      date_of_joining:"",
      designation:"",
      avatar:""
    },
    onSubmit:(values)=>{
      console.log(values);
        if(type === "create"){
          httpFile.post("/team",values).then((res)=>{
            if(res.status === 201){
              message.config({top:100})
              message.success('Member created successfully Done !');   
            }
            formik.resetForm();
          })
        } else if (type === "Edit"){
          httpFile.put(`/team/${ID}`,values).then((res)=>{
            if(res.status === 200){
              message.config({top:100})
              message.success('Member Updated successfully Done !'); 
            }
            formik.resetForm();
            navigate('/team');
          })
        }
    
    }

  })

  useEffect(() => {
    http.get(`/team/${ID}`)
    .then((res) =>{
     setType("Edit");
     formik.setFieldValue("first_name",res.data.first_name);
     formik.setFieldValue("last_name",res.data.last_name);
     formik.setFieldValue("email",res.data.email);
     formik.setFieldValue("phone",res.data.phone);
     formik.setFieldValue("date_of_joining",res.data.date_of_joining);
     formik.setFieldValue("designation",res.data.designation);
    }).catch((err) => console.log(err.message))
  }, [refresh])

  const { handleChange, values, handleSubmit,setFieldValue, handleBlur, errors, touched } =
formik;

  return (
    <FormGroup onSubmit={handleSubmit} >
    <Box sx={{ display: "flex" ,margin:0}} component="form">
    <CssBaseline />
  <SideandNavbar/>
    <Box
        component="main"
        sx={{
          // backgroundImage : `url(${Back})`,
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
          
        }}
      >
        <Container maxWidth="lg"  sx={{ mt: 10, mb: 4 }}>
          <Grid container sx={{display:'flex',padding:2}}  columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <div style={{width:"100%"}}>
            <h1>{type === "Edit" ? "Update" : "Create"} Team Member</h1>
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
            <Grid>
            <FormControl sx={{ minWidth: 1045 }}>
            <input  
            type='file' 
            accept='image/*'
            onChange={(e)=>{
              let reader = new FileReader();
              reader.onload = () =>{
                if(reader.readyState === 2){
                  setFieldValue("avatar",reader.result); 
                }
              }
              reader.readAsDataURL(e.target.files[0])
            }} 
            name='avatar'
            />
            {errors.avatar && touched.avatar ? (
                <Typography  style={{ color: "red" }}>
                  {errors.avatar}
                </Typography>
              ) : null}
        </FormControl>
            
            </Grid>
            <br/>
        <Button variant='contained' type="submit" color='info'  sx={{ color: '#fff' }} ><AddCircleIcon/> &nbsp; {type === "Edit" ? "Update Member" : "Create Team +"} </Button>

            </div>
          </Grid>
          </Container>
          </Box>
          </Box>
          
          </FormGroup>
  )
}

export default CreateTeam