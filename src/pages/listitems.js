import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListIcon from '@mui/icons-material/List';
import CottageIcon from '@mui/icons-material/Cottage';
import LineAxisIcon from '@mui/icons-material/LineAxis';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';

import { useNavigate } from 'react-router-dom';




export default function MainListItems ()
{
  const history = useNavigate();

  function Home(){
    history('/home');
  }

  function WatchList(){
    history('/portfolio');
  }

  function Dashboard(){
    history('/portfolio',{state:{Symbol:"TSLA"}});
  }


function Advchart(){
  history('/portfolio',{state:{Symbol:"TSLA"}});
}
  return  <React.Fragment>


    <br/>


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
    <ListItemText primary="Portfolio Page" />
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
  