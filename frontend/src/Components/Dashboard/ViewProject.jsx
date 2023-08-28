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
import { http,httpFile } from '../../Config/axiosConfig.js';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import Back from '../../assets/bg1.jpg';

function ViewProject() {
  const [project, setProject] = useState([]);
  const [refresh, setRefresh] = useState();
  const [data, setData] = useState([]);
  console.log(data)
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
          http.delete(`/project/${id}`).then((res) => {
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

  const onButtonClick = (id) => {
    http.get(`/project/${id}`).then(res => setData(res.data)).then(res=>{
      const linkSource = `${data.project_file}`;
    const downloadLink = document.createElement("a");
    const fileName = "document.pdf";
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();     
    })
  }
  useEffect(() => {
    http.get('/project')
      .then((res) => {
        setProject(res.data.result);
        // setRefresh(!refresh);
      })
      .catch((err) => {
        console.log(err.messsage);
      });
  }, [refresh]);
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
            <StyledTableCell align="center" >Project Code</StyledTableCell>
            <StyledTableCell align="center">Project Name</StyledTableCell>
            <StyledTableCell align="center">Project Type</StyledTableCell>
            <StyledTableCell align="center">Description</StyledTableCell>
            <StyledTableCell align="center">Date of Created</StyledTableCell>
            <StyledTableCell align="center">Phone</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
            <StyledTableCell align="center">Download PDF  </StyledTableCell>
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
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="center"><Button variant="outline" 
                    onClick={() => navigator(`/createproject/${row._id}`)}>Edit&nbsp;<EditIcon/></Button>&nbsp;<Button variant="outline"   onClick={() => handleDelete(row._id)}>Delete&nbsp;<DeleteIcon/></Button></StyledTableCell>
              <StyledTableCell align="center">{row.project_file === "" ? "No File" :<Button variant='contained' color='success' onClick={()=> onButtonClick(row._id)}>Download</Button>}</StyledTableCell>
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