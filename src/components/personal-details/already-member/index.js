import React from 'react';
import './style.css';
import profileImageBlue from '../../../images/profile-circle-blue.svg';
import { Grid } from '@mui/material';

const AlreadyMember = () => {
  return (
    <>
      <div className='parent-div'>
        <Grid container>
          <Grid item xs={10}>
            <div style={{ display: 'flex', marginLeft: '20px' }}>
              <img
                src={profileImageBlue}
                style={{ padding: '0px' }}
                alt='defulat profile'
              ></img>
              <h3
                className='alreadymember-head'
                style={{ marginLeft: '12px', marginTop: '-2px' }}
              >
                Already an Zapstravel member ?
              </h3>
            </div>
            <div style={{ marginTop: '-10px' }}>
              <label style={{}} className='sign-in-text'>
                Sign in now and speed up your booking!
              </label>
            </div>
          </Grid>

          <Grid item xs={2} className='sign-in-button-position'>
            <div>
              <button className='sign-in-button-layout'>Sign in</button>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default AlreadyMember;
