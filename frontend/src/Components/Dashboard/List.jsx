import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GridViewIcon from '@mui/icons-material/GridView';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {Linkstyle} from '../Style/MuiStyle.js'

export const mainListItems = (
    <React.Fragment >
      <ListItemButton>
        <ListItemIcon>
          <GridViewIcon />
        </ListItemIcon>
        <Linkstyle to="/dashboard">
        <ListItemText  primary="Dashboard"  />
        </Linkstyle>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <ShoppingBagIcon />
        </ListItemIcon>
        <Linkstyle to="/createissue">
        <ListItemText primary="Create Issue" />
        </Linkstyle>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <ShoppingBagIcon />
        </ListItemIcon>
        <Linkstyle to="/cal">
        <ListItemText primary="Calander" />
        </Linkstyle>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <RemoveRedEyeIcon />
        </ListItemIcon>
        <Linkstyle to="/viewOrders">
        <ListItemText primary="View Orders" />
        </Linkstyle>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <RemoveRedEyeIcon />
        </ListItemIcon>
        <Linkstyle to="/viewpayments">
        <ListItemText primary="View Payments" />
        </Linkstyle>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <RemoveRedEyeIcon />
        </ListItemIcon>
        <Linkstyle to="/cal">
        <ListItemText primary="View Pending Payments" />
        </Linkstyle>
      </ListItemButton>
      {/* <ListItemButton>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Account" />
      </ListItemButton> */}
    </React.Fragment>
  );
  
  export const secondaryListItems = (
    <React.Fragment>
      {/* <ListSubheader component="div" inset>
        Profile
      </ListSubheader> */}
      <ListItemButton>
        <ListItemIcon>
          <AccountBalanceIcon />
        </ListItemIcon>
        <ListItemText primary="Account" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Setting" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary="Sign Out" />
      </ListItemButton>
    </React.Fragment>
  );


