import React from 'react';
import './style.css';
import circularCheckGrey from '../../../images/circular_check_grey.svg';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import mailIcon from '../../../images/mail.svg';

const customStyles = {
  border: '1px solid #D0D5DD',
  borderRadius: '10px',
  padding: '1px',
  /* ... */
};

const countryCode = [
  {
    value: '+91',
    label: '+91',
  },
  {
    value: '+1',
    label: '+1',
  },
  {
    value: '+3',
    label: '+3',
  },
  {
    value: '+4',
    label: '+4',
  },
];
const AddContactDetails = () => {
  return (
    <>
      <div>
        <div style={{ display: 'flex', marginLeft: '20px' }}>
          <img
            src={circularCheckGrey}
            style={{ padding: '0px' }}
            alt='circulat tick'
          ></img>
          <h3 className='addcontacts-head' style={{ marginLeft: '12px' }}>
            Add contact Details
          </h3>
        </div>

        <div>
          <p className='contactDetails-ticket-text'>
            E-ticket will be sent to this email address and phone number
          </p>
        </div>
        <div>
          <Grid
            container
            sx={{ marginLeft: '20px' }}
            className='add-mobile-container'
          >
            <Grid item>
              <h5>Mobile Number</h5>
              <Grid container>
                <Grid item>
                  <TextField
                    defaultValue='+91'
                    InputProps={{
                      style: customStyles,
                    }}
                    size='small'
                    sx={{ width: '105px' }}
                    select
                    SelectProps={{
                      native: false,
                    }}
                  >
                    {countryCode.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </Grid>
                <Grid item sx={{ marginLeft: '20px' }}>
                  <TextField
                    InputProps={{
                      style: customStyles,
                    }}
                    size='small'
                    sx={{ width: '196px' }}
                    variant='outlined'
                    fullWidth
                    label='Mobile Number'
                  ></TextField>
                </Grid>
              </Grid>
            </Grid>

            <Grid item sx={{ marginLeft: '20px', width: '280px' }}>
              <h5>Email</h5>
              <TextField
                id='outlined-basic'
                type='email'
                variant='outlined'
                fullWidth
                placeholder='Enter your Email Id'
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position='start'
                      sx={{ marginLeft: '20px' }}
                    >
                      <img src={mailIcon}></img>
                    </InputAdornment>
                  ),
                  style: customStyles,
                }}
                size='small'
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default AddContactDetails;
