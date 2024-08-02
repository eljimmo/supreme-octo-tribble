import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function CashFlowManagementMediaCard() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
      }}
    >
      <Card
        sx={{
          width: '100%',
          maxWidth: 360,
          boxShadow: 6,
          borderRadius: 2,
          overflow: 'visible',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: 12,
          },
        }}
      >
        <CardMedia
          sx={{ height: 180 }}
          image="/static/images/cards/cash-flow-management.jpg"
          title="Cash Flow Management"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
            Cash Flow Management Panel
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Effectively manage the cash flow of your logistics and transportation operations. Monitor inflows and outflows, and ensure financial stability while transporting commodities from South America.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" color="primary">
            Learn More
          </Button>
          <Button size="small" variant="outlined" color="secondary">
            Share
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
