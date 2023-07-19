import React from 'react';
import './style.css';
import circularCheckGrey from '../../../images/circular_check_grey.svg';
import { Grid, TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import calendarIcon from '../../../images/calendar.svg';

const nationality = [
  {
    value: 'India',
    label: 'India',
  },
  {
    value: 'Usa',
    label: 'Usa',
  },
  {
    value: 'Germany',
    label: 'Germany',
  },
  {
    value: 'Argentina',
    label: 'Argentina',
  },
];

const customStyles = {
  borderRadius: '10px',
};
const AddPersonalDetails = () => {
  return (
    <>
      <div className='addPersonalDetails-parent-div' style={{ width: '600px' }}>
        <div style={{ display: 'flex', marginLeft: '20px' }}>
          <img
            src={circularCheckGrey}
            style={{ padding: '0px' }}
            alt='circular tick'
          ></img>
          <h3 style={{ marginLeft: '12px' }}>Adult 1:</h3>
        </div>

        <Grid container>
          <Grid item>
            <button className='button-background'>Mr.</button>
          </Grid>
          <Grid item>
            <button className='button-background'>Ms.</button>
          </Grid>
          <Grid item>
            <button className='button-background'>Mrs.</button>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item sx={{ marginTop: '32px' }}>
            <Grid container spacing={2} marginLeft={1}>
              <Grid item xs={6}>
                <div>
                  <label style={{ marginRight: '80px' }}> first name</label>
                  <TextField
                    size='small'
                    className='name-input'
                    label='Enter Your first name'
                    InputProps={{
                      style: customStyles,
                    }}
                    fullWidth
                    style={{ marginTop: '10px', marginBottom: '10px' }}
                  ></TextField>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div>
                  <label style={{ marginRight: '20px' }}> middle name</label>
                  <TextField
                    size='small'
                    className='name-input'
                    label='Enter Your middle name'
                    InputProps={{
                      style: customStyles,
                    }}
                    fullWidth
                    style={{ marginTop: '10px' }}
                  ></TextField>
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={2} marginLeft={1}>
              <Grid item xs={6}>
                <label style={{ marginRight: '20px' }}> last name</label>
                <TextField
                  size='small'
                  className='name-input'
                  label='Enter Your last name'
                  InputProps={{
                    style: customStyles,
                  }}
                  fullWidth
                  style={{ marginTop: '10px' }}
                ></TextField>
              </Grid>
              <Grid item xs={6}>
                <label style={{ marginRight: '20px' }}> date of birth</label>
                <TextField
                  size='small'
                  className='name-input'
                  InputProps={{
                    style: customStyles,
                    endAdornment: (
                      <InputAdornment
                        position='End'
                        sx={{ marginRight: '20px' }}
                      >
                        <img src={calendarIcon}></img>
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                  style={{ marginTop: '10px' }}
                ></TextField>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <div style={{ width: '600px', margin: '20px' }}>
          <label>Nationality</label>
          <TextField
            fullWidth
            size='small'
            select
            SelectProps={{
              native: true,
            }}
            label='Select Nationality'
            InputProps={{
              style: customStyles,
            }}
            style={{ marginTop: '10px' }}
          >
            {nationality.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </div>

        <Grid container>
          <Grid item>
            <button className='button-background'>Passport</button>
          </Grid>
          <Grid item>
            <button className='button-background'>National ID</button>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sx={{ marginTop: '32px' }}>
            <Grid container spacing={2} marginLeft={1}>
              <Grid item xs={6}>
                <div>
                  <label style={{ marginRight: '20px' }}>
                    {' '}
                    Passport number
                  </label>
                  <TextField
                    size='small'
                    className='name-input'
                    label='Passport Number'
                    InputProps={{
                      style: customStyles,
                    }}
                    fullWidth
                    style={{ marginTop: '10px', marginBottom: '10px' }}
                  ></TextField>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div>
                  <label style={{ marginRight: '20px' }}>Issuing country</label>
                  <TextField
                    size='small'
                    className='name-input'
                    InputProps={{
                      style: customStyles,
                    }}
                    fullWidth
                    style={{ marginTop: '10px' }}
                  ></TextField>
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={2} marginLeft={1}>
              <Grid item xs={6}>
                <label style={{ marginRight: '20px' }}> Expiry Date</label>
                <TextField
                  size='small'
                  className='name-input'
                  InputProps={{
                    style: customStyles,
                    endAdornment: (
                      <InputAdornment
                        position='End'
                        sx={{ marginRight: '20px' }}
                      >
                        <img src={calendarIcon}></img>
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                  style={{ marginTop: '10px' }}
                ></TextField>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default AddPersonalDetails;
