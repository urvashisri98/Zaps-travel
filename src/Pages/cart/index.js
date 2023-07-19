import React from 'react';
import { Grid } from '@mui/material';
import planeImage from '../../images/plane.svg';
import CartFlightDetails from '../../components/cards/cart-flight-details';
import CartFareRules from '../../components/cards/cart-fare-rules';
import FlightStepper from '../../components/stepper';
import ChooseSeatInfo from '../../components/cards/cart-choose-seat-info';
import CartFairDetails from '../../components/cards/book-flight/cart-fair-detail';
import './style.css';

const Cart = () => {
  return (
    <>
      <FlightStepper />
      <div style={{background: '#FAFAFA'}} className ='main-container' >
        <Grid container>
          <Grid item md container>
            <Grid className='container-plain-background' direction='column'>
              <Grid item >
                <ChooseSeatInfo />
              </Grid>
              <Grid className='container-legroom_center' item >
                <CartFairDetails />
                <img src={planeImage} alt='planeImage' style={{height:'500px', marginLeft:'60px',marginTop:'10px'}}></img>
              </Grid>
            </Grid>
          </Grid>
          <Grid>
            <Grid direction='column' item >
              <CartFlightDetails />
              <CartFareRules />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default Cart;