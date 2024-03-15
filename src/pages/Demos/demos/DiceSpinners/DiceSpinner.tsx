import WheelOfPrizes from './WheelOfPrizes';
import useDiceSpinnerData from './useDiceSpinnerData';

const DiceSpinner = ({ sides }: { sides: number }) => {
  const { 
    segments,
    segColors,
    value,
    onFinished,
    onSpin,
  } = useDiceSpinnerData(sides);
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
