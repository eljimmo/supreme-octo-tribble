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

export default function FinancialKPITabMediaCard() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <CustomTab label="(OER)" {...a11yProps(0)} />
          <CustomTab label="(RGR)" {...a11yProps(1)} />
          <CustomTab label="(CPR)" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      Operating Expense Ratio (OER)
      Gross Margin: Gross margin is a financial metric that represents the percentage of revenue remaining after deducting the cost of goods sold (COGS).
            Where:

Operating Expenses include all expenses related to the core operations of the business, such as salaries, rent, utilities, and other day-to-day costs.
Total Revenue is the total income generated from sales of goods or services.

Key Points:

A lower OER suggests that a company is more efficient in managing its operating expenses relative to its revenue.
A higher OER indicates that a larger portion of revenue is used to cover operating costs, which might suggest inefficiencies or higher operational costs.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      Revenue Growth Rate (RGR): The Revenue Growth Rate is a financial metric that measures the percentage increase or decrease in a company’s revenue over a specific period. 
            It helps to assess how quickly a companys revenue is growing and can be a key indicator of business performance and market potential.
            Where:
      
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      Current Period Revenue (CPR): is the revenue earned during the current reporting period (e.g., the current fiscal quarter or year).
    Previous Period Revenue is the revenue earned during the previous comparable period.

Key Points:

    A positive Revenue Growth Rate indicates an increase in revenue, reflecting successful business expansion or increased sales.
    A negative Revenue Growth Rate indicates a decrease in revenue, which may signal declining sales or business challenges.
      </CustomTabPanel>
    </Box>
  );
}
