import React, { useState } from'react';
import PropTypes from'prop-types';
import { Dialog, DialogContent } from'@mui/material';
import CloseIcon from'@mui/icons-material/Close';
import'./style.css';

const DailogCancelChanges = ({ openCard, setOpenCard }) => {
  const [openCancellationCharges, setOpenCancellationCharges] = useState({
    cancellation: false,
    dateChanges: false,
  });
  const onOptionClick = (option) => {
    setOpenCancellationCharges(option);
  };
  return (
    <>
      <Dialog open={openCard} onClose={() => setOpenCard(false)}>
        <DialogContent sx={{ padding: 2 }}>
          <div className='cancel-changes-container'>
            <div className='cancel-changes-dailogBox'>
              {/* firstdiv */}
              <div className='cancel-changes-heading'>
                <label className='fare-rules'>Fare rules</label>
                <CloseIcon onClick={() => setOpenCard(false)} />
              </div>
              {/* second div */}
              <div className='cancellation-datechanges-charges'>
                <label
                  className={
                    openCancellationCharges ==='cancellation'
                      ?'cancellation-charges'
                      :'cancellation-charges selected'
                  }
                  style={{ borderBottom:'1px solid #0088FF' }}
                  onClick={() => onOptionClick('cancellation')}
                >
                  Cancellation charges
                </label>
                <label
                  className={
                    openCancellationCharges ==='dateChanges'
                      ?'cancellation-charges'
                      :'cancellation-charges selected'
                  }
                  style={{ borderBottom:'1px solid #0088FF' }}
                  onClick={() => onOptionClick('dateChanges')}
                >
                  Date changes charges
                </label>
              </div>
              {/* third div */}
              <div></div>
              {/* fourth div */}
              <div></div>
              {/* fifth div */}
              <div></div>
              {/* sixth div */}
              <div></div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DailogCancelChanges;

DailogCancelChanges.propTypes = {
  openCard: PropTypes.bool,
  setOpenCard: PropTypes.bool,
};
