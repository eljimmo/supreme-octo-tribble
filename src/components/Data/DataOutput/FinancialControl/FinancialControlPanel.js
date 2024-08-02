import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FinancialGridControl() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>Revenue and Expenses</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Profitability Metrics </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Asset Management</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>Cash Flow Management</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
