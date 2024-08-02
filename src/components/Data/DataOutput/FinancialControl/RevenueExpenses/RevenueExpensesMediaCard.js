import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function RevenueExpensesMediaCard() {
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
          image="/static/images/cards/revenue-expenses.jpg"
          title="Revenue and Expenses"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Revenue and Expenses Panel
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Monitor the financial health of your logistics and transportation operations. Track revenue and expenses, and gain insights into the profitability of transporting commodities from South America.
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
