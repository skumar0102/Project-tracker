import React,{useState,useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Container,Grid,CssBaseline, TextField} from '@mui/material'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SideandNavbar from './SideandNavbar';
import { http } from '../../Config/axiosConfig.js';
import {StyledTableCell,StyledTableRow} from '../Style/MuiStyle.js'

function ViewCompletedTasks() {
    const [Tasks, setTasks] = useState([]);
    useEffect(() => {
        http.get(`/issue/completed`)
          .then((res) => {
            setTasks(res.data.result);
          })
          .catch((err) => {
            console.log(err.messsage);
          });
      }, []);
  return (
    <Box sx={{ display: "flex" ,margin:0,width:"100wh"}}>
      
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
          <Grid container>
          <Grid item xs={12} md={8} lg={12}>
            <TextField type='search' label="Search..."  />&nbsp;&nbsp;<Button variant='contained' color='secondary'>Search</Button>
            <br/><br/>
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Project Code</StyledTableCell>
            <StyledTableCell align="center">Issue Type</StyledTableCell>
            <StyledTableCell align="center">Summary</StyledTableCell>
            <StyledTableCell align="center">Description</StyledTableCell>
            <StyledTableCell align="center">Assigne</StyledTableCell>
            <StyledTableCell align="center">Starting Date</StyledTableCell>
            <StyledTableCell align="center">Ending Date</StyledTableCell>
            <StyledTableCell align="center">Issue Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Tasks.map((row,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.project_code}
              </StyledTableCell>
              <StyledTableCell align="center">{row.issue_type}</StyledTableCell>
              <StyledTableCell align="center">{row.summary}</StyledTableCell>
              <StyledTableCell align="center">{row.description}</StyledTableCell>
              <StyledTableCell align="center">{row.assignee}</StyledTableCell>
              <StyledTableCell align="center">{row.starting_date}</StyledTableCell>
              <StyledTableCell align="center">{row.ending_date}</StyledTableCell>
              <StyledTableCell align="center"><Button variant="contained"  color={row.issue_status === "Done" ? "success" : "info"}>{row.issue_status}</Button></StyledTableCell>
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

export default ViewCompletedTasks