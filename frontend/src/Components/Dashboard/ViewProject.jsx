import React,{useEffect,useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Container,Grid,CssBaseline} from '@mui/material'
import Box from '@mui/material/Box';
import SideandNavbar from './SideandNavbar';
import {StyledTableCell,StyledTableRow} from '../Style/MuiStyle.js'
import { http } from '../../Config/axiosConfig.js';

function ViewProject() {
  const [project, setProject] = useState([]);
  console.log(project)
  useEffect(() => {
    http.get('/project')
      .then((res) => {
        setProject(res.data.result);
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
            <StyledTableCell align="center" >Project Code</StyledTableCell>
            <StyledTableCell align="center">Project Name</StyledTableCell>
            <StyledTableCell align="center">Project Type</StyledTableCell>
            <StyledTableCell align="center">Description</StyledTableCell>
            <StyledTableCell align="center">Date of Created</StyledTableCell>
            <StyledTableCell align="center">Phone</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {project.map((row,key) => (
            <StyledTableRow key={key}>
              <StyledTableCell component="th" scope="row" align="center" >
                {row.project_code}
              </StyledTableCell>
              <StyledTableCell align="center">{row.project_name}</StyledTableCell>
              <StyledTableCell align="center">{row.project_type}</StyledTableCell>
              <StyledTableCell align="center">{row.description}</StyledTableCell>
              <StyledTableCell align="center">{row.date_of_creation}</StyledTableCell>
              <StyledTableCell align="center">+91-{row.phone}</StyledTableCell>
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

export default ViewProject