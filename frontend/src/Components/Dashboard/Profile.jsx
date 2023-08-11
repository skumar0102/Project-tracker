import React from 'react';
import {Card,CardHeader,CardContent,CardActions,Avatar,IconButton,Typography,Button} from '@mui/material';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SideandNavbar from './SideandNavbar';
import {Container,Box,Grid,CssBaseline} from '@mui/material'
function Profile() {
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
          <Container maxWidth="lg" sx={{ mt: 10, mb: 4,ml:0 }}>
            <Grid container     >
            <Grid item xs={12} md={8} lg={12}>
       
  <div style={{display:'flex'}}>
      {/* Basic info section */}
      <div >
      <Button sx={{padding:0,margin:0}}>
      <Card sx={{ minWidth: 600,maxWidth:500,margin:'20px',height:'600px' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {localStorage.getItem('first_name').toUpperCase().charAt(0)} 
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={localStorage.getItem('first_name').toUpperCase()} 

        subheader="September 14, 2016"
      />
      
      <CardContent>
        <Typography sx={{fontSize:'25px'}} variant="body2" color="text.secondary">
          Basic Info
        </Typography>
      </CardContent>
    </Card> </Button>

    </div>

      {/* Contact info section */}
    <div >
      <Button sx={{padding:0,margin:0}}>
    <Card sx={{ minWidth: 600,maxWidth:500,margin:'20px',height:'600px' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {localStorage.getItem('first_name').toUpperCase().charAt(0)} 
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={localStorage.getItem('first_name').toUpperCase()} 

        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography sx={{fontSize:'25px'}} variant="body2" color="text.secondary">
          Contact Info
        </Typography>
      </CardContent>
    </Card></Button>
    </div>
    </div>

   
        </Grid>
        </Grid>
          </Container>
          </Box>
          </Box>
   
  )
}

export default Profile