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
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';


function ViewUsers() {
  const [Users, setUsers] = useState([]);
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