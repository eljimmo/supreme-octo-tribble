import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CircularProgress, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const AllDataPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:9000/api/data')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">Error: {error.message}</Typography>;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {/* Add your table headers here */}
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
          {data.map((row, index) => (
            <TableRow key={index}>
              {/* Ensure that these match the structure of your data */}
              <TableCell>{row[0]}</TableCell>
              <TableCell>{row[1]}</TableCell>
              <TableCell>{row[2]}</TableCell>
              <TableCell>{row[3]}</TableCell>
              <TableCell>{row[4]}</TableCell>
              <TableCell>{row[5]}</TableCell>
              <TableCell>{row[6]}</TableCell>
              <TableCell>{row[7]}</TableCell>
              <TableCell>{row[8]}</TableCell>
              <TableCell>{row[9]}</TableCell>
              <TableCell>{row[10]}</TableCell>
              <TableCell>{row[11]}</TableCell>
              <TableCell>{row[12]}</TableCell>
              <TableCell>{row[13]}</TableCell>
              <TableCell>{row[14]}</TableCell>
              <TableCell>{row[15]}</TableCell>
              <TableCell>{row[16]}</TableCell>
              <TableCell>{row[17]}</TableCell>
              <TableCell>{row[18]}</TableCell>
              <TableCell>{row[19]}</TableCell>
              <TableCell>{row[20]}</TableCell>
              <TableCell>{row[21]}</TableCell>
              <TableCell>{row[22]}</TableCell>
              <TableCell>{row[23]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AllDataPage;
