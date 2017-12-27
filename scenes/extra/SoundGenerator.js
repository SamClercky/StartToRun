const sound = require('react-native-sound');

export class SoundGenerator {
  constructor(fileName: String) {
    this.fileName = fileName && fileName != "" ? fileName : "beep1.mp3";
    this.sound = new sound(this.fileName, sound.MAIN_BUNDLE, (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('duration in seconds: ' + this.sound.getDuration() + 'number of channels: ' + this.sound.getNumberOfChannels());
    });
    this.sound.setVolume(1);
    this.sound.setPan(1);
    this.sound.setNumberOfLoops(1);
  }

  play() {
    this.sound.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  }

  relaese() {
    this.sound.release();
  }
}
