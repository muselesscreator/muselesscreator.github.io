import MIDISounds from 'midi-sounds-react';
import Canvas from './Canvas';

import useKeyRollData from './useKeyRollData';

import {
  scales,
  tones,
} from './constants';

export const KeyRoll = () => {
  const {
    controller,
    soundsRef,
    instrument,
    tone,
    scale,
    rowOffsets,
    setCello,
    setGuitar,
    onSelectInstrument,
    onSelectTone,
    onSelectScale,
    setRowOffsets,
  } = useKeyRollData();

  return (
    <div className="keyboard-roll">
      <MIDISounds 
        ref={soundsRef} 
        appElementName="root"
        instruments={[3]} 
      />
      {controller && (
        <>
          <select value={instrument} onChange={onSelectInstrument}>
            {controller.instrumentOptions}
          </select>
          <select value={tone} onChange={onSelectTone}>
            {Object.keys(tones).map(toneKey => (<option key={toneKey} value={toneKey}>{toneKey}</option>))}
          </select>
          <select value={scale} onChange={onSelectScale}>
            {Object.keys(scales).map(scaleKey => (<option key={scaleKey} value={scaleKey}>{scaleKey}</option>))}
          </select>
          <br />
          <b style={{ marginRight: '1rem' }}>Row Offsets:</b>
          <input value={rowOffsets[0]} onChange={(e) => setRowOffsets([parseInt(e.target.value), rowOffsets[1], rowOffsets[2], rowOffsets[3], rowOffsets[4], rowOffsets[5]])} />
          <input value={rowOffsets[1]} onChange={(e) => setRowOffsets([rowOffsets[0], parseInt(e.target.value), rowOffsets[2], rowOffsets[3], rowOffsets[4], rowOffsets[5]])} />
          <input value={rowOffsets[2]} onChange={(e) => setRowOffsets([rowOffsets[0], rowOffsets[1], parseInt(e.target.value), rowOffsets[3], rowOffsets[4], rowOffsets[5]])} />
          <input value={rowOffsets[3]} onChange={(e) => setRowOffsets([rowOffsets[0], rowOffsets[1], rowOffsets[2], parseInt(e.target.value), rowOffsets[4], rowOffsets[5]])} />
          <input value={rowOffsets[4]} onChange={(e) => setRowOffsets([rowOffsets[0], rowOffsets[1], rowOffsets[2], rowOffsets[3], parseInt(e.target.value), rowOffsets[5]])} />
          <input value={rowOffsets[5]} onChange={(e) => setRowOffsets([rowOffsets[0], rowOffsets[1], rowOffsets[2], rowOffsets[3], rowOffsets[4], parseInt(e.target.value)])} />
          <br />
          <button
            className="preset-select"
            style={{ marginRight: '1rem', marginTop: '2px', marginBottom: '1rem'}}
          onClick={setCello}
          >Cello Preset</button>
          <button className="preset-select" onClick={setGuitar}>Guitar Preset</button>
          <br />
          <Canvas
            rowOffsets={rowOffsets}
            scaleKey={scale}
            toneKey={tone}
            noteOn={controller.midiNoteOn}
            noteOff={controller.midiNoteOff}
            controller={controller}
          />
        </>
      )}
    </div>
  );
};

export default KeyRoll;
