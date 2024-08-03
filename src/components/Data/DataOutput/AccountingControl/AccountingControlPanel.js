import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import RevenueExpensesMediaCard from './RevenueExpenses/RevenueExpensesMediaCard';
// import ProfitabilityMetricsMediaCard from './ProfitabilityMetrics/ProfitabilityMetricsMediaCard';
// import AssetManagementMediaCard from './AssetManagement/AssetManagementMediaCard';
// import CashFlowManagementMediaCard from './CashFlowManagement/CashFlowManagementMediaCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AccountingControlPanel() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>
          Invoice Management | Payment Status
          {/* <RevenueExpensesMediaCard/> */}
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
          Financial Compliance Data 
          {/* <ProfitabilityMetricsMediaCard/> */}
          </Item>

        </Grid>
        <Grid item xs={6}>
          <Item>Payroll Records
          {/* <AssetManagementMediaCard/> */}

          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            Brokerage Accounting Information
          {/* <CashFlowManagementMediaCard/> */}
          </Item>

        </Grid>
      </Grid>
    </Box>
  );
}
