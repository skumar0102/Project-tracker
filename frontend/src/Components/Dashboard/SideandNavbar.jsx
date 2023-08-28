import React, { useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import logo from "../../assets/logo.gif";
import { http } from "../../Config/axiosConfig.js";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import BadgeIcon from '@mui/icons-material/Badge';
import BugReportIcon from '@mui/icons-material/BugReport';
import {
  HomeOutlined,
  ReceiptOutlined,
  HelpOutlineOutlined,
  CreateOutlined,
  LogoutOutlined,
  AccountBoxOutlined,
  TaskAltOutlined
} from "@mui/icons-material";
import { Grid } from "@mui/material";
import PendingIcon from "@mui/icons-material/Pending";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Linkstyle } from "../Style/MuiStyle.js";
import Diversity2Icon from '@mui/icons-material/Diversity2';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded';
import LockResetRoundedIcon from '@mui/icons-material/LockResetRounded';
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function SideandNavbar() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [menu, setMenu] = useState([]);
  const [refresh, setrefresh] = useState();
  const Role = localStorage.getItem("role");
  const navigate = useNavigate();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(true);
  };

  const icons = {
    User: [
      <HomeOutlined />,
      <ReceiptOutlined />,
      <AccountBoxOutlined />,
      <Diversity2Icon />,
      <BugReportIcon />,
      <LockResetRoundedIcon />,
      <HelpOutlineOutlined />,
      <LogoutOutlined />,
    ],
    Manager: [
      <HomeOutlined />,
      <ReceiptOutlined />,
      <AccountBoxOutlined />,
      <CreateOutlined />,
      <CreateOutlined />,
      <CreateOutlined />,
      <BugReportIcon />,
      <AccountTreeRoundedIcon />,
      <Diversity2Icon />,
      <LockResetRoundedIcon />,
      <HelpOutlineOutlined />,
      <LogoutOutlined />,
    ],
    Admin: [
      <HomeOutlined />,
      <ReceiptOutlined />,
      <AccountBoxOutlined />,
      <CreateOutlined />,
      <CreateOutlined />,
      <CreateOutlined />,
      <CreateOutlined />,
      <BadgeIcon />,
      <BugReportIcon />,
      <Diversity2Icon />,
      <AccountTreeRoundedIcon />,
      <SecurityRoundedIcon />,
      <LockResetRoundedIcon />,
      <HelpOutlineOutlined />,
      <LogoutOutlined />,
    ],
    Tester:[
      <HomeOutlined />,
      <ReceiptOutlined />,
      <AccountBoxOutlined />,
      <Diversity2Icon />,
      <BugReportIcon />,
      <CreateOutlined />,
      <LockResetRoundedIcon />,
      <HelpOutlineOutlined />,
      <LogoutOutlined />,
    ]
  };

  const handleLogout = () => {
    http
      .get("auth/logout")
      .then((res) => {
        localStorage.removeItem("token");
        localStorage.removeItem("Created_by");
        localStorage.removeItem("email");
        localStorage.removeItem("role");
        localStorage.removeItem("first_name");
        Swal.fire("Logout Success", "User Logged Out", "Success");
        setrefresh(!refresh);
        navigate("/");
        if (res.status != 200) {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  let firstNavigation = {
    User: [
      { field: "Home", component: "/dashboard" },
      { field: "Profile", component: "/profile" },
      { field: "Account", component: "/" },
      { field: "View Team Members", component: "/team" },
      { field: "View Issue", component: "/tasks" },
      { field: "Forgot Password", component: "/forgotpassword" },
      { field: "FAQ", component: "/faq" },
      { field: "Sign Out", component: () => handleLogout() },
    ],
    Manager: [
      { field: "Home", component: "/dashboard" },
      { field: "Profile", component: "/profile" },
      { field: "Account", component: "/" },
      { field: "Create Issue", component: "/createissue" },
      { field: "Create Project", component: "/createproject" },
      { field: "Create Team Member", component: "/createteam" },
      { field: "View Issues", component: "/tasks" },
      { field: "View Projects", component: "/viewproject" },
      { field: "View Team Members", component: "/team" },
      { field: "Forgot Password", component: "/forgotpassword" },
      { field: "FAQ", component: "/faq" },
      { field: "Sign Out", component: () => handleLogout() },
    ],
    Admin: [
      { field: "Home", component: "/dashboard" },
      { field: "Profile", component: "/profile" },
      { field: "Account", component: "/" },
      { field: "Create Issue", component: "/createissue" },
      { field: "Create Project", component: "/createproject" },
      { field: "Create Team Member", component: "/createteam" },
      { field: "Create Employee", component: "/createuser" },
      { field: "View Employees", component: "/viewusers" },
      { field: "View Issues", component: "/tasks" },
      { field: "View Team Members", component: "/team" },
      { field: "View Projects", component: "/viewproject" },
      { field: "View Managers", component: "/viewmanager" },
      { field: "Forgot Password", component: "/forgotpassword" },
      { field: "FAQ", component: "/faq" },
      { field: "Sign Out", component: () => handleLogout() },
    ],
    Tester :[
      { field: "Home", component: "/dashboard" },
      { field: "Profile", component: "/profile" },
      { field: "Account", component: "/" },
      { field: "View Team Members", component: "/team" },
      { field: "View Issues", component: "/tasks" },
      { field: "Create Tesing Issues", component: "/tasks" },
      { field: "Forgot Password", component: "/forgotpassword" },
      { field: "FAQ", component: "/faq" },
      { field: "Sign Out", component: () => handleLogout() },
    ]
  };

  useEffect(() => {
    http
      .get(`/menu/${localStorage.getItem("role")}`)
      .then((res) => {
        setMenu(res.data.result.item);
        // setRefresh(!refresh);
      })
      .catch((err) => {
        console.log(err.messsage);
      });
  }, []);

  const RenderMenu = () => {
    if (Role === "Manager") {
      return (
        <>
          {menu.map((el, index) => {
            return (
              // <ListItemButton onClick={firstNavigation.Manager[7].component}>
              <ListItemButton>
                <ListItemIcon>{icons.Manager[index]}</ListItemIcon>
                <Linkstyle to={firstNavigation.Manager[index].component}>
                  <ListItemText primary={el} />
                </Linkstyle>
              </ListItemButton>
            );
          })}
        </>
      );
    } else if (Role === "User") {
      return (
        <>
          {menu.map((el, index) => (
            // <ListItemButton onClick={firstNavigation.User[7].component}>
            <ListItemButton>
              <ListItemIcon>{icons.User[index]}</ListItemIcon>
              <Linkstyle to={firstNavigation.User[index].component}>
                <ListItemText primary={el} />
              </Linkstyle>
            </ListItemButton>
          ))}
        </>
      );
    } else if (Role === "Admin") {
      return (
        <>
          {menu.map((el, index) => (
            // <ListItemButton onClick={firstNavigation.Admin[8].component}>
            <ListItemButton>
              <ListItemIcon>{icons.Admin[index]}</ListItemIcon>
              <Linkstyle to={firstNavigation.Admin[index].component}>
                <ListItemText primary={el} />
              </Linkstyle>
            </ListItemButton>
          ))}
        </>
      );
    } else if(Role === "Tester"){
      return(
        <>
         {menu.map((el, index) => (
            // <ListItemButton onClick={firstNavigation.Admin[8].component}>
            <ListItemButton>
              <ListItemIcon>{icons.Tester[index]}</ListItemIcon>
              <Linkstyle to={firstNavigation.Tester[index].component}>
                <ListItemText primary={el} />
              </Linkstyle>
            </ListItemButton>
          ))}
        </>
      )
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          
            
          <Typography variant="h6" noWrap component="div">
            Project Tracker
          </Typography>
          
          <Button variant="contained" color="error" onClick={handleLogout}>
            SignOut
          </Button>{" "}
          &nbsp;&nbsp;
          {/* {Date()} */}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <img src={logo} alt="" style={{ padding: 5 }} />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <Divider />
        <List>
          <RenderMenu />
        </List>
      </Drawer>
    </Box>
  );
}

export default SideandNavbar;
