import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const CustomTab = styled(Tab)(({ theme }) => ({
  color: '#39FF14', // neon green for non-selected tabs
  '&.Mui-selected': {
    color: theme.palette.primary.main,
  },
}));

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabDatabase() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <CustomTab label="Factored" {...a11yProps(0)} />
          <CustomTab label="QuickPay" {...a11yProps(1)} />
          <CustomTab label="TruimphPay" {...a11yProps(2)} />
          <CustomTab label="Transflo" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Factored
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        QuickPay
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        TruimphPay
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Transflo
      </CustomTabPanel>
    </Box>
  );
}
