import Results from './features/components/Results';
import Search from './features/components/Search';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline enableColorScheme />
      <Container component='main' maxWidth='sm' sx={{ mb: 4 }}>
        <div className='App'>
          <Search />
          <Divider />
          <Results />
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
