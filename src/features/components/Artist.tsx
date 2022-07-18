import { Button, CardActions, Link } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

export default function Artist(props: any) {
  const { artistName, artistLinkUrl, primaryGenreName } = props.recordInfo;

  return (
    <div data-search-item>
      <Card
        variant='outlined'
        sx={{
          width: 1,
          my: 2,
          borderRadius: 5,
          px: 3,
        }}
      >
        <CardContent>
          <Typography gutterBottom variant='h4' color='success.plainColor'>
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
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Link href={artistLinkUrl} underline='none' target='_blank'>
            <Button size='medium'>Learn More</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}
