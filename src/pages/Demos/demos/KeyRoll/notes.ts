import { range } from 'lodash';

import {
  tones,
  scales,
  toneNames,
  colors,
  scaleLength,
} from './constants';

import {
  getNoteParams,
  RowManagerParams,
  RowManagerInitParams,
  RowNote,
  NoteData,
} from './types';

export const getNote = ({ scaleKey, baseIndex, index }: getNoteParams) => {
  const scaleOffsets = scales[scaleKey];
  const len = scaleLength(scaleKey);
  const scaleOffset = index % len;
  const octaveOffset = (index - scaleOffset) / len;
  let pitch = baseIndex + 12 * octaveOffset;
  if (index < 0) {
    pitch += 12 - scaleOffsets[len + scaleOffset];
  } else {
    pitch += scaleOffsets[scaleOffset];
  }
  return {
    pitch,
    toneKey: toneNames[pitch % 12] as string,
    color: colors[pitch % 12],
  } as NoteData;
}; 

export class RowManager {
  rowOctaves: number;
  rowOctaveConfig: Record<number, number>;
  rootNote: keyof typeof tones;
  scaleKey: keyof typeof scales;
  canvasDims: { width: number; height: number };
  octaveOffset: number;
  originPoint: { x: number; y: number };
  notes: Record<number, NoteData>
  rows: RowNote[][];
  maxOffset: number;
  minOffset: number;
  
  constructor({
    scale, // scale key name
    rootNote, // Key center name
    octaveOffset, // starting octave for root row
    rowOctaves, // number of octaves per row
    rowOctaveConfig, // { <vertical offset from center>: <scaleOffset> }
    canvasDims, // { width, height } 
  }: RowManagerParams) {
    this.rowOctaves = rowOctaves;
    this.rowOctaveConfig = rowOctaveConfig;
    this.rootNote = rootNote;
    this.scaleKey = scale;
    this.canvasDims = canvasDims;
    this.octaveOffset = octaveOffset;

    this.addRow = this.addRow.bind(this);
    this.addOctave = this.addOctave.bind(this);
    this.getNote = this.getNote.bind(this);
    this.initialize = this.initialize.bind(this);

    this.originPoint = { x: 0, y: canvasDims.height / 2 };
    
    this.notes = {};
    this.rows = [];
    this.maxOffset = 0;
    this.minOffset = 0;

    this.initialize({ scaleKey: scale, rootNote });
  };

  initialize({ scaleKey, rootNote }: RowManagerInitParams) {
    this.scaleKey = scaleKey;
    this.rootNote = rootNote;
    this.notes = {};
    this.rows = [];
    this.maxOffset = 0;
    this.minOffset = 0;
    range(this.rowOctaves).map(this.addOctave);
    Object.keys(this.rowOctaveConfig)
      .map((key) => parseInt(key))
      .forEach((vertOffset: number) => {
        this.addRow(this.rowOctaveConfig[vertOffset], vertOffset);
      });
  }

  get scaleOffsets() {
    return scales[this.scaleKey];
  }
  
  get rootTone() {
    return tones[this.rootNote] + 12 * this.octaveOffset;
  }

  get noteWidth() {
    return 50;
    // return this.canvasDims.height / (this.scaleLength * this.rowOctaves);
  }

  get scaleLength() {
    return scales[this.scaleKey].length;
  }

  addOctave(octaveOffset: number) {
    this.scaleOffsets.forEach((scaleOffset, index) => {
      const pitch = this.rootTone + 12 * octaveOffset + scaleOffset;
      this.notes[this.scaleLength * octaveOffset + index] = {
        pitch,
        toneKey: toneNames[pitch % 12] as string,
        color: colors[pitch % 12],
      };
    });
    this.minOffset = Math.min(octaveOffset, this.minOffset);
    this.maxOffset = Math.max(octaveOffset, this.maxOffset);
  }


  getNote(index: number) {
    while (index < this.minOffset * this.scaleLength) {
      this.addOctave(this.minOffset - 1);
    }
    while (index > this.maxOffset * this.scaleLength) {
      this.addOctave(this.maxOffset + 1);
    }
    return this.notes[index];
  }

  addRow(rowScaleOffset: number, verticalOffset: number) {
    const row = [] as RowNote[];
    range(this.scaleLength * this.rowOctaves).forEach((scaleIndex) => {
      const note = this.getNote(scaleIndex + rowScaleOffset);
      row.push({
        note,
        params: {
          y: this.noteWidth * scaleIndex,
          x: this.noteWidth * verticalOffset,
          height: this.noteWidth,
          width: this.noteWidth,
        }
      });
    });
    this.rows[verticalOffset] = row;
  }
}
