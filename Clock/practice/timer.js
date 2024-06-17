// timer.js
var i = 0

class Timer {
   constructor(startButton, stopButton, divElement){
      this.startButton = startButton
      this.stopButton = stopButton
      this.divElement = divElement

      this.startButton.addEventListener('click', this.start)
      this.stopButton.addEventListener('click', this.stop)

   }

   start = () => {
      this.intervalId = setInterval(() => {
         console.log('i')
         this.divElement.style.backgroundColor = `hsl(${i}, 100%, 50%)`
         i++
      }, 1);
   }

   stop = () => {
      clearInterval(this.intervalId)
   }
}