
const real = new Float32Array([0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0]);
const imag = new Float32Array([0.0,1.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0]);

// SIGNAL FLOW

var CTX = new AudioContext();
CTX.resume();

var oscillator = CTX.createOscillator();
var MainVolume = CTX.createGain();


MainVolume.gain.value = 0

var wave = CTX.createPeriodicWave(real,imag);
oscillator.setPeriodicWave(wave);

oscillator.connect(MainVolume);
MainVolume.connect(CTX.destination);
oscillator.start();


// BUTTONS AND FADERS 

const playButton = document.querySelector(".start");
const pauseButton = document.querySelector('.stop');
const FreqFader = document.getElementById("FaderFreq")
const Fader1 = document.getElementById("Fader1");
const Fader2 = document.getElementById("Fader2");
const Fader3 = document.getElementById("Fader3");
const Fader4 = document.getElementById("Fader4");
const Fader5 = document.getElementById("Fader5");
const Fader6 = document.getElementById("Fader6");
const Fader7 = document.getElementById("Fader7");
const Fader8 = document.getElementById("Fader8");
const Fader9 = document.getElementById("Fader9");
const FreqValue = document.getElementById("frequency_value");


// BUTTONS AND FADERS ACTIVATION

Fader1.addEventListener("input", ()=>{
    imag[1] = Fader1.value;
    wave = CTX.createPeriodicWave(real,imag);
    oscillator.setPeriodicWave(wave);
})

Fader2.addEventListener("input", ()=>{
    imag[2] = Fader2.value;
    wave = CTX.createPeriodicWave(real,imag);
    oscillator.setPeriodicWave(wave);
})

Fader3.addEventListener("input", ()=>{
    imag[3] = Fader3.value;
    wave = CTX.createPeriodicWave(real,imag);
    oscillator.setPeriodicWave(wave);
})

Fader4.addEventListener("input", ()=>{
    imag[4] = Fader4.value;
    wave = CTX.createPeriodicWave(real,imag);
    oscillator.setPeriodicWave(wave);
})

Fader5.addEventListener("input", ()=>{
    imag[5] = Fader5.value;
    wave = CTX.createPeriodicWave(real,imag);
    oscillator.setPeriodicWave(wave);
})

Fader6.addEventListener("input", ()=>{
    imag[6] = Fader6.value;
    wave = CTX.createPeriodicWave(real,imag);
    oscillator.setPeriodicWave(wave);
})

Fader7.addEventListener("input", ()=>{
    imag[7] = Fader7.value;
    wave = CTX.createPeriodicWave(real,imag);
    oscillator.setPeriodicWave(wave);
})

Fader8.addEventListener("input", ()=>{
    imag[8] = Fader8.value;
    wave = CTX.createPeriodicWave(real,imag);
    oscillator.setPeriodicWave(wave);
})

Fader9.addEventListener("input", ()=>{
    imag[9] = Fader9.value;
    wave = CTX.createPeriodicWave(real,imag);
    oscillator.setPeriodicWave(wave);
})

FreqFader.addEventListener("input", (event)=>{
    oscillator.frequency.value = event.target.value;
    FreqValue.innerHTML = event.target.value + " Hz";
})

function PauseStream(){
    MainVolume.gain.value = 0
}

function StartStream(){
    MainVolume.gain.value = 1
}

