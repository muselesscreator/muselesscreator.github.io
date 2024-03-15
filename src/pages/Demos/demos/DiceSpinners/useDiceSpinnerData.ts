import React from 'react';

const SEG_COLORS = [
  '#DAA520',
  '#EEE8AA'
];

const useDiceSpinnerData = (sides: number) => {
  const segments = Array(sides).fill(0).map((_, i) => `${i + 1}`);
  const segColors = Array(sides).fill(0).map((_, i) => SEG_COLORS[i % SEG_COLORS.length]);
  const [value, setValue] = React.useState('');
  const onFinished = (winner: string) => {
    console.log({ winner });
    setValue(winner);
  };
  const onSpin = () => {
    setValue('...');
  };
  return {
    segments,
    segColors,
    value,
    onFinished,
    onSpin
  };
};

export default useDiceSpinnerData;
