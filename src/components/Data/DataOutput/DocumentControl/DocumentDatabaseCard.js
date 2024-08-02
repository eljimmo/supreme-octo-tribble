import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function DocumentDatabaseMediaCard() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // minHeight: '100vh',
        p: 2,
      }}
    >
      <Card sx={{ maxWidth: '100%', width: { xs: '100%', sm: 345 }, boxShadow: 3 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Document Database Media"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Document Database Media
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Access a comprehensive database of all your transportation documents. Organize and manage bills of lading, rate confirmations, receipts, invoices, and more with ease.
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
