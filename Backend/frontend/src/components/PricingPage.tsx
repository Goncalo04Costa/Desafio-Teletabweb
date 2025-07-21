import {
  Alert,
  Card,
  CardActions,
  CardContent,
  Button,
  Grid,
  Typography,
  CircularProgress
} from '@mui/material';
import { useState } from 'react';
import { useSubscriptions } from '../hooks/useSubscriptions';


export default function PricingPage() {
  const { data, isLoading, isError } = useSubscriptions();
  const [openId, setOpenId] = useState<string | null>(null);

  if (isLoading) return <CircularProgress />;
  if (isError) return <Alert severity="error">Failed to load plans.</Alert>;
  return (
    <>
      <Grid container spacing={4}>
        {data!.map(plan => (
          <Grid item xs={12} sm={6} md={4} key={plan.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  {plan.name}
                </Typography>
                <Typography variant="h3" component="p">
                  {plan.currency} {plan.price}
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  {plan.description}
                </Typography>
                {/* Features list (optional per design) */}
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => setOpenId(plan.id)}
                >
                  Choose
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal */}

    </>
  );
}
