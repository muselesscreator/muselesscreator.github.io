import { range } from 'lodash';

import { keyStore, StrictDict } from '@muselesscreator/strict-dict';

export const tones = StrictDict({
  'C': 0,
  'C#/D♭': 1,
  'D': 2,
  'D#/E♭': 3,
  'E': 4,
  'F': 5,
  'F#/G♭': 6,
  'G': 7,
  'G#/A♭': 8,
  'A': 9,
  'A#/B♭': 10,
  'B': 11,
});

export const toneKeys = keyStore(tones);

export const scales = {
  Chromatic: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  Blues: [0, 3, 5, 6, 7, 10],
  Pentatonic: [0, 3, 5, 7, 10],
  Major: [0, 2, 4, 5, 7, 9, 11],
  Minor: [0, 2, 3, 5, 7, 8, 10],
};

export const toneNames = [
  toneKeys['C'],
  toneKeys['C#/D♭'],
  toneKeys['D'],
  toneKeys['D#/E♭'],
  toneKeys['E'],
  toneKeys['F'],
  toneKeys['F#/G♭'],
  toneKeys['G'],
  toneKeys['G#/A♭'],
  toneKeys['A'],
  toneKeys['A#/B♭'],
  toneKeys['B'],
];

export const colors = [
  '#F00',
  '#FF8000',
  '#FF0',
  '#80FF00',
  '#0F0',
  '#00FF80',
  '#0FF',
  '#0080FF',
  '#00F',
  '#8000FF',
  '#F0F',
  '#FF0080',
];

export const scaleKeys = keyStore(scales);

export const scaleLength = (scaleKey) => scales[scaleKey].length;

export const getNote = ({ scaleKey, baseIndex, index }) => {
  const scaleOffsets = scales[scaleKey];
  let pitch = baseIndex + 12 * octaveOffset;
  const len = scaleLength(scaleKey);
  const scaleOffset = index % len;
  const octaveOffset = (index - scaleOffset) / len;
  if (index < 0) {
    pitch += 12 - scaleOffsets[len + scaleOffset];
  } else {
    pitch += scaleOffsets[scaleOffset];
  }
  return {
    pitch,
    toneKey: toneNames[pitch % 12],
    color: colors[pitch % 12],
  };
}; 

// rowConfig: []


export class RowManager {
  constructor({
    scale, // scale key name
    rootNote, // Key center name
    octaveOffset, // starting octave for root row
    rowOctaves, // number of octaves per row
    rowOctaveConfig, // { <vertical offset from center>: <scaleOffset> }
    canvasDims, // { width, height } 
  }) {
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

    this.originPoint = { x: 0, y: canvasDims / 2 };
    
    this.notes = {};
    this.rows = [];
    this.maxOffset = 0;
    this.minOffset = 0;

    this.initialize({ scaleKey: scale, rootNote });
  };

  initialize({ scaleKey, rootNote }) {
    this.scaleKey = scaleKey;
    this.rootNote = rootNote;
    this.notes = {};
    this.rows = [];
    this.maxOffset = 0;
    this.minOffset = 0;
    range(this.rowOctaves).map(this.addOctave);
    Object.keys(this.rowOctaveConfig).forEach(vertOffset => {
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

  addOctave(octaveOffset) {
    this.scaleOffsets.forEach((scaleOffset, index) => {
      const pitch = this.rootTone + 12 * octaveOffset + scaleOffset;
      this.notes[this.scaleLength * octaveOffset + index] = {
        pitch,
        tone: toneNames[pitch % 12],
        color: colors[pitch % 12],
      };
    });
    this.minOffset = Math.min(octaveOffset, this.minOffset);
    this.maxOffset = Math.max(octaveOffset, this.maxOffset);
  }


  getNote(index) {
    while (index < this.minOffset * this.scaleLength) {
      this.addOctave(this.minOffset - 1);
    }
    while (index > this.maxOffset * this.scaleLength) {
      this.addOctave(this.maxOffset + 1);
    }
    return this.notes[index];
  }

  addRow(rowScaleOffset, verticalOffset) {
    const row = [];
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
