let song_1, song_2;
let fft;
let playbutton, pausebutton;
let w;
let slider_1, slider_2;
let canvas;

let viz_1 = function(a) {
  a.preload = function() {
    song_1 = a.loadSound('/media/MyDarling.mp3');
  }

  a.setup = function() {
    canvas = a.createCanvas(576, 192);
    canvas.parent('song_viz_1');
    a.colorMode(a.HSB);
    a.angleMode(a.DEGREES);
    slider_1 = a.createSlider(0, 1, 0.75, 0.01);
    slider_1.parent('controls_1');

    playbutton = a.createButton('Play');
    playbutton.parent('controls_1');
    playbutton.mousePressed(a.playsound);

    pausebutton = a.createButton('Pause');
    pausebutton.parent('controls_1');
    pausebutton.mousePressed(a.pausesound);

    a.fft = new p5.FFT(0.3, 4096);
    a.fft.setInput(song_1);
    song_1.stop();
    w = a.width / 300;
  }

  a.draw = function() {
    a.background(40);
    song_1.setVolume(slider_1.value())
    let spectrum = a.fft.analyze();
    a.noStroke();
    a.beginShape();
    for (let i = 0; i < spectrum.length; i++) {
      let amp = spectrum[i];
      let y = a.map(amp, 25, 256, a.height, 10);
      a.fill(170, i, 255);
      a.rect(i * w * 1.5, y + 7.5, w / 0.7, a.height - y);
    }
    a.endShape();
  }

  a.playsound = function() {
    if (song_1.isPlaying() == false) {
      song_1.play();
    }
  }

  a.pausesound = function() {
    if (song_1.isPlaying() == true) {
      song_1.pause();
    }
  }
};
new p5(viz_1, 'song_viz_1');

let viz_2 = function(b) {
  b.preload = function() {
    song_2 = b.loadSound('/media/LoveForYou.mp3');
  }

  b.setup = function() {
    canvas = b.createCanvas(576, 192);
    canvas.parent('song_viz_2');
    b.colorMode(b.HSB);
    b.angleMode(b.DEGREES);
    slider_2 = b.createSlider(0, 1, 0.75, 0.01);
    slider_2.parent('controls_2');

    playbutton = b.createButton('Play');
    playbutton.parent('controls_2');
    playbutton.mousePressed(b.playsound);

    pausebutton = b.createButton('Pause');
    pausebutton.parent('controls_2');
    pausebutton.mousePressed(b.pausesound);

    b.fft = new p5.FFT(0.3, 4096);
    b.fft.setInput(song_2);
    song_2.stop();
    w = b.width / 300;
  }

  b.draw = function() {
    b.background(40);
    song_2.setVolume(slider_2.value())
    let spectrum = b.fft.analyze();
    b.noStroke();
    b.beginShape();
    for (let i = 0; i < spectrum.length; i++) {
      let amp = spectrum[i];
      let y = b.map(amp, 25, 256, b.height, 10);
      b.fill(170, i, 255);
      b.rect(i * w * 1.5, y + 7.5, w / 0.7, b.height - y);
    }
    b.endShape();
  }

  b.playsound = function() {
    if (song_2.isPlaying() == false) {
      song_2.play();
    }
  }

  b.pausesound = function() {
    if (song_2.isPlaying() == true) {
      song_2.pause();
    }
  }
};
new p5(viz_2, 'song_viz_2');

function itunesResults(json) {
  let txt_1 = "";
  let txt_2 = "";
  txt_1 += json.results[0].artistName + " - " + json.results[0].trackName;
  txt_2 += json.results[3].artistName + " - " + json.results[3].trackName;
  document.getElementById("meta_1").innerHTML = txt_1;
  document.getElementById("meta_2").innerHTML = txt_2;
}

// let script = document.createElement("script");
// script.src = 'https://itunes.apple.com/search?callback=itunesResults&format=json&entity=song&term=' + 'Elyangel';
// document.body.appendChild(script);
