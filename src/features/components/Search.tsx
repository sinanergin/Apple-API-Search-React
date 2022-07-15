import { useDispatch } from 'react-redux';
import { fetchDataThunk } from '../helpers/fetchDataThunk';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

export default function Search() {
  const dispatch = useDispatch();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const queryValue: any = data.get('queryValue') && data.get('queryValue');
    const fetchFunction = await fetchDataThunk(queryValue);

    fetchFunction(dispatch);
  };

  return (
    <Container component='main' maxWidth='lg' sx={{ mb: 4 }}>
      {/* <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      > */}
      <Grid container spacing={2}>
        <Grid item xs={6} md={12}>
          <Typography component='h1' variant='h4' align='center'>
            iTunes music library search
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <Grid item xs={6} md={8}>
            <TextField
              id='standard-search'
              label='Please enter song, album, singer name... '
              type='search'
              variant='standard'
              color='primary'
              focused
              name='queryValue'
            />
          </Grid>
          <Grid xs={6} md={4}>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              endIcon={<SearchTwoToneIcon />}
            >
              Search
            </Button>
          </Grid>
        </form>
      </Grid>
      {/* </Box> */}
    </Container>
  );
}
