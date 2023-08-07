import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LayersIcon from '@mui/icons-material/Layers';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import HomeIcon from '@mui/icons-material/Home';
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
      <HomeIcon />
    </ListItemIcon>
    <ListItemText primary="Home" />
  </ListItemButton>
  <ListItemButton  onClick={WatchList}>
    <ListItemIcon>
      <AccountBalanceIcon />
    </ListItemIcon>
    <ListItemText primary="Monitor List" />
  </ListItemButton>
  <ListItemButton onClick={Dashboard}>
    <ListItemIcon>
      <DashboardIcon />
    </ListItemIcon>
    <ListItemText primary="Saved Dashboard" />
  </ListItemButton>
  <ListItemButton onClick={Advchart}> 
    
    <ListItemIcon>
      <LayersIcon />
    </ListItemIcon>
    <ListItemText primary="Advance Charting" />
  </ListItemButton>
</React.Fragment>
}
  