import Results from './features/components/Results';
import Search from './features/components/Search';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline enableColorScheme />
      <Container component='main' maxWidth='md'>
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
