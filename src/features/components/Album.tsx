import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Album(props: any) {
  const { artistName, collectionName, primaryGenreName, artworkUrl100 } =
    props.recordInfo;

  return (
    <Card
      variant='outlined'
      sx={{ display: 'flex', my: 2, borderRadius: 5, px: 3 }}
    >
      <CardMedia component='img' sx={{ width: 151 }} image={artworkUrl100} />

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component='div' variant='h5'>
            {collectionName}
          </Typography>
          <Typography
            variant='subtitle1'
            color='text.secondary'
            component='div'
          >
            {artistName}
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <Typography variant='h6' color='text.secondary'>
              Genre Name:
            </Typography>
            <Typography variant='h6' color='text.primary' sx={{ ml: 2 }}>
              {primaryGenreName}
            </Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}
