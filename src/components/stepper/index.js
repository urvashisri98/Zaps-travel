import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import circlecheck from '../../images/circlecheck.svg';
import oneunselect from '../../images/1.svg';
import twounselect from '../../images/2.svg';
import threeunselect from '../../images/3.svg';
import fourunselect from '../../images/4.svg';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 12,
    left: 'calc(-50% + 20px)',
    right: 'calc(50% + 20px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
      background:'#0088FF',
      margin:4
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      background:'#0088FF',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    margin:4,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#E6EAEE',
    borderRadius: 1,
  },
}));
  
  
const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#E6EAEE',
  zIndex: 1,
  color: '#fff',
  width: 30,
  height: 30,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    background:'#0088FF',
  }),
  ...(ownerState.completed && {
    background:'#0088FF'
  }),
}));
  
function ColorlibStepIcon(props) {
  const { active, completed, className } = props;
  
  const iconscomleted = {
    1:  <img src={circlecheck}/>, 
    2: <img src={circlecheck} />,
    3: <img src={circlecheck} />,
    4: <img src={circlecheck} />,
  };
  const iconsinact = {
    1:  <img src={oneunselect} />,
    2: <img src={twounselect} />,
    3: <img src={threeunselect} />,
    4: <img src={fourunselect} />,
  };
  
  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {completed ? (
        iconscomleted[String(props.icon)]
      ) : active ? (
        iconsinact[String(props.icon)]
      ) : (
        iconsinact[String(props.icon)]
      )}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
     * Whether this step is active.
     * @default false
     */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
  completed: PropTypes.bool,
  /**
     * The label displayed in the step icon.
     */
  icon: PropTypes.node,
};

const steps = [
  'Choose your flight',
  'Enter your details',
  'Seat selection',
  'Final details',
];

export default function FlightStepper() {
  return (
    <Stack sx={{ width: '100%' }} spacing={4} margin={2}>
      <Stepper alternativeLabel activeStep={1} margin={2}connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}