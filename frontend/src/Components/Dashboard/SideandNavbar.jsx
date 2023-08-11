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
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  PeopleAltOutlined,
  ReceiptOutlined,
  CalendarViewMonthRounded,
  HelpOutlineOutlined,
  MenuOutlined,
  CreateOutlined,
  LogoutOutlined,
  AccountBoxOutlined,
  TaskAltOutlined,
  DoneOutline,
  WorkOutline,
  AssignmentOutlined,
  GraphicEqOutlined,
} from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {Linkstyle} from '../Style/MuiStyle.js'

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
    setOpen(false);
  };

  const icons = {
    User: [
      <HomeOutlined />,
      <ReceiptOutlined />,
      <AccountBoxOutlined />,
      <CreateOutlined />,
      <PeopleAltOutlined />,
      <TaskAltOutlined />,
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
      <HelpOutlineOutlined />,
      <LogoutOutlined />,
    ],
    Admin: [
      <HomeOutlined />,
      <ReceiptOutlined />,
      <AccountBoxOutlined />,
      <CreateOutlined />,
      <VisibilityIcon />,
      <VisibilityIcon />,
      <VisibilityIcon />,
      <HelpOutlineOutlined />,
      <LogoutOutlined />,
    ],
  };

  const handleLogout = () => {
    http
      .get("auth/logout")
      .then((res) => {
        localStorage.removeItem("token");
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
      { field: "Home", value: false, component: "/dashboard" },
      { field: "Profile", value: false, component: "/profile" },
      { field: "Account", value: false, component: "/" },
      { field: "Create Issue", value: false, component: "/createissue" },
      { field: "Team", value: false, component: "/team" },
      { field: "Task Type", value: false, component: "/tasks" },
      { field: "FAQ", value: false, component: "/" },
      { field: "Sign Out", value: false, component: () => handleLogout() },
    ],
    Manager: [
      { field: "Home", value: false, component: "/dashboard" },
      { field: "Profile", value: false, component: "/profile" },
      { field: "Account", value: false, component: "/" },
      { field: "Create Issue", value: false, component: "/createissue" },
      { field: "Create Project", value: false, component: "/createproject" },
      { field: "Create Team Member", value: false, component: "/createteam" },
      { field: "FAQ", value: false, component: "/" },
      { field: "Sign Out", value: false, component: () => handleLogout() },
    ],
    Admin: [
      { field: "Home", value: false, component: "/dashboard" },
      { field: "Profile", value: false, component: "/profile" },
      { field: "Account", value: false, component: "/" },
      { field: "Create User", value: false, component: "/" },
      { field: "View Users", value: false, component: "/viewusers" },
      { field: "View Managers", value: false, component: "/viewmanager" },
      { field: "View Projects", value: false, component: "/viewproject" },
      { field: "FAQ", value: false, component: "/" },
      { field: "Sign Out", value: false, component: () => handleLogout() },
    ],
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
              <ListItemButton >
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
          </Button>
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
