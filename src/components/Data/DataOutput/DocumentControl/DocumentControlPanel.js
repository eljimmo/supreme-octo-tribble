import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import DocumentControlMediaCard from './DocumentControlCard';
import UploadViewSearchMediaCard from './UploadViewSearchCard';
// import DocumentDatabaseMediaCard from './DocumentDatabaseCard';
// import LatestUploadedlMediaCard from './LatestUploadedCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function DocumentControl() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <Item>
            <DocumentControlMediaCard/>

          </Item>
          
        </Grid>
        <Grid item xs={12}>
          <Item>
            <UploadViewSearchMediaCard/>
          </Item>
        </Grid>
        {/* <Grid item xs={6}>
          <Item>
            <DocumentDatabaseMediaCard/>
            </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <LatestUploadedlMediaCard/>
            </Item>
        </Grid> */}
      </Grid>
    </Box>
  );
}
