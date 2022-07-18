import { useDispatch } from 'react-redux';
import { fetchDataThunk } from '../helpers/fetchDataThunk';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
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
    <Box sx={{ mt: 10, mb: 5 }}>
      <Typography component='h1' variant='h2' align='center'>
        iTunes music library
      </Typography>

      <form onSubmit={handleSubmit}>
        <Box sx={{ my: 8, display: 'flex', justifyContent: 'space-around' }}>
          <TextField
            id='outlined-search'
            label='Please enter song, album, singer name...'
            type='search'
            focused
            fullWidth
            name='queryValue'
          />
          <Button
            type='submit'
            variant='contained'
            size='large'
            color='primary'
            endIcon={<SearchTwoToneIcon />}
            sx={{ mx: 2 }}
          >
            Search
          </Button>
        </Box>
      </form>
    </Box>
  );
}
