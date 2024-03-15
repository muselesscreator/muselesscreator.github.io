import React from 'react';
import PropTypes from 'prop-types';

import { RowManager } from './notes';

import {
  ScaleKey,
  ToneKey,
  CanvasCell,
} from './types';

import './Canvas.scss';

const BORDER = 2;
const OCTAVE_OFFSET = 4;
const WIDTH = 300;
const HEIGHT = 2000;

interface CanvasProps {
  scaleKey: ScaleKey;
  toneKey: ToneKey;
  noteOn: (pitch: number, volume: number) => void;
  noteOff: (pitch: number) => void;
  controller: any;
  rowOffsets: number[];
}

export const Canvas = ({
  scaleKey,
  toneKey,
  noteOn,
  noteOff,
  controller,
  rowOffsets,
}: CanvasProps) => {
  const [rows, setRows] = React.useState<CanvasCell[][]>([]);
  const [touchTargets, setTouchTargets] = React.useState<number[]>([]);
  let manager = null as (null | RowManager);

  React.useEffect(() => { initialize(); }, [scaleKey, toneKey]);

  const initialize = () => {
    manager = new RowManager({
      scale: scaleKey,
      rootNote: toneKey,
      octaveOffset: OCTAVE_OFFSET,
      rowOctaves: 3,
      rowOctaveConfig: rowOffsets.reduce((acc, offset, index) => ({
        ...acc,
        [index]: offset,
      }), {}),
      canvasDims: { width: WIDTH, height: HEIGHT },
    });
    const newRows = Object.keys(manager.rows)
      .map(v => parseInt(v, 10))
      .map((vertOffset => {
        if (manager === null) return [];
        const row = manager.rows[vertOffset];
        return row.map(cell => {
          const { note, params } = cell;
          return {
            ...params,
            strokeWidth: BORDER,
            stroke: note.color,
            fill: note.toneKey === toneKey ? 'white' : note.color,
            className: `pitch-${note.pitch} note-${note.toneKey}`,
            'data-pitch': note.pitch,
            ...mouseEvents(note.pitch),
            tone: note.toneKey,
          };
        })
    }));
    setRows(newRows);
  };

  const touchEventMap = (e: TouchEvent) => Array.from({ length: e.touches.length }).map(
    (_, touchKey: number) => {
      const element = document.elementFromPoint(
        e.touches[touchKey].clientX,
        e.touches[touchKey].clientY,
      ) as HTMLElement;
      const pitch = parseInt(element.getAttribute('data-pitch') as string, 10)
      return pitch;
    }
  );

  React.useEffect(() => {
    const newTargets = touchTargets.filter((v: number) => !controller.activePitches.includes(v));
    const oldTargets = controller.activePitches.filter((v: number) => !touchTargets.includes(v));

    if (oldTargets.length) {
      oldTargets.forEach(controller.midiNoteOff)
    }
    if (newTargets.length) {
      newTargets.forEach(controller.midiNoteOn)
    }
  }, [touchTargets]);


  const mouseEvents = (pitch: number) => ({
    onMouseDown: () => {
      console.log({ onMouseDown: pitch });
      noteOn(pitch, 1);
    },
    onMouseUp: () => {
      console.log({ onMouseUp: pitch });
      noteOff(pitch);
    },
    onMouseOut: () => noteOff(pitch),
    onMouseOver: (e: { buttons: number }) => {
      if (e.buttons === 1) {
        console.log({ mouseOver: pitch });
        noteOn(pitch, 1);
      }
    },
    onTouchStart: (e: TouchEvent) => {
      setTouchTargets(touchEventMap(e));
      console.log({ onTouchStart: touchEventMap(e) });
    },
    onTouchEnd: (e: TouchEvent) => {
      setTouchTargets(touchEventMap(e));
      console.log({ onTouchEnd: touchEventMap(e) });
    },
    onTouchMove: (e: TouchEvent) => {
      setTouchTargets(touchEventMap(e));
      console.log({ onTouchMove: touchEventMap(e) });
    },
  });

  const genRect = (cellData: CanvasCell) => {
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
