import React, { useState } from 'react';
import { TextField, Button, Typography, Grid } from '@mui/material';
import axios from 'axios';

const DataForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    date: '',
    revenue: '',
    net: '',
    paymentStatus: '',
    remit: '',
    invoicing: '',
    brokerage: '',
    rateConfirmation: '',
    weight: '',
    agent: '',
    email: '',
    phoneNumber: '',
    miles: '',
    perMileRate: '',
    shipper: '',
    pickUpDateShipperDate: '',
    receiver: '',
    deliveryDateReceiverDate: '',
    secondConsignee: '',
    secondDeliveryDateSecondReceiverDate: '',
    thirdConsignee: '',
    commodity: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3500/api/data', formData);
      onSuccess(); // Notify parent component on success
      setFormData({
        date: '',
        revenue: '',
        net: '',
        paymentStatus: '',
        remit: '',
        invoicing: '',
        brokerage: '',
        rateConfirmation: '',
        weight: '',
        agent: '',
        email: '',
        phoneNumber: '',
        miles: '',
        perMileRate: '',
        shipper: '',
        pickUpDateShipperDate: '',
        receiver: '',
        deliveryDateReceiverDate: '',
        secondConsignee: '',
        secondDeliveryDateSecondReceiverDate: '',
        thirdConsignee: '',
        commodity: ''
      });
      setError('');
    } catch (err) {
      setError('Error submitting data');
    }
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>Add New Freight Data</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {Object.keys(formData).map((key) => (
            <Grid item xs={12} sm={6} key={key}>
              <TextField
                label={key.replace(/([A-Z])/g, ' $1').toUpperCase()}
                variant="outlined"
                fullWidth
                name={key}
                value={formData[key]}
                onChange={handleChange}
                required
              />
            </Grid>
          ))}
        </Grid>
        {error && <Typography color="error">{error}</Typography>}
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default DataForm;
