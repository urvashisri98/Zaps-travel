import React from 'react';
import { Container, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import './style.css';

const customStyles = {
  border: '1px solid #D0D5DD',
  borderRadius: '10px',
  padding: '1px',
  /* ... */
};

const months = [
  {
    label: '1',
    value: '01',
  },
  {
    label: '2',
    value: '02',
  },
  {
    label: '3',
    value: '03',
  },
  {
    label: '4',
    value: '04',
  },
  {
    label: '5',
    value: '05',
  },
  {
    label: '6',
    value: '06',
  },
  {
    label: '7',
    value: '07',
  },
  {
    label: '8',
    value: '08',
  },
  {
    label: '9',
    value: '09',
  },
  {
    label: '10',
    value: '10',
  },
  {
    label: '11',
    value: '11',
  },
  {
    label: '12',
    value: '12',
  },
];

const year = [
  {
    label: '2024',
    value: '2024',
  },
  {
    label: '2025',
    value: '2025',
  },
  {
    label: '2026',
    value: '2026',
  },
  {
    label: '2027',
    value: '2027',
  },
  {
    label: '2028',
    value: '2028',
  },
  {
    label: '2029',
    value: '2039',
  },
  {
    label: '2030',
    value: '2030',
  },
];

const DebitCard = () => {
  return (
    <>
      <Container>
        <Grid Container>
          <Grid item>
            <h4>Enter Card Deatils</h4>
          </Grid>
          <Grid item>
            <Grid mb={1}>Card number</Grid>
            <TextField
              className='debit-number'
              fullWidth
              InputProps={{
                style: customStyles,
              }}
              label='Enter Card'
              size='small'
            />
          </Grid>
          <Grid item>
            <Grid container mt={4}>
              <Grid item xs={4} mr={0}>
                <Grid mb={1}>Expiry Month</Grid>
                <TextField
                  className='debit-month-expiry'
                  id='outlined-select-month'
                  select
                  label='Month'
                  InputProps={{
                    style: customStyles,
                  }}
                  fullWidth={true}
                  size='small'
                >
                  {months.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={6} ml={10}>
                <Grid mb={1}>Expiry Year </Grid>
                <TextField
                  id='outlined-select-month'
                  select
                  label='Year'
                  InputProps={{
                    style: customStyles,
                  }}
                  fullWidth={true}
                  size='small'
                >
                  {year.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid mt={3}>Card holder name</Grid>
            <TextField
              fullWidth
              InputProps={{
                style: customStyles,
              }}
              placeholder='Enter card holder name'
              size='small'
            />
          </Grid>
          <Grid item>
            <Grid mb={0.5} mt={2}>
              CVV
            </Grid>
            <TextField
              fullWidth
              InputProps={{
                style: customStyles,
              }}
              placeholder='CVV'
              size='small'
            />
          </Grid>
          <Grid item mt={10}>
            <Button
              className='debit-button'
              style={{ borderRadius: 10 }}
              fullWidth
              variant='contained'
            >
              Pay now
            </Button>
          </Grid>
          <Grid container direction='row'>
            <Grid item mt={3}>
              <FormControlLabel control={<Checkbox />}></FormControlLabel>
            </Grid>
            <Grid item mt={1}>
              <p>
                {' '}
                I understand and agree to the rules and restrictions of this
                fare, the<br></br>
                <a href='www.www.com'>booking policy</a> , the{' '}
                <a href='www.www.com'>privacy policy</a> and the{' '}
                <a href='www.www.com'>terms and conditions</a> of
                <br></br> Zapstravel
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DebitCard;
