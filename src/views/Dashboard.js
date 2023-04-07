import React from "react";
import {
  Card,
  CardHeader,
  Row,
  Col,
} from "reactstrap";
import Tabs_Demo from './StockSearch/SSCompos/Tabs/Analytic_Dash_Index';
// import Tabs_Demo from './views/StockSearch/SSCompos/Tabs/Analytic_Dash_Index';
import { Grid, Skeleton, Container, Textarea, Group, Text, Menu, ActionIcon, Image, SimpleGrid, Select, NumberInput, Space, Button, Tooltip, Box, List } from '@mantine/core';

// import AnimatedCursor from "react-animated-cursor";
// import StockSearch from '..//..//Stock_Search_Index';
// import StockSearch from '../../Stock_Search_Index';
// import StockSearch from '../views/StockSearch/Stock_Search_Index';


function Dashboard(props) {
  return (
    <>
          <div className="content">
          <Row>
          <Col md="12">
            <Card className="card-chart">
              <CardHeader>
              <Col className="text-left" sm="6">
              <Text component="span" inherit color="green"> Welcome to Leibniz Analytica; Machine Learning and Artificial Intelligence Software for Stock & Commodity Investors.</Text>
                  </Col>
                  </CardHeader>
                  </Card>
                  </Col>
                  </Row>
                  <Tabs_Demo/>

        </div>



    </>
  );
}

export default Dashboard;
