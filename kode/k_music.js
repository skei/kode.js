
KMusic = function(src) {

  this._audio = document.createElement('audio');
  this._audio.src = src; // 'data/music.ogg';
  this._audio.controls = true;
  this._audio.style.position = 'absolute';
  this._audio.style.left = 'calc(50% - 150px)';
  this._audio.style.bottom = '25px';
  document.body.appendChild(this._audio);
  
  //------------------------------
  //
  //------------------------------
  
  this.play = function() {
    this._audio.play();
  }
  
  //----------
  
  this.stop = function() {
    this._audio.stop();
  }

  //----------
  
  this.currentTime = function() {
    return this._audio.currentTime;
  }
  
  //----------
  
  this.duration = function() {
    return this._audio.duration;
  }

}

//----------------------------------------------------------------------

/*
  audio
  .volume;
  .pause
  .ended
  .playbackRate
  goto : audio.currentTime(time); audio.play();
  
*/