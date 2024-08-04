// src/DataPage.js
import React from 'react';
import { CircularProgress, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useData } from './DataContext/DataContextIndex';

const TestDataPage = () => {
  const { data, loading, error } = useData();

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">Error: {error.message}</Typography>;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Proof of Delivery</TableCell>
            <TableCell>Revenue</TableCell>
            <TableCell>Net</TableCell>
            <TableCell>Payment Status</TableCell>
            <TableCell>Remit</TableCell>
            <TableCell>Invoicing</TableCell>
            <TableCell>Brokerage</TableCell>
            <TableCell>Rate Confirmation</TableCell>
            <TableCell>Weight</TableCell>
            <TableCell>Agent</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Miles</TableCell>
            <TableCell>Per Mile Rate</TableCell>
            <TableCell>Shipper</TableCell>
            <TableCell>Pick Up Date</TableCell>
            <TableCell>Receiver</TableCell>
            <TableCell>Delivery Date</TableCell>
            <TableCell>Second Consignee</TableCell>
            <TableCell>Second Delivery Date</TableCell>
            <TableCell>Third Consignee</TableCell>
            <TableCell>Commodity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{data.id}</TableCell>
            <TableCell>{data.date}</TableCell>
            <TableCell>{data.proofofdelivery}</TableCell>
            <TableCell>${data.revenue}</TableCell>
            <TableCell>${data.net}</TableCell>
            <TableCell>{data.paymentStatus}</TableCell>
            <TableCell>{data.remit}</TableCell>
            <TableCell>{data.invoicing}</TableCell>
            <TableCell>{data.brokerage}</TableCell>
            <TableCell>{data.rateConfirmation}</TableCell>
            <TableCell>{data.weight}</TableCell>
            <TableCell>{data.agent}</TableCell>
            <TableCell>{data.email}</TableCell>
            <TableCell>{data.phoneNumber}</TableCell>
            <TableCell>{data.miles}</TableCell>
            <TableCell>${data.perMileRate.toFixed(2)}</TableCell>
            <TableCell>{data.shipper}</TableCell>
            <TableCell>{data.pickUpDateShipperDate}</TableCell>
            <TableCell>{data.receiver}</TableCell>
            <TableCell>{data.deliveryDateReceiverDate}</TableCell>
            <TableCell>{data.secondConsignee}</TableCell>
            <TableCell>{data.secondDeliveryDateSecondReceiverDate}</TableCell>
            <TableCell>{data.thirdConsignee}</TableCell>
            <TableCell>{data.commodity}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TestDataPage;
