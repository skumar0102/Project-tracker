import React,{useState,useEffect} from 'react';
import {
    SignUpContainer,
    Form,
    Title,
    Input,
    Anchor,
    Button,
  } from "../../Components/Style/Style.js";
  import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
  import {Typography,Box,CssBaseline,Container,Grid,TextField} from "@mui/material";
import {FormGroup} from 'react-bootstrap';
  import { SignUpValidation } from '../Validation/YupValidation.js';
  import { useFormik } from 'formik';
import { http,httpFile } from '../../Config/axiosConfig.js';
  import image from '../../assets/logo.gif';
  import { message } from 'antd';
import SideandNavbar from './SideandNavbar';
import {useParams,useNavigate} from 'react-router-dom';
import Back from '../../assets/bg1.jpg';

  function CreateUser() {
    const ID = useParams().id;
    const [type, setType] = useState("create");
    const [refresh, setRefresh] = useState();
    const navigate = useNavigate();

    const formik = useFormik({
        validationSchema:SignUpValidation,
        initialValues : {
            employee_code:'', first_name: '', last_name: '', email: '', password: '', role: '',avatar:''
        },
        onSubmit:(values)=>{
          if(type === "create"){
            httpFile.post("/users",values).then((res)=>{
              if(res.status === 201){
                message.config({top:100})
                message.success('user created successfully Done !');   
              }
              formik.resetForm();
            })
          } 
          else if (type === "Edit"){
            http.put(`/users/${ID}`,values).then((res)=>{
              if(res.status === 200){
                message.config({top:100})
                message.success('Issue Updated successfully Done !'); 
              }
              formik.resetForm();
            navigate('/viewusers');
            })
          }
        }
    
      })

      useEffect(() => {
        http.get(`/users/${ID}`)
        .then((res) =>{
         setType("Edit");
         formik.setFieldValue("employee_code",res.data.employee_code);
         formik.setFieldValue("first_name",res.data.first_name);
         formik.setFieldValue("last_name",res.data.last_name);
         formik.setFieldValue("email",res.data.email);
         formik.setFieldValue("password",res.data.password);
         formik.setFieldValue("role",res.data.role);
        }).catch((err) => console.log(err.message))
    }, [refresh]);
   

    const { handleChange, values, handleSubmit,setFieldValue, handleBlur, errors, touched,resetForm } =
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
          <h1>{type === "Edit" ? "Update" : "Create New "}Account</h1>
            <hr/>
            <Grid >

<TextField style={{width:"91.5%"}} variant='outlined' label='Employee Code *' color='secondary' name="employee_code" value={values.employee_code} onBlur={handleBlur} onChange={handleChange}  />&nbsp;&nbsp;&nbsp;&nbsp;            
{errors.employee_code ? (
            <Typography sx={{ color: "red" }}>
              {errors.employee_code}
            </Typography>
          ) : null}
</Grid><br/>
            <Grid >

<TextField style={{width:"45%"}} variant='outlined' label='First Name *' color='secondary' name="first_name" value={values.first_name} onBlur={handleBlur} onChange={handleChange}  />&nbsp;&nbsp;&nbsp;&nbsp;            
<TextField style={{width:"45%"}} variant='outlined' label='Last Name *' color='secondary' name="last_name" value={values.last_name} onBlur={handleBlur} onChange={handleChange}  />
</Grid>
{errors.first_name ? (
            <Typography sx={{ color: "red" }}>{errors.first_name}</Typography>
          ) : null}
<br/>
            <Grid >

<TextField style={{width:"91.5%"}} variant='outlined' label='Email *' color='secondary' name="email" value={values.email} onBlur={handleBlur} onChange={handleChange}  />&nbsp;&nbsp;&nbsp;&nbsp;            
{errors.email ? (
            <Typography sx={{ color: "red" }}>{errors.email}</Typography>
          ) : null}
</Grid><br/>
            <Grid >

<TextField style={{width:"91.5%"}} type="password" variant='outlined' disabled label='Password *' color='secondary' name="password" value={values.password} onBlur={handleBlur} onChange={handleChange}  />&nbsp;&nbsp;&nbsp;&nbsp;            
{errors.password ? (
            <Typography sx={{ color: "red" }}>{errors.password}</Typography>
          ) : null}
</Grid><br/>
         
         
          <FormControl sx={{ minWidth: "91.5%" }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Role *
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              name="role"
              autoWidth
              label="Status *"
              value={values.role}
              onChange={handleChange}
            >
              <MenuItem style={{ minWidth: 350 }} value="User">
                User
              </MenuItem>
              <MenuItem value="Manager">Manager</MenuItem>
              <MenuItem value="Tester">Tester</MenuItem>
            </Select>
            {errors.role ? (
              <Typography style={{ color: "red" }}>{errors.role}</Typography>
            ) : null}
          </FormControl>
          <br/>
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
          <br />
          <br />
          <Grid>
          <Button type="submit">{type === "Edit" ? "Update" : "Create New Account"}</Button>
          &nbsp;
          &nbsp;
          <Button type="reset" onClick={() => resetForm()}>
            Reset
          </Button>
          </Grid>
          

</div>
</Grid>
        </Container>



        </Box>
          </Box>
        </FormGroup>
         
   

  )
}

export default CreateUser