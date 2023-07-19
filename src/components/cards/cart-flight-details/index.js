import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { Grid, Divider } from '@mui/material';
import flightLogo from '../../../images/flightlogo.png';
import planeImage from '../../../images/aeroplan.png';
import luggage from '../../../images/luggage.png';

const CartFlightDetails = () => {
  const [onhandleFlightDetail, setOnhandleFlightDetail] = useState(false);
  const flightDetail = () => {
    setOnhandleFlightDetail(!onhandleFlightDetail);
  };
  return (
    <Container
      className='fare-container'
      sx={{ width: '530px', marginBottom: '20px' }}
    >
      <Grid
        className='fare-rule-container'
        container
        mt={3}
        mb={3}
        style={{ justifyContent: 'space-between' }}
      >
        <Grid
          item
          xs={10}
          style={{ display: 'flex', alignItems: 'center', gap: '16px' }}
        >
          <div className='cart-text-bold'>
            <b>Departure</b>
          </div>
          <div className='cart-text-regular'>Sun, June 28</div>
        </Grid>
        <Grid item xs={2}>
          <div className='cart-text-alignend' onClick={() => flightDetail()}>
            Flight Detail
          </div>
        </Grid>
      </Grid>

      <Grid container ml={1} mt={2} mb={2} mr={1}>
        <Grid
          item
          xs={2}
          style={{ display: 'flex', alignItems: 'center', gap: '16px' }}
        >
          <div>
            <img src={flightLogo} alt='flightLogo' />
          </div>
        </Grid>
        <Grid
          item
          xs={3}
          style={{ display: 'flex', alignItems: 'center', gap: '16px' }}
        >
          <div className='cart-details'>
            <div className='time'>06:00 PM</div>
            <div className='place'>New Delhi</div>
          </div>
        </Grid>

        <Grid
          item
          xs={5}
          style={{ display: 'flex', alignItems: 'center', gap: '16px' }}
        >
          <div className='planeImage'>
            <Divider width={41} sx={{ borderStyle: 'dashed' }} />
            <label className='stoppage'>Direct</label>
            <Divider width={41} sx={{ borderStyle: 'dashed' }} />
            <img src={planeImage} alt='planeImage' />
          </div>
        </Grid>

        <Grid
          item
          xs={2}
          style={{ display: 'flex', alignItems: 'end', gap: '16px' }}
        >
          <div className='cart-details'>
            <div className='time'>06:00 PM</div>
            <div className='place'>New Delhi</div>
          </div>
        </Grid>
      </Grid>
      <Divider mt={3} sx={{ borderStyle: 'dashed' }} />
      <Grid container ml={1} mt={2} mb={1} mr={1}>
        <Grid
          item
          xs={8}
          style={{ display: 'flex', alignItems: 'center', gap: '16px' }}
        >
          <div className='planeImage'>
            <label className='text-qa'>QP-1109</label>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className='planeImage'>
            <img src={luggage} alt='luggage' />
            <label className='text-baggage'>baggage not included</label>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
export default CartFlightDetails;
