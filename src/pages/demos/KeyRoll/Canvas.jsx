import React from 'react';
import PropTypes from 'prop-types';
import { range } from 'lodash';

import * as noteUtils  from './notes';
import './Canvas.scss';

const { tones, RowManager } = noteUtils;

const BORDER = 2;
const OCTAVE_OFFSET = 4;
const CHORD_ROWS = 4;
const OCTAVES = 3;
const WIDTH = 600;
const HEIGHT = 2000

export const Canvas = ({
  scaleKey,
  toneKey,
  noteOn,
  noteOff,
  controller,
  rowOffsets,
}) => {
  const [rows, setRows] = React.useState([]);
  const [touchTargets, setTouchTargets] = React.useState([]);
  let manager;

  React.useEffect(() => { initialize(); }, [scaleKey, toneKey]);

  const initialize = () => {
    manager = new RowManager({
      scale: scaleKey,
      rootNote: toneKey,
      octaveOffset: OCTAVE_OFFSET,
      rowOctaves: 2,
      rowOctaveConfig: rowOffsets.reduce((acc, offset, index) => ({
        ...acc,
        [index]: offset,
      }), {}),
      canvasDims: { width: WIDTH, height: HEIGHT },
    });
    const newRows = Object.keys(manager.rows).map(vertOffset => {
      const row = manager.rows[vertOffset];
      return row.map(cell => {
        const { note, params } = cell;
        return {
          ...params,
          strokeWidth: BORDER,
          stroke: note.color,
          fill: note.tone === toneKey ? 'white' : note.color,
          className: `pitch-${note.pitch} note-${note.tone}`,
          'data-pitch': note.pitch,
          ...mouseEvents(note.pitch),
          tone: note.tone,
        };
      })
    });
    setRows(newRows);
  };

  const touchEventMap = (e) => Object.keys(e.touches).map(
    touchKey => (
      document.elementFromPoint(
        e.touches[touchKey].clientX,
        e.touches[touchKey].clientY,
      ).getAttribute('data-pitch')
    )
  );

  React.useEffect(() => {
    const newTargets = touchTargets.filter(v => !controller.activePitches.includes(v));
    const oldTargets = controller.activePitches.filter(v => !touchTargets.includes(v));
    if (oldTargets.length) {
      oldTargets.forEach(controller.midiNoteOff)
    }
    if (newTargets.length) {
      newTargets.forEach(controller.midiNoteOn)
    }
  }, [touchTargets]);


  const mouseEvents = (pitch) => ({
    onMouseDown: () => {
      console.log({ onMouseDown: pitch });
      noteOn(pitch);
    },
    onMouseUp: () => {
      console.log({ onMouseUp: pitch });
      noteOff(pitch);
    },
    onMouseOut: () => noteOff(pitch),
    onMouseOver: (e) => {
      if (e.buttons === 1) {
        console.log({ mouseOver: pitch });
        noteOn(pitch);
      }
    },
    onTouchStart: (e) => {
      setTouchTargets(touchEventMap(e));
      console.log({ onTouchStart: touchEventMap(e) });
    },
    onTouchEnd: (e) => {
      setTouchTargets(touchEventMap(e));
      console.log({ onTouchEnd: touchEventMap(e) });
    },
    onTouchMove: (e) => {
      setTouchTargets(touchEventMap(e));
      console.log({ onTouchMove: touchEventMap(e) });
    },
  });

  const genRect = cellData => {
    const {
      tone,
      x,
      y,
      ...params
    } = cellData;
    return (
      <g key={`${x}+${y}`} transform={`translate(${x},${y})`}>
        <rect
          {...params}
          x={0}
          y={0}
        />
        <text
          textAnchor="middle"
          dominantBaseline="middle"
          x={params.width / 2}
          y={params.width / 2}
          fontSize="smaller"
        >
          {tone}
        </text>
      </g>
    );
  };

  return (
    <>
      <svg style={{
        touchAction: 'none',
        border: '2px solid gold',
        width: `${WIDTH}px`,
        height: `${HEIGHT}px`,
        clear: 'both',
      }}>
        {rows.map(row => row.map(genRect))}
      </svg>
    </>
  );
};
Canvas.propTypes = {
  noteOn: PropTypes.func.isRequired,
  noteOff: PropTypes.func.isRequired,
}

export default Canvas;
