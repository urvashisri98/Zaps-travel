import React from 'react';
import './style.css';
import { Container, Divider, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import qrImage from '../../../images/qr_image.png';

const customStyles = {
  border: '1px solid #D0D5DD',
  borderRadius: '12px',
  padding: '1px',
  /* ... */
};

const Upi = () => {
  return (
    <>
      <Container>
        <Grid Container>
          <Grid item mt={2}>
            Enter UPI Id
          </Grid>
          <Grid item mt={1}>
            <TextField
              InputProps={{
                style: customStyles,
              }}
              className='Upi-input'
              placeholder='Enter Card Number'
              size='small'
            />
          </Grid>
          <Grid item>
            <p className='upi-payment-request-text'>
              Payment request will be sent to the phone number linked <br></br>
              to your UPI ID
            </p>
          </Grid>
          <Grid item>
            <button className='Upi-button'>verify and Pay</button>
          </Grid>

          <Grid
            item
            mt={4}
            direction='row'
            ml={1}
            style={{ display: 'flex', alignItems: 'center', gap: '16px' }}
          >
            <Divider
              width={150}
              sx={{
                border: 1,
                borderColor: '#D0D5DD',
                borderStyle: 'dashed',
                borderSpacing: '10px',
              }}
            />

            <label className='upi-or-text'>OR</label>
            <Divider
              width={150}
              sx={{ border: 1, borderColor: '#D0D5DD', borderStyle: 'dashed' }}
            />
          </Grid>
          <Grid item ml={18} mt={5}>
            <label className='upi-scan-qr-text'>Scan Qr Code</label>
          </Grid>
          <Grid item>
            <div className='upi-qr-container'>
              <img className='upi-qr-image' src={qrImage} alt='qr image'></img>
              <button className='btn'>Show QR Code</button>
            </div>
          </Grid>
          <Grid>
            <p className='upi-continue-text'>
              By continuing to pay, I understand and agree with the privacy
              policy, <br></br>the user agreement and terms of service of
              zapstravel
            </p>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Upi;
