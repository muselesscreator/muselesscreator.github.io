import {
  tones,
  scales,
} from './constants';

export type ScaleKey = keyof typeof scales;
export type ToneKey = keyof typeof tones;


export interface getNoteParams {
  scaleKey: ScaleKey;
  baseIndex: number;
  index: number;
};

export interface RowManagerParams {
  scale: ScaleKey;
  rootNote: ToneKey;
  octaveOffset: number;
  rowOctaves: number;
  rowOctaveConfig: Record<number, number>;
  canvasDims: { width: number, height: number };
};
export interface RowManagerInitParams {
  scaleKey: ScaleKey;
  rootNote: ToneKey;
};
export interface NoteData {
  pitch: number;
  toneKey: string;
  color: string;
};
export type RowNote = {
  note: NoteData,
  params: {
    x: number,
    y: number,
    width: number,
    height: number,
  }
}
export type CanvasCell = {
  strokeWidth: number,
  stroke: string;
  fill: string;
  className: string;
  tone: ToneKey;
  x: number,
  y: number,
  width: number,
  height: number,
};
