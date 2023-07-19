import React from 'react';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import freefair from '../../../../images/freefair.svg';
import offair from '../../../../images/offair.svg';
import tffair from '../../../../images/tffair.svg';
import twehunfair from '../../../../images/twehunfair.svg';
import fifhuntotwehunfair from '../../../../images/fifhuntotwehunfair.svg';
import extralargefair from '../../../../images/extralargefair.svg';
import thffair from '../../../../images/thffair.svg';

const CartFairDetails = () => {
  return (
    <Container>
      <Card className='fair-detail'>
        <Grid
          className='direction-column'
          container
          mt={1}
          mb={1}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
          }}
        >
          <Grid
            ml={1}
            style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}
          >
            <Grid>
              <img src={freefair} alt='freefair' />
            </Grid>
            <Grid>
              <label className='fair-detail-text'>Free</label>
            </Grid>
          </Grid>
          <br></br>
          <Grid
            ml={1}
            style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}
          >
            <Grid>
              <img src={offair} alt='offair' />
            </Grid>
            <Grid>
              <label className='fair-detail-text'>₹150</label>
            </Grid>
          </Grid>
          <br></br>
          <Grid
            ml={1}
            style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}
          >
            <Grid>
              <img src={tffair} alt='tffair' />
            </Grid>
            <Grid>
              <label className='fair-detail-text'>₹250</label>
            </Grid>
          </Grid>
          <br></br>
          <Grid
            ml={1}
            style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}
          >
            <Grid>
              <img src={thffair} alt='thffair' />
            </Grid>
            <Grid>
              <label className='fair-detail-text'>₹350</label>
            </Grid>
          </Grid>
          <br></br>
          <Grid
            ml={1}
            style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}
          >
            <Grid>
              <img src={twehunfair} alt='twehunfair' />
            </Grid>
            <Grid>
              <label className='fair-detail-text'>₹1,200</label>
            </Grid>
          </Grid>
          <br></br>
          <Grid
            ml={1}
            style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}
          >
            <Grid>
              <img src={fifhuntotwehunfair} alt='fifhuntotwehunfair' />
            </Grid>
            <Grid>
              <label className='fair-detail-text'>₹1,500 - ₹2,500</label>
            </Grid>
          </Grid>
          <br></br>

          <Grid
            ml={1}
            style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}
          >
            <Grid>
              <img src={extralargefair} alt='extralargefair' />
            </Grid>
            <Grid>
              <label className='fair-detail-text'>Extra Legroom</label>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};
export default CartFairDetails;
