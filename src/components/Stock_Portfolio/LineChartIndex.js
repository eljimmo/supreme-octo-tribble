import React from "react";
import StockPriceChart from "./StockPriceChart";
import { Row, Col } from 'reactstrap';
import { Grid } from '@mantine/core';
import styled from "styled-components";

export const mainitem = styled.div`
display: flex;
align-items: center;
justify-content: center;

border-bottom: 1px solid var(--color-secondary-light);
}
`;

const DashApp = () => {
  return (
    <div>
      <h1>Stock Price Dashboard</h1>
      <mainitem>
      <Grid>
      <Grid.Col span={12}>
      <StockPriceChart symbol="AAPL" />
      </Grid.Col>
      <Grid.Col span={12}>
      <StockPriceChart symbol="MSFT" />
      </Grid.Col>
    </Grid>
    </mainitem>
    </div>
  );
};

export default DashApp;
