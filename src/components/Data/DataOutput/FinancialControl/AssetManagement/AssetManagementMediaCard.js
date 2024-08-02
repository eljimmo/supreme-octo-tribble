import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function AssetManagementMediaCard() {
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
          image="/static/images/cards/asset-management.jpg"
          title="Asset Management"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Asset Management Panel
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Optimize the management of your logistics and transportation assets. Track and maintain vehicles, equipment, and other assets to ensure efficiency and reliability, including those used for transporting commodities from South America.
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
