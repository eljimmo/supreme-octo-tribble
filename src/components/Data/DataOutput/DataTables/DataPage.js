// DataPage.js

import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Typography, Button } from '@mui/material';
import DataForm from './DataForm'; // Import the form component
import './DataPage.css'; // Optional: for additional styling
// import { useData } from '../../../../../dataserver/DataProvider'; // Import the useData hook
// import { useData } from '../../../../DataPoint/DataProvider'; // Import the useData hook
import { useData } from '../DataProviding/DataProvider'; // Import the useData hook

const DataPage = () => {
  const { data, loading, error } = useData(); // Use the custom hook to get data
  const [showForm, setShowForm] = useState(false);

  const handleFormSuccess = async () => {
    // Trigger data refetch
    // Since useData already updates data automatically, you might not need to refetch here
    setShowForm(false);
  };

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <div className="Current Freight Movement">
      <Typography variant="h4" gutterBottom>Current Freight Movement</Typography>
      <Button variant="contained" color="primary" onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Cancel' : 'Add New Data'}
      </Button>
      {showForm && <DataForm onSuccess={handleFormSuccess} />}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Revenue</TableCell>
              <TableCell>Net Amount</TableCell>
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
              <TableCell>Pick Up Date Shipper Date</TableCell>
              <TableCell>Receiver</TableCell>
              <TableCell>Delivery Date Receiver Date</TableCell>
              <TableCell>Second Consignee</TableCell>
              <TableCell>Second Delivery Date Second Receiver Date</TableCell>
              <TableCell>Third Consignee</TableCell>
              <TableCell>Commodity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(item => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>${item.revenue.toLocaleString()}</TableCell>
                <TableCell>${item.net.toLocaleString()}</TableCell>
                <TableCell>{item.paymentStatus}</TableCell>
                <TableCell>{item.remit}</TableCell>
                <TableCell>{item.invoicing}</TableCell>
                <TableCell>{item.brokerage}</TableCell>
                <TableCell>{item.rateConfirmation}</TableCell>
                <TableCell>{item.weight}</TableCell>
                <TableCell>{item.agent}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.phoneNumber}</TableCell>
                <TableCell>{item.miles}</TableCell>
                <TableCell>${item.perMileRate.toFixed(2)}</TableCell>
                <TableCell>{item.shipper}</TableCell>
                <TableCell>{item.pickUpDateShipperDate}</TableCell>
                <TableCell>{item.receiver}</TableCell>
                <TableCell>{item.deliveryDateReceiverDate}</TableCell>
                <TableCell>{item.secondConsignee}</TableCell>
                <TableCell>{item.secondDeliveryDateSecondReceiverDate}</TableCell>
                <TableCell>{item.thirdConsignee}</TableCell>
                <TableCell>{item.commodity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DataPage;
