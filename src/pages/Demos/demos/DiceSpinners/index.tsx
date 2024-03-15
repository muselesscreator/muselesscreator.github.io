import 'react';
import DiceSpinner from './DiceSpinner';

const DiceSpinners = ({}) => {
  return (
    <div className="dice-spinners">
      <h3 className="h3 demo-title">Dice Spinners</h3>
      <DiceSpinner sides={6} />
      <DiceSpinner sides={8} />
      <DiceSpinner sides={10} />
      <DiceSpinner sides={12} />
      <DiceSpinner sides={20} />
    </div>
  );
};

export default DiceSpinners;
