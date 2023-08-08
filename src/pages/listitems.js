import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LayersIcon from '@mui/icons-material/Layers';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import CottageIcon from '@mui/icons-material/Cottage';
import LineAxisIcon from '@mui/icons-material/LineAxis';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';

import { useNavigate } from 'react-router-dom';




export default function MainListItems ()
{
  const history = useNavigate();

  function Home(){
    history('/');
  }

  function WatchList(){
    history('/watchlist');
  }

  function Dashboard(){
    history('/dashboard',{state:{Symbol:"TSLA"}});
  }


function Advchart(){
  history('/lightWeight',{state:{Symbol:"TSLA"}});
}
  return  <React.Fragment>
  <ListItemButton onClick={Home}>
    <ListItemIcon>
      <CottageIcon />
    </ListItemIcon>
    <ListItemText primary="Home" />
  </ListItemButton>
  <ListItemButton  onClick={WatchList}>
    <ListItemIcon>
      < ListIcon />
    </ListItemIcon>
    <ListItemText primary="Monitor List" />
  </ListItemButton>
  <ListItemButton onClick={Dashboard}>
    <ListItemIcon>
      <LineAxisIcon />
    </ListItemIcon>
    <ListItemText primary="Saved Dashboard" />
  </ListItemButton>
  <ListItemButton onClick={Advchart}> 
    
    <ListItemIcon>
      <DonutSmallIcon />
    </ListItemIcon>
    <ListItemText primary="Advance Charting" />
  </ListItemButton>
</React.Fragment>
}
  