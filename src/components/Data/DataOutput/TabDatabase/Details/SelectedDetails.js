import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function RowDetails({ row }) {
  return (
    <Box sx={{ p: 2, border: '1px solid grey', mt: 2 }}>
      <Typography variant="h6">Details for Row {row.id}</Typography>
      <Typography>Date: {row.date}</Typography>
      <Typography>Revenue: {row.revenue}</Typography>
      <Typography>Shipper Address: {row.shipper}</Typography>
      <Typography>Delivery Address: {row.delivery}</Typography>
      <Typography>Miles: {row.miles}</Typography>
      <Typography>Per Mile Rate: {row.perMileRate}</Typography>
      <Typography>Brokerage: {row.brokerage}</Typography>
      <Typography>Rate Confirmation: {row.rateConfirmation}</Typography>
      <Typography>Weight: {row.weight}</Typography>
      <Typography>Agent: {row.agent}</Typography>
      <Typography>Email: {row.email}</Typography>
      <Typography>Phone Number: {row.phoneNumber}</Typography>
      <Typography>Proof of Delivery: {row.proofofdelivery}</Typography>
      <Typography>Payment Status: {row.paymentStatus}</Typography>
      <Typography>Remit: {row.remit}</Typography>
      <Typography>Invoicing: {row.invoicing}</Typography>
      <Typography>Pick Up Date: {row.pickUpDateShipperDate}</Typography>
      <Typography>Receiver: {row.receiver}</Typography>
      <Typography>Delivery Date: {row.deliveryDateReceiverDate}</Typography>
      <Typography>Second Consignee: {row.secondConsignee}</Typography>
      <Typography>Second Delivery Date: {row.secondDeliveryDateSecondReceiverDate}</Typography>
      <Typography>Third Consignee: {row.thirdConsignee}</Typography>
      <Typography>Commodity: {row.commodity}</Typography>
    </Box>
  );
}

export default RowDetails;
