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

export default function OperationalPerformanceMetricsMediaCard() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <CustomTab label="(TT)" {...a11yProps(0)} />
          <CustomTab label="(FUR)" {...a11yProps(1)} />
          <CustomTab label="(FCPM)" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>

      Transit Time (TT)
            Transit Time: Transit Time refers to the duration it 
            takes for goods to travel from the point of 
            origin to the destination. It is a key performance metric in 
            logistics and transportation, 
            reflecting the efficiency and speed of the shipping process.

The formula to calculate Transit Time is:

Transit Time=Delivery Date−Pickup DateTransit Time=Delivery Date−Pickup Date

Where:

    Delivery Date is the date when the goods reach their final destination.
    Pickup Date is the date when the goods are first collected.

Key Points:

    Shorter Transit Times typically indicate more efficient transportation and faster delivery to customers.
    Longer Transit Times can reflect potential delays or inefficiencies in the supply chain.

Understanding Transit Time helps businesses improve logistics operations and enhance customer satisfaction by ensuring timely deliveries.        </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      Fleet Utilization Rate (FUR): The Fleet Utilization Rate is a measure of how effectively a company's fleet of vehicles is being used. It indicates the percentage of time that the fleet is operational and actively transporting goods compared to the total available time.

The formula to calculate Fleet Utilization Rate is:

Fleet Utilization Rate=Total Operational HoursTotal Available Hours×100%Fleet Utilization Rate=Total Available HoursTotal Operational Hours​×100%

Where:

    Total Operational Hours is the total number of hours that vehicles in the fleet are actively in use for transporting goods.
    Total Available Hours is the total number of hours the fleet is available for use, including idle time.

Key Points:

    A higher Fleet Utilization Rate suggests that the fleet is being used efficiently, with minimal downtime.
    A lower Fleet Utilization Rate may indicate underutilization of the fleet, potentially leading to higher operational costs.

Monitoring the Fleet Utilization Rate helps companies optimize their fleet management and reduce costs by improving vehicle usage and minimizing idle time.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      Freight Cost per Mile (FCPM)
            Freight Cost per Mile: Freight Cost per Mile is a financial metric that measures the cost associated with transporting goods for each mile traveled. It helps evaluate the efficiency of transportation operations and the overall cost of shipping.

The formula to calculate Freight Cost per Mile is:

Freight Cost per Mile=Total Freight CostTotal Miles TraveledFreight Cost per Mile=Total Miles TraveledTotal Freight Cost​

Where:

    Total Freight Cost is the total expense incurred for transporting the goods, including fuel, labor, maintenance, and other related costs.
    Total Miles Traveled is the total distance covered during the transportation of the goods.

Key Points:

    A lower Freight Cost per Mile indicates more efficient transportation operations and cost management.
    A higher Freight Cost per Mile may suggest increased expenses or inefficiencies in the transportation process.

Understanding Freight Cost per Mile helps businesses manage transportation budgets, identify cost-saving opportunities, and optimize their logistics operations.
      </CustomTabPanel>
    </Box>
  );
}
