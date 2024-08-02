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

export default function StatisticalFrequencyDistributionTableMediaCard() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <CustomTab label="Item One" {...a11yProps(0)} />
          <CustomTab label="Item Two" {...a11yProps(1)} />
          <CustomTab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      Commodity Type:
        Purpose: Track the frequency and distribution of different types of commodities transported.
        Example: Count of shipments by commodity type (e.g., Machine Parts, Electronics, etc.).

    Revenue:
        Purpose: Analyze revenue generated across different periods or for different types of shipments.
        Example: Average revenue per shipment or per commodity.

    Net Revenue:
        Purpose: Understand the profitability of different shipments or routes.
        Example: Net revenue distribution by commodity type or region.

    Weight:
        Purpose: Track the distribution of shipment weights to optimize load planning and cost management.
        Example: Frequency of shipments within different weight ranges (e.g., 0-10,000 lbs, 10,000-20,000 lbs).

    Miles Traveled:
        Purpose: Assess the distribution of travel distances and identify trends or opportunities for route optimization.
        Example: Distribution of miles traveled for shipments to and from South America.

    Per Mile Rate:
        Purpose: Evaluate the cost efficiency of different routes or types of shipments.
        Example: Average per mile rate by commodity type or region.

    Transit Time:
        Purpose: Monitor and optimize the efficiency of the transportation process.
        Example: Frequency distribution of transit times to identify potential delays or efficiencies.

    Payment Status:
                </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Statistical Frequency Distribution Table 
              </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Statistical Frequency Distribution Table 
              </CustomTabPanel>
    </Box>
  );
}
