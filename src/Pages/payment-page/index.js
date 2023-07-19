import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Upi from '../../components/payment/upi';
import DebitCard from '../../components/payment/debit-card';
import NetBanking from '../../components/payment/net-banking';
import { useMediaQuery } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Payment() {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={isMobile ?{ height: '200px', display:'flex', flexDirection:'column'}:{ height: '800px', display:'flex', flexDirection:'row',}}>
        <Tabs
          orientation={isMobile ?'horizontal': 'vertical'} 
          variant='scrollable'
          value={value}
          onChange={handleChange}
          aria-label='Payment Methods'

          sx={isMobile?{ borderRight: 1, borderColor: 'divider', bgcolor: '#F2F7FB', width:'700px'}:{ borderRight: 1, borderColor: 'divider', bgcolor: '#F2F7FB',}}>
          <Tab label='Payment Method' color='black' disabled={true} disableRipple={true} />
          <Tab label='Upi' {...a11yProps(1)} />
          <Tab label='Debit/Credit card' {...a11yProps(2)} />
          <Tab label='Net Banking ' {...a11yProps(3)} />

        </Tabs>
        <TabPanel value={value} index={1}>
          <Upi />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <DebitCard />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <NetBanking />
        </TabPanel>
      </Box>
    </>
  );
}