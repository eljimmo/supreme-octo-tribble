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
      {
        id: 3,
        date: '2024-07-02',
        proofofdelivery: 'Invoice125',
        revenue: 980.00,
        net: 960.00,
        paymentStatus: 'Paid',
        remit: 'Bank Transfer',
        invoicing: 'Invoice 8093772',
        brokerage: 'Global Transport Inc.',
        rateConfirmation: '8093772',
        weight: 30000,
        agent: 'Michael Brown',
        email: 'michael.brown@globaltransport.com',
        phoneNumber: '(817) 789-4170',
        miles: 280,
        perMileRate: 3.50,
        shipper: '789 Elm St, Austin, TX 73301',
        pickUpDateShipperDate: '2024-07-04',
        receiver: '654 Pine St, San Antonio, TX 78201',
        deliveryDateReceiverDate: '2024-07-07',
        secondConsignee: 'None',
        secondDeliveryDateSecondReceiverDate: 'None',
        thirdConsignee: 'None',
        commodity: 'Furniture'
    },
    {
        id: 4,
        date: '2024-07-03',
        proofofdelivery: 'Invoice126',
        revenue: 1450.00,
        net: 1425.00,
        paymentStatus: 'Paid',
        remit: 'Bank Transfer',
        invoicing: 'Invoice 8093773',
        brokerage: 'Elite Freight Services',
        rateConfirmation: '8093773',
        weight: 50000,
        agent: 'Emily Davis',
        email: 'emily.davis@elitefreight.com',
        phoneNumber: '(817) 789-4171',
        miles: 400,
        perMileRate: 3.63,
        shipper: '456 Maple Ave, Fort Worth, TX 76109',
        pickUpDateShipperDate: '2024-07-05',
        receiver: '123 Oak Dr, Dallas, TX 75215',
        deliveryDateReceiverDate: '2024-07-10',
        secondConsignee: 'None',
        secondDeliveryDateSecondReceiverDate: 'None',
        thirdConsignee: 'None',
        commodity: 'Medical Supplies'
    },
    {
        id: 5,
        date: '2024-07-04',
        proofofdelivery: 'Invoice127',
        revenue: 1600.00,
        net: 1580.00,
        paymentStatus: 'Paid',
        remit: 'Wire Transfer',
        invoicing: 'Invoice 8093774',
        brokerage: 'Precision Logistics',
        rateConfirmation: '8093774',
        weight: 55000,
        agent: 'John Wilson',
        email: 'john.wilson@precisionlogistics.com',
        phoneNumber: '(817) 789-4172',
        miles: 420,
        perMileRate: 3.81,
        shipper: '321 Birch St, Houston, TX 77002',
        pickUpDateShipperDate: '2024-07-06',
        receiver: '789 Cedar St, Austin, TX 73302',
        deliveryDateReceiverDate: '2024-07-11',
        secondConsignee: 'Jane Smith',
        secondDeliveryDateSecondReceiverDate: '2024-07-12',
        thirdConsignee: 'None',
        commodity: 'Automobile Parts'
    },
    {
        id: 6,
        date: '2024-07-05',
        proofofdelivery: 'Invoice128',
        revenue: 1350.00,
        net: 1330.00,
        paymentStatus: 'Unpaid',
        remit: 'Credit Card',
        invoicing: 'Invoice 8093775',
        brokerage: 'Swift Transport',
        rateConfirmation: '8093775',
        weight: 48000,
        agent: 'Lisa Taylor',
        email: 'lisa.taylor@swifttransport.com',
        phoneNumber: '(817) 789-4173',
        miles: 360,
        perMileRate: 3.75,
        shipper: '654 Oak St, Dallas, TX 75201',
        pickUpDateShipperDate: '2024-07-07',
        receiver: '123 Maple Dr, San Antonio, TX 78202',
        deliveryDateReceiverDate: '2024-07-12',
        secondConsignee: 'None',
        secondDeliveryDateSecondReceiverDate: 'None',
        thirdConsignee: 'None',
        commodity: 'Textiles'
    },
    {
        id: 7,
        date: '2024-07-06',
        proofofdelivery: 'Invoice129',
        revenue: 1225.00,
        net: 1200.00,
        paymentStatus: 'Paid',
        remit: 'Bank Transfer',
        invoicing: 'Invoice 8093776',
        brokerage: 'Direct Freight',
        rateConfirmation: '8093776',
        weight: 46000,
        agent: 'Andrew Lee',
        email: 'andrew.lee@directfreight.com',
        phoneNumber: '(817) 789-4174',
        miles: 350,
        perMileRate: 3.50,
        shipper: '789 Birch St, Austin, TX 73303',
        pickUpDateShipperDate: '2024-07-08',
        receiver: '456 Cedar Ave, Houston, TX 77003',
        deliveryDateReceiverDate: '2024-07-13',
        secondConsignee: 'None',
        secondDeliveryDateSecondReceiverDate: 'None',
        thirdConsignee: 'None',
        commodity: 'Machinery'
    }
  // Add more data rows as needed...

  // Add additional rows as needed
];

app.get('/api/data', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
