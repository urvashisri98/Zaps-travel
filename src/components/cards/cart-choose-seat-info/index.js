import React from 'react';
import Card from '@mui/material/Card';
import { Container, Grid } from '@mui/material';

const ChooseSeatInfo = () => {
  return (
    <>
      <Container>
        <Card className='legroom-card'>
          <Grid Container>
            <Grid item>
              <p className='legroom-text'>
                Need more legroom ? choose the seat you want
              </p>
            </Grid>
            <Grid item>
              <p className='legroom-seat-text'>
                Seats are cheaper when pre booked
              </p>
            </Grid>
            <Grid item>
              <span style={{ marginRight: 10 }}>onward</span>
              <span style={{ fontWeight: 'bold' }}>Delhi</span>{' '}
              <span>Bengaluru</span>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </>
  );
};
export default ChooseSeatInfo;
