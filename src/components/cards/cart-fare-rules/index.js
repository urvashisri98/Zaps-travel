import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { Grid, Divider } from '@mui/material';
import cancelmark from '../../../images/cancelmark.svg';
import feemark from '../../../images/feemark.svg';
import DailogCancelChanges from '../dailog-cancel-changes';

const CartFareRules = () => {
  const [openCard, setOpenCard] = useState(false);
  const clickCancelChanges = () => {
    setOpenCard(!openCard);
  };
  return (
    <>
      <Container className='fare-container' maxWidth='sm'>
        <Grid
          className='fare-rule-container'
          container
          mt={3}
          mb={3}
          style={{ justifyContent: 'space-between' }}
        >
          <Grid className='fare-rule' item sx={1}>
            <label>Fare Rules</label>
          </Grid>
          <Grid className='cancel-rule' item sx={1}>
            <div
              className='cart-text-alignend'
              onClick={()=>clickCancelChanges()}
            >
              Cancel & Changes
            </div>
          </Grid>
        </Grid>

        <Grid
          className='direction-column'
          container
          mt={3}
          mb={3}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
          }}
        >
          <Grid
            style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}
          >
            <Grid>
              <img src={cancelmark} alt='cancelmark' />
            </Grid>
            <Grid>
              <label className='non-refundable'>Non-refundable</label>
            </Grid>
          </Grid>
          <br></br>
          <Grid
            style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}
          >
            <Grid>
              <img src={feemark} alt='feemark' />
            </Grid>
            <Grid>
              <label className='changable-fee'>Changeable with fees</label>
            </Grid>
          </Grid>
        </Grid>

        <Divider mt={2} md={1} sx={{ borderStyle: 'dashed' }} />

        <Grid
          className='fare-rule-container'
          container
          mt={3}
          mb={3}
          style={{ justifyContent: 'space-between' }} // Aligns items to left and right
        >
          <Grid className='fare-medium-text-black' item sx={1}>
            <label>Base fare (1 traveller)</label>
          </Grid>
          <Grid className='fare-medium-text-black' item sx={1}>
            <label>₹3,420</label>
          </Grid>
        </Grid>

        <Grid
          className='fare-rule-container'
          container
          mt={3}
          mb={3}
          style={{ justifyContent: 'space-between' }}
        >
          <Grid className='fare-medium-text-black' item sx={1}>
            <label>Taxes and fees</label>
          </Grid>
          <Grid className='fare-medium-text-black' item sx={1}>
            <label>₹1,117</label>
          </Grid>
        </Grid>

        <Divider mt={3} md={3} sx={{ borderStyle: 'dashed' }} />

        <Grid
          className='fare-rule-container'
          container
          mt={3}
          mb={1}
          style={{ justifyContent: 'space-between' }}
        >
          <Grid className='fare-rule' item sx={1}>
            <label>Total Price</label>
          </Grid>
          <Grid className='fare-rule' item sx={1}>
            <label>₹4,537</label>
          </Grid>
        </Grid>
      </Container>
      <DailogCancelChanges
        title=''
        openCard={openCard}
        setOpenCard={setOpenCard}
      />
    </>
  );
};
export default CartFareRules;
