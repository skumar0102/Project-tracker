import React,{useState,useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Container,Grid,CssBaseline, TextField,InputLabel,MenuItem,
  FormControl,Select} from '@mui/material'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SideandNavbar from './SideandNavbar';
import { http } from '../../Config/axiosConfig.js';
import {StyledTableCell,StyledTableRow} from '../Style/MuiStyle.js'
import Swal from 'sweetalert2';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";
import Back from '../../assets/bg1.jpg';

function Tasks() {
    const Role = localStorage.getItem('role');
    const [Tasks, setTasks] = useState([]);
    const [data, setData] = useState([]);
    const [records, setRecords] = useState([]);
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
            http.delete(`/issue/${id}`).then((res) => {
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
      http.get(`/issue/${id}`).then(res => setData(res.data)).then(res=>{
        const linkSource = `${data.project_file}`;
      const downloadLink = document.createElement("a");
      const fileName = "document.pdf";
      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();     
      })
    }

    useEffect(() => {
      if(Role === "User"){
        http.get(`/issue/assignee/${localStorage.getItem('email')}`)
          .then((res) => {
            setTasks(res.data.result);
            setRecords(res.data.result);
          })
          .catch((err) => {
            console.log(err.messsage);
          });
      }else if(Role === "Manager"){
        http.get(`/issue/createdby/${localStorage.getItem('Created_by')}`)
          .then((res) => {
            setTasks(res.data.result);
            setRecords(res.data.result);
            console.log("first",res.data.result);
          })
          .catch((err) => {
            console.log(err.messsage);
          });
      }else if(Role === "Admin"){
        http.get(`/issue`)
          .then((res) => {
            setTasks(res.data.result);
            setRecords(res.data.result);
          })
          .catch((err) => {
            console.log(err.messsage);
          });
      }else if(Role === "Tester"){
        http.get(`/issue`)
          .then((res) => {
            setTasks(res.data.result);
            setRecords(res.data.result);
          })
          .catch((err) => {
            console.log(err.messsage);
          });
      }
        
      }, [refresh]);

      const NameFilter = (event) =>{
        setRecords(Tasks.filter(f => f.assignee.toLowerCase().includes(event.target.value)))
      }

      const StatusFilter = (event) =>{
        setRecords(Tasks.filter(f => f.issue_status.toLowerCase().includes(event.target.value)))
      }
  return (
    <Box sx={{ display: "flex" ,margin:0,width:"100wh"}}>
      
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
          <Grid container>
          <Grid item xs={12} md={8} lg={12}>
            <TextField type='text' label="Search By Name" onChange={NameFilter} placeholder="Search By Name"  />&nbsp;
            <FormControl sx={{ ml: 0, minWidth: 400 }}>
      <InputLabel id="demo-simple-select-autowidth-label" >Filter By Issue Type</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          onChange={StatusFilter}
          autoWidth
          label="Filter By Issue Type"
          
        >
          <MenuItem value=""  style={{minWidth: 400 }}>
            <em>All</em>
          </MenuItem>
          <MenuItem value="to do">Assigne</MenuItem>
          <MenuItem value="in-progress">In-progress</MenuItem>
          <MenuItem value="done">Completed Task</MenuItem>
        </Select>
      
       
        </FormControl>
            <br/><br/>
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Ticket No</StyledTableCell>
            <StyledTableCell align="center">Project Code</StyledTableCell>
            <StyledTableCell align="center">Issue Type</StyledTableCell>
            <StyledTableCell align="center">Summary</StyledTableCell>
            <StyledTableCell align="center">Description</StyledTableCell>
            <StyledTableCell align="center">Assigne</StyledTableCell>
            <StyledTableCell align="center">Starting Date</StyledTableCell>
            <StyledTableCell align="center">Ending Date</StyledTableCell>
            <StyledTableCell align="center">Issue Status</StyledTableCell>
            <StyledTableCell align="center">Update Status</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
            <StyledTableCell align="center">Download File</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {records.map((row,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align="center">{row.ticket_no}</StyledTableCell>
              <StyledTableCell align="center" component="th" scope="row">
                {row.project_code}
              </StyledTableCell>
              <StyledTableCell align="center" aria-disabled>{row.issue_type}</StyledTableCell>
              <StyledTableCell align="center">{row.summary}</StyledTableCell>
              <StyledTableCell align="center">{row.description}</StyledTableCell>
              <StyledTableCell align="center">{row.assignee}</StyledTableCell>
              <StyledTableCell align="center">{row.starting_date}</StyledTableCell>
              <StyledTableCell align="center">{row.ending_date}</StyledTableCell>
              <StyledTableCell align="center"><Button variant="contained"  color={"info"}>{row.issue_status}</Button></StyledTableCell>
              <StyledTableCell align="center">{row.updatedAt}</StyledTableCell>
              
              {Role === "User" || Role === "Tester" ?
              <>
              <StyledTableCell align="center"><Button variant="outline" onClick={() => navigator(`/createissue/${row._id}`)}>Edit&nbsp;<EditIcon/></Button></StyledTableCell>
              
              </>
              :
              <>
              <StyledTableCell align="center"><Button variant="outline" onClick={() => navigator(`/createissue/${row._id}`)}>Edit&nbsp;<EditIcon/></Button>&nbsp;<Button variant="outline"   onClick={() => handleDelete(row._id)}>Delete&nbsp;<DeleteIcon/></Button></StyledTableCell>
              </>
              }
              <StyledTableCell align="center">{row.project_file == "" ? "No File" :<Button onClick={()=> onButtonClick(row._id)}>Download</Button>}</StyledTableCell>

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

export default Tasks