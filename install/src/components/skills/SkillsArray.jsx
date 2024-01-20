import React from 'react';

const PercentageLabel = ({ percentage }) => {
  let Level;

  if (percentage >= 0 && percentage < 10) {
    Level = 'Pre-Beginner';
  } else if (percentage >= 10 && percentage < 25) {
    Level = 'Beginner';
  } else if (percentage >= 25 && percentage < 40) {
    Level = 'Pre-Intermediate';
  } else if (percentage >= 40 && percentage < 60) {
    Level = 'Intermediate';
  } else if (percentage >= 60 && percentage < 80) {
    Level = 'Advanced';
  } else if (percentage >= 80 && percentage < 90) {
    Level = 'Expert';
  } else if (percentage >= 90 && percentage <= 100) {
    Level = 'Master';
  } else {
    Level = 'Invalid Percentage';
  }

  return <div className='text-xl'>{Level}</div>;
};

export default PercentageLabel;
