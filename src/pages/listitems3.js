import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import WaterfallChartIcon from '@mui/icons-material/WaterfallChart';
import ArchitectureIcon from '@mui/icons-material/Architecture';

export default function ThirdListItems ()
{
    return <React.Fragment>
    <ListSubheader component="div" inset>
    Training, Tuning, Fitting 
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <DynamicFormIcon />
      </ListItemIcon>
      <ListItemText primary="Dynamic Calculus" />
    </ListItemButton>


    <ListItemButton>
      <ListItemIcon>
        <EqualizerIcon />
      </ListItemIcon>
      <ListItemText primary="Static Calculus" />
    </ListItemButton>


    <ListItemButton>
      <ListItemIcon>
        <WaterfallChartIcon />
      </ListItemIcon>
      <ListItemText primary="Stochastic Calculus" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <ArchitectureIcon />
      </ListItemIcon>
      <ListItemText primary="Deductive Calculus" />
    </ListItemButton>

  </React.Fragment>
}