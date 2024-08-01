const express = require('express');
const cors = require('cors');
const app = express();
const port = 3500;

app.use(cors());
app.use(express.json());

// Example static data with 25 columns
const data = [
    {
        id: 1,
        date: '2024-07-01',
        proofofdelivery: 'Invoice123',
        revenue: 1100.00,
        net: 1083.50, // Ensure 'net' is defined
        paymentStatus: 'Paid',
        remit: 'Bank Transfer',
        invoicing: 'Invoice 8093770',
        brokerage: 'Trinity Logistics, Inc',
        rateConfirmation: '8093770',
        weight: 40000,
        agent: 'David Newberry',
        email: 'david.newberry@trinitylogistics.com',
        phoneNumber: '(817) 789-4168',
        miles: 318,
        perMileRate: 3.46,
        shipper: '1301 Forum Way S, Fort Worth, TX 76140',
        pickUpDateShipperDate: '2024-07-02',
        receiver: '11717 West, CR 125, Odessa, TX 79765',
        deliveryDateReceiverDate: '2024-07-05',
        secondConsignee: 'None',
        secondDeliveryDateSecondReceiverDate: '2024-07-07',
        thirdConsignee: 'None',
        commodity: 'Machine Parts'
      },


      {
        id: 2,
        date: '2024-07-01',
        proofofdelivery: 'Invoice123',
        revenue: 1100.00,
        net: 1083.50, // Ensure 'net' is defined
        paymentStatus: 'Paid',
        remit: 'Bank Transfer',
        invoicing: 'Invoice 8093770',
        brokerage: 'Trinity Logistics, Inc',
        rateConfirmation: '8093770',
        weight: 40000,
        agent: 'David Newberry',
        email: 'david.newberry@trinitylogistics.com',
        phoneNumber: '(817) 789-4168',
        miles: 318,
        perMileRate: 3.46,
        shipper: '1301 Forum Way S, Fort Worth, TX 76140',
        pickUpDateShipperDate: '2024-07-02',
        receiver: '11717 West, CR 125, Odessa, TX 79765',
        deliveryDateReceiverDate: '2024-07-05',
        secondConsignee: 'None',
        secondDeliveryDateSecondReceiverDate: '2024-07-07',
        thirdConsignee: 'None',
        commodity: 'Machine Parts'
      },
  // Add more data rows as needed...

  // Add additional rows as needed
];

app.get('/api/data', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
