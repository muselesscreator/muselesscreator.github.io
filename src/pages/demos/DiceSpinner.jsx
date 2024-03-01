import React from 'react';

import WheelOfPrizes from './WheelOfPrizes';

const SEG_COLORS = [
  '#DAA520',
  '#EEE8AA'
];
const DiceSpinner = ({ sides }) => {
  const segments = Array(sides).fill(0).map((_, i) => `${i + 1}`);
  const segColors = Array(sides).fill(0).map((_, i) => SEG_COLORS[i % SEG_COLORS.length]);
  const [value, setValue] = React.useState('');
  const onFinished = (winner) => {
    console.log({ winner });
    setValue(winner);
  };
  const onSpin = () => {
    setValue('...');
  };
  return (
    <div
      className="dice-spinner"
    >
      <h4 className="h4">D{sides} value: {value}</h4>
      <WheelOfPrizes
        segments={segments}
        segColors={segColors}
        onFinished={onFinished}
        onSpin={onSpin}
        primaryColor="white"
        contrastColor="black"
        buttonText="Spin"
        isOnlyOnce={false}
        size={120}
        upDuration={200}
        downDuration={400}
      />
    </div>
  );
};

export default DiceSpinner;
