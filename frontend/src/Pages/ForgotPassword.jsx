import React from 'react';
import Box from "@mui/joy/Box";
import { Container, Grid, CssBaseline,TextField,Button } from "@mui/material";
import SideandNavbar from '../Components/Dashboard/SideandNavbar';
import forgot from '../assets/forgot.jpeg'
function ForgotPassword() {
  return (
    <Box sx={{ display: "flex", margin: 0 }}>
      <CssBaseline />
      <SideandNavbar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Container maxWidth="xxl" sx={{ mt: 10, mb: 4, ml: 0 }}>
          <Grid
            container
            sx={{ display: "flex", justifyContent: "center" }}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Box sx={{ display: "flex",justifyContent:'space-between',backgroundColor:'red',height:'700px',width:'1500px'}}>
              <Grid>
                <Grid>
                <img src={forgot} alt="" style={{height:'700px',width:'750px'}} />
                </Grid>
                </Grid>
              <Grid>
                <Grid>
                  
                </Grid>
                </Grid>
              
              
              </Box>



             </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default ForgotPassword