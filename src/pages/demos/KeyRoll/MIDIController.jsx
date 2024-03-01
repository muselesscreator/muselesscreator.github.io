
import React from 'react';
import MIDISounds from 'midi-sounds-react';
import Canvas from './Canvas';
import { tones, toneKeys, scaleKeys, scales } from './notes';

export class MIDIController {
  constructor(ref) {
    this.ref = ref;
    
    this.status = '?';
    this.instrument = 466;
    this.envelopes = {};

    this.instrumentKeys;
    this.instrumentInfo;

    this.setEnvelope = this.setEnvelope.bind(this);
    this.midiNoteOn = this.midiNoteOn.bind(this);
    this.midiNoteOff = this.midiNoteOff.bind(this);
    this.loadInstrument = this.loadInstrument.bind(this);
    this.initialize = this.initialize.bind(this);

    this.initialize();
  }

  get midiSounds() {
    return this.ref.current;
  }
  
  get player() {
    return this.midiSounds.player;
  }

  get loader() {
    return this.player.loader;
  }

  get activePitches() {
    return Object.keys(this.envelopes).filter(v => this.envelopes[v] !== null);
  }

  setEnvelope(pitch, newVal) {
    console.log({ setEnvelope: { pitch, newVal } });
    this.envelopes = { ...this.envelopes, [pitch]: newVal };
  }

  midiNoteOff(pitch) {
    if (this.envelopes && this.envelopes[pitch]) {
      this.envelopes[pitch].cancel();
      this.setEnvelope(pitch, null);
    }
  }

  midiNoteOn(pitch, volume) {
    const { audioContext, equalizer } = this.midiSounds;
    this.midiNoteOff(pitch)
    this.setEnvelope(
      pitch,
      this.player.queueWaveTable(
        audioContext,
        equalizer.input,
        window[this.loader.instrumentInfo(this.instrument).variable],
        0,
        pitch,
        999,
        volume,
      ),
    );
  }

  initialize() {
    this.status = 'waiting';
    this.midiSounds.cacheInstrument(this.instrument);
	}

  loadInstrument(instrument) {
    console.log({ instrument });
		this.instrument = instrument;
		this.midiSounds.cacheInstrument(instrument);
	}

  get instrumentOptions() {
    this.instrumentKeys = this.loader.instrumentKeys();
    this.instrumentInfo = this.loader.instrumentInfo;
    return this.loader.instrumentKeys().map((val, i) => (
      <option key={i} value={i}>{'' + (i + 0) + '. ' + this.loader.instrumentInfo(i).title}</option>
    ));
  }
};

export default MIDIController;