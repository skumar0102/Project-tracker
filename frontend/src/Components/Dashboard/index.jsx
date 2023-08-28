import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import SideAndNavbar from "./SideandNavbar";
import FAQ from "./FAQ";
import TopValues from "./TopValues";
import EmployeeList from "./EmployeeList";
// import Back from '../../assets/bg1.jpg';
function index() {

  return (
    <div style={{ height:'100vh', width:'100wh'}}>
        <Box sx={{ display: "flex" }}>
        <CssBaseline />
            <SideAndNavbar/>
        <Box
          component="main"
          sx={{
            backgroundColor:'#f6f6f6',
            // backgroundImage : `url(${Back})`,
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="xxl" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8} lg={12} sm={12}>
                {/* <Paper sx={{p:2,display:'flex',flexDirection:'column',height:250}}> */}
                  <TopValues/>
                {/* </Paper> */}
              </Grid>
              
              <Grid item xs={12} md={8} lg={12}>
                {/* <Paper sx={{p:2,display:'flex',flexDirection:'column',height:310}}> */}
                  <EmployeeList/>
                {/* </Paper> */}
              </Grid>
              <Grid item xs={12}>
             {/* hello */}
              </Grid>
            </Grid>
            {/* <Copyright sx={{ pt: 4 }} /> */}
          </Container>
        </Box>
      </Box>
    </div>
  )
}

export default index