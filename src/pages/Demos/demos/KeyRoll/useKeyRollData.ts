import React from 'react';

import { scaleKeys, toneKeys } from './constants';
import { ScaleKey, ToneKey } from './types';
import MIDIController from './MIDIController';

export const useKeyRollData = () => {
  const soundsRef = React.useRef();
  const [controller, setController] = React.useState<MIDIController>();
  const [tone, setTone] = React.useState<ToneKey>(toneKeys.C);
  const [scale, setScale] = React.useState<ScaleKey>(scaleKeys.Chromatic as ScaleKey)
  const [instrument, setInstrument] = React.useState<number>(466);
  const [rowOffsets, setRowOffsets] = React.useState<number[]>([
    0, 7, 14, 21, 35, 42
  ]);

  React.useEffect(() => {
    setController(new MIDIController(soundsRef));
	}, []);

  const onSelectInstrument = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!controller) return;
    const list = e.target;
    const n = parseInt(list.options[list.selectedIndex].getAttribute('value') as string);
    controller.loadInstrument(n);
    setInstrument(n);
  }

  const onSelectTone = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTone(e.target.options[e.target.selectedIndex].getAttribute('value') as ToneKey);
  };

  const onSelectScale = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setScale(e.target.options[e.target.selectedIndex].getAttribute('value') as ScaleKey);
  }

  const setCello = () => {
    if (!controller) return;
    setTone(toneKeys.C);
    setInstrument(466);
    controller.loadInstrument(466);
    setRowOffsets([0, 7, 14, 21, 35, 42]);
  }
  const setGuitar = () => {
    if (!controller) return;
    setTone(toneKeys.E);
    setInstrument(244);
    controller.loadInstrument(244);
    setRowOffsets([0, 5, 10, 15, 19, 24]);
  }
  return {
    soundsRef,
    controller,
    tone,
    scale,
    instrument,
    rowOffsets,
    onSelectInstrument,
    onSelectTone,
    onSelectScale,
    setCello,
    setGuitar,
    setRowOffsets,
  };
}

export default useKeyRollData;
