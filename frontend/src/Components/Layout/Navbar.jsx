import React, { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import Link from "@mui/material/Link";
import { FormGroup, FormControlLabel } from "@mui/material";
import { styled } from "@mui/material/styles";
import logo from '../../assets/logo.gif';
import {MaterialUISwitch} from '../Style/Style.js';
const drawerWidth = 240;

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        IDS INFOTECH LTD.
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={"About"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={"Contact"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={"SignUp"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={"SingIn"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <div>
        <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{backgroundColor:'#fff'}}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography 
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <img src={logo} alt="" height={50}/>

              {/* IDS INFOTECH LTD. */}
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Button>
                <Link
                  href="/"
                  variant="body2"
                  sx={{ textDecoration: "none", color: "black" }}
                >
Home                </Link>
              </Button>
              <Button>
                <Link
                  href="/"
                  variant="body2"
                  sx={{ textDecoration: "none", color: "black" }}
                >
About Us                </Link>
              </Button>
              <Button>
                <Link
                  href="/"
                  variant="body2"
                  sx={{ textDecoration: "none", color: "black" }}
                >
                 Contact Us
                </Link>
              </Button>
              <Button>
                <Link
                  href="/"
                  variant="body2"
                  sx={{ textDecoration: "none", color: "black" }}
                >
                  SignIn
                </Link>
              </Button>
              <Button>
                <Link
                  href="/"
                  variant="body2"
                  sx={{ textDecoration: "none", color: "black" }}
                >
                  SingUp
                </Link>
              </Button>
            </Box>
            <FormGroup>
              {/* <FormControlLabel
                control={
                  <MaterialUISwitch
                    onClick={handleToggle}
                    sx={{ m: 1 }}
                    defaultChecked
                  />
                }
                label=""
              /> */}
            </FormGroup>
            {/* <Button onClick={handleLang}>Hin</Button> */}
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            // container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Box>
    </div>
  )
}

export default Navbar