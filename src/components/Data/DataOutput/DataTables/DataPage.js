import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Typography, Button } from '@mui/material';
import DataForm from './DataForm'; // Import the form component
import './DataPage.css'; // Optional: for additional styling

const DataPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3500/api/data');
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleFormSuccess = async () => {
    // Fetch new data after form submission
    try {
      const response = await axios.get('http://localhost:3500/api/data');
      setData(response.data);
    } catch (err) {
      setError('Error fetching data');
    }
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
                <TableCell>{item.remit.toLocaleString()}</TableCell>
                <TableCell>{item.invoicing.toLocaleString()}</TableCell>
                <TableCell>{item.brokerage}</TableCell>
                <TableCell>{item.rateConfirmation}</TableCell>
                <TableCell>{item.weight}</TableCell>
                <TableCell>{item.agent}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.phoneNumber}</TableCell>
                <TableCell>{item.miles}</TableCell>
                <TableCell>{item.perMileRate}</TableCell>
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
