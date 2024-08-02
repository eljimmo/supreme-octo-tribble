import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function ProfitabilityMetricsMediaCard() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
      }}
    >
      <Card sx={{ width: '100%', maxWidth: 345, boxShadow: 3 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/profitability-metrics.jpg"
          title="Profitability Metrics"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Profitability Metrics Panel
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Analyze the profitability of your logistics and transportation operations. Get detailed metrics on costs, revenues, and profit margins, including insights into transporting commodities from South America.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
