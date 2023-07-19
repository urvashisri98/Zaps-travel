import React from 'react';
import Card from '@mui/material/Card';
import { Container, Grid, Radio } from '@mui/material';
import './style.css';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import iciciBankLogo from '../../../images/ICICI_Bank_Logo.svg';
import hdfcBankLogo from '../../../images/HDFC_Bank_Logo.svg';
import canaraBankLogo from '../../../images/Canara_Bank_Logo.svg';
import axisBankLogo from '../../../images/Axis_Bank_logo.svg';
import kotakBankLogo from '../../../images/Kotak_Mutual_Fund_logo.svg';
import sbiBankLogo from '../../../images/SBI_new_logo.svg';
const NetBanking = () => {
  const customStyles = {
    border: '1px solid #D0D5DD',
    borderRadius: '10px',
    padding: '1px',

    /* ... */
  };
  const bankNames = [
    {
      label: 'SBI',
      value: 'SBi',
    },
    {
      label: 'ICICI',
      value: 'ICICI',
    },
    {
      label: 'HDFC',
      value: 'HDFC',
    },
    {
      label: 'AXIS',
      value: 'AXIS',
    },
  ];

  return (
    <>
      <Container>
        <Grid container direction='column'>
          <Grid item>
            <h3 className='netbanking-head-text'>Net Banking</h3>
          </Grid>
          <Grid item>
            <div>
              <p className='netbanking-selectBank-text'>Select Bank</p>
              <TextField
                className='netbanking-select-bank'
                id='outlined-select-month'
                select
                style={{ width: '455px' }}
                label='Select Bank'
                InputProps={{
                  style: customStyles,
                }}
                fullWidth={true}
                size='small'
              >
                {bankNames.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </Grid>

          <Grid item>
            <p className='netbanking-popularBank-text'>Popular Bank</p>
          </Grid>
          <Grid
            item
            className='netbanking-card-banks'
            sx={{ marginTop: '32px' }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Card
                  className='netbanking-card-layout'
                  raised={false}
                  sx={{
                    borderRadius: '10px',
                  }}
                >
                  <Radio></Radio>{' '}
                  <img src={iciciBankLogo} alt='icici_logo'></img>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card
                  className='netbanking-card-layout'
                  sx={{
                    borderRadius: '10px',
                  }}
                >
                  <Radio></Radio>
                  <img src={hdfcBankLogo} alt='icici_logo'></img>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Card
                  className='netbanking-card-layout'
                  sx={{
                    borderRadius: '10px',
                  }}
                >
                  <Radio></Radio>
                  <img src={kotakBankLogo} alt='icici_logo'></img>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card
                  className='netbanking-card-layout'
                  sx={{
                    borderRadius: '10px',
                  }}
                >
                  <Radio></Radio>
                  <img src={axisBankLogo} alt='icici_logo'></img>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Card
                  className='netbanking-card-layout'
                  sx={{
                    borderRadius: '10px',
                  }}
                >
                  <Radio></Radio>
                  <img src={canaraBankLogo} alt='icici_logo'></img>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card
                  className='netbanking-card-layout'
                  sx={{
                    borderRadius: '10px',
                  }}
                >
                  <Radio></Radio>
                  <img src={sbiBankLogo} alt='icici_logo'></img>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <button className='netbanking-button'>Pay Now</button>
          </Grid>
          <Grid item>
            <p className='netbanking-continue-text'>
              By continuing to pay, I understand and agree with the{' '}
              <a href='www.' style={{ textDecoration: 'none' }}>
                privacy policy
              </a>
              , the <br></br>
              <a href='www.' style={{ textDecoration: 'none' }}>
                user agreement
              </a>{' '}
              and terms of service of{' '}
              <a href='www.' style={{ textDecoration: 'none' }}>
                zapstravel
              </a>
            </p>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default NetBanking;
