import React from 'react';
import AlreadyMember from '../../components/personal-details/already-member';
import AddContactDetails from '../../components/personal-details/add-contact-details';
import AddPersonalDetails from '../../components/personal-details/add-personal-details';
import FlightStepper from '../../components/stepper';
import './style.css';
import { Card, Grid } from '@mui/material';
import CartFlightDetails from '../../components/cards/cart-flight-details';
import CartFareRules from '../../components/cards/cart-fare-rules';
const PersonalDetails = () => {
  return (
    <>
      <FlightStepper />
      <div
        style={{ background: '#FAFAFA', display: 'flex' }}
        className='personal-details-mainContainer'
      >
        <Grid container>
          <Grid item container>
            <Grid direction='column'>
              <Grid item>
                <AlreadyMember />
              </Grid>
              <Grid item>
                <Card
                  className='personal-details-cardView'
                  style={{ borderRadius: '10px' }}
                >
                  <AddContactDetails />
                </Card>
              </Grid>

              <Grid item>
                <Card
                  className='personal-details-cardView'
                  style={{ borderRadius: '10px' }}
                >
                  <AddPersonalDetails />
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item container>
            <Grid direction='column'>
              <Grid item ml={6}>
                <CartFlightDetails />
              </Grid>
              <Grid item ml={6}>
                <CartFareRules />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default PersonalDetails;
