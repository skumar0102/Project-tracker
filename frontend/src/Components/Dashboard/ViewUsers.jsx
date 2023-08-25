import React,{useState,useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import {Container,Grid,CssBaseline} from '@mui/material'
import Box from '@mui/material/Box';
import SideandNavbar from './SideandNavbar';
import {StyledTableCell,StyledTableRow} from '../Style/MuiStyle.js'
import { http } from '../../Config/axiosConfig.js';
import SecurityIcon from '@mui/icons-material/Security';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Back from '../../assets/bg1.jpg';

function ViewUsers() {
  const [Users, setUsers] = useState([]);
  const [refresh, setRefresh] = useState();
  const navigator = useNavigate();

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it !'
    }).then((result) => {
      if (result.isConfirmed) {
          http.delete(`/users/${id}`).then((res) => {
                    if (res.status == 200) {
                      Swal.fire({
                        icon: "success",
                        title: "Issue Deleted",
                        timer : 1500
                      });
                      setRefresh(!refresh);
                    }
                  });
      }
    })
  }
  
    useEffect(() => {
      http
        .get('/users/user')
        .then((res) => {
          setUsers(res.data.result);
          // setRefresh(!refresh);
        })
        .catch((err) => {
          console.log(err.messsage);
        });
    }, []);
  return (
<Box sx={{ display: "flex" ,margin:0}}>
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
        <Container maxWidth="xxl" sx={{ mt: 10, mb: 4,ml:0 }}>
          <Grid container     >
          <Grid item xs={12} md={8} lg={12}>
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">First Name</StyledTableCell>
            <StyledTableCell align="center">Last Name</StyledTableCell>
            <StyledTableCell align="center">Email Id</StyledTableCell>
            <StyledTableCell align="center">Verified</StyledTableCell>
            <StyledTableCell align="center">Role</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Users.map((row) => (
            <StyledTableRow key={row}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.first_name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.last_name}</StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="center">{row.isVerified === true ? "Verified" : "Not Verified"}</StyledTableCell>
              <StyledTableCell align="center"><Button variant='contained' color='info'><SecurityIcon/>{row.role}</Button></StyledTableCell>
              <StyledTableCell align="center"><Button variant="outline" 
                    onClick={() => navigator(`/createuser/${row._id}`)}>Edit&nbsp;<EditIcon/></Button>&nbsp;<Button variant="outline"   onClick={() => handleDelete(row._id)}>Delete&nbsp;<DeleteIcon/></Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          </Grid></Grid>
          </Container>
          </Box>
          </Box>
  )
}

export default ViewUsers