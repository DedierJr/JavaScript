const durationInput = document.querySelector("#input");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#stop");

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log("Timer started!");
  },
  onTick() {
    console.log("tick");
  },
  onComplete() {
    console.log("Timer is completed");
  },
});
