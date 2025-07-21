import { ThemeProvider, createTheme, Container } from '@mui/material';
import PricingPage from './components/PricingPage';

const theme = createTheme({
  // Customize or leave default; feel free to theme‑extend
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <PricingPage />
      </Container>
    </ThemeProvider>
  );
}
