package com.starttorun;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import android.media.AudioTrack;
import android.media.AudioFormat;
import android.media.AudioManager;

import java.lang.Math;

public class SoundModule extends ReactContextBaseJavaModule {

  public SoundModule(ReactApplicationContext ctx) {
    super(ctx);
  }

  @Override public String getName() {
    return "SoundGenerator";
  }

  @ReactMethod
  public void playSound(double frequency, int duration) {
    // AudioTrack definition
    int mBufferSize = AudioTrack.getMinBufferSize(44100,
    AudioFormat.CHANNEL_OUT_MONO,
    AudioFormat.ENCODING_PCM_8BIT);

    AudioTrack mAudioTrack = new AudioTrack(AudioManager.STREAM_MUSIC, 44100,
    AudioFormat.CHANNEL_OUT_MONO, AudioFormat.ENCODING_PCM_16BIT,
    mBufferSize, AudioTrack.MODE_STREAM);

    // Sine wave
    double[] mSound = new double[4410];
    short[] mBuffer = new short[duration];
    for (int i = 0; i < mSound.length; i++) {
        mSound[i] = Math.sin((2.0*Math.PI * i/(44100/frequency)));
        mBuffer[i] = (short) (mSound[i]*Short.MAX_VALUE);
    }

    mAudioTrack.setStereoVolume(AudioTrack.getMaxVolume(), AudioTrack.getMaxVolume());
    mAudioTrack.play();

    mAudioTrack.write(mBuffer, 0, mSound.length);
    mAudioTrack.stop();
    mAudioTrack.release();

  }
}
