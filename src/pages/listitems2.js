import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import BorderBottomIcon from '@mui/icons-material/BorderBottom';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
export default function SecondaryListItems ()
{
    return <React.Fragment>
    <ListSubheader component="div" inset>
      Bot Creation & Modeling
    </ListSubheader>


    <ListItemButton>
      <ListItemIcon>
        <SmartToyIcon />
      </ListItemIcon>
      <ListItemText primary="Live Bots" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <PrecisionManufacturingIcon />
      </ListItemIcon>
      <ListItemText primary="Bot Creation" />
    </ListItemButton>



    <ListItemButton>
      <ListItemIcon>
        <BorderBottomIcon />
      </ListItemIcon>
      <ListItemText primary="Modeling Bots" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <DataSaverOnIcon />
      </ListItemIcon>
      <ListItemText primary="Saved Bots" />
    </ListItemButton>
  </React.Fragment>
}