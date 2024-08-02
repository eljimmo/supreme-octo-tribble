// DataPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DataPage.css'; // Optional: for styling

const DataPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="Current Freight Movement">
      <h1>Current Freight Movement</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th> Date </th>
            <th> Revenue </th>
            <th> Net Amount </th>
            <th> Payment Status </th>
            <th> Remit </th>
            <th> Invoicing </th>
            <th> Brokerage </th>
            <th> Rate Confirmation </th>
            <th> Weight </th>
            <th> Agent </th>
            <th> Email </th>
            <th> Phone Number </th>
            <th> Miles </th>
            <th> Per Mile Rate </th>
            <th> Shipper </th>
            <th> Pick Up Date Shipper Date </th>
            <th> Receiver </th>
            <th> Delivery Date Receiver Date </th>
            <th> Second Consignee </th>
            <th> Second Delivery Date Second Receiver Date </th>
            <th> Third Consignee </th>
            <th> Commodity </th>
            

          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.date}</td>
              <td>${item.revenue.toLocaleString()}</td>
              <td>${item.net.toLocaleString()}</td>
              <td>{item.paymentStatus}</td>
              <td>{item.remit.toLocaleString()}</td>
              <td>{item.invoicing.toLocaleString()}</td>
              <td>{item.brokerage}</td>
              <td>{item.rateConfirmation}</td>
              <td>{item.weight}</td>
              <td>{item.agent}</td>
              <td>{item.email}</td>
              <td>{item.phoneNumber}</td>
              <td>{item.miles}</td>
              <td>{item.perMileRate}</td>
              <td>{item.shipper}</td>
              <td>{item.pickUpDateShipperDate}</td>
              <td>{item.receiver}</td>
              <td>{item.deliveryDateReceiverDate}</td>
              <td>{item.secondConsignee}</td>
              <td>{item.secondDeliveryDateSecondReceiverDate}</td>
              <td>{item.thirdConsignee}</td>
              <td>{item.commodity}</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataPage;
