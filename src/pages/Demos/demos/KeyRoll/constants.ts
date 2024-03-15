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
}) as Record<string, number>;

export const toneKeys = keyStore(tones) as Record<string, string>;

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

export const scaleKeys = keyStore(scales) as Record<string, string>;

export const scaleLength = (scaleKey: keyof typeof scales) => scales[scaleKey].length;
