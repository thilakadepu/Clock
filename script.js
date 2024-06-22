const currentTime = new Date();

const secondsElement = document.querySelector('.seconds-hand-js');
const minutesElement = document.querySelector('.minutes-hand-js');
const hoursElement = document.querySelector('.hours-hand-js');

let hoursDegrees = minutesDegrees = secondsDegrees = 0;

const hour = currentTime.getHours();
const minute = currentTime.getMinutes();
const second = currentTime.getSeconds();

calculateHourDegree(hour, minute);
calculateMinuteDegree(minute);
calculateSecondDegree(second);

setInterval(() => {
  if (hoursDegrees === 360)
    hoursDegrees = 0;
  if (minutesDegrees === 360)
    minutesDegrees = 0;
  if (secondsDegrees === 360)
    secondsDegrees = 0;
  secondsElement.style.transform = `rotate(${secondsDegrees}deg)`;
  minutesElement.style.transform = `rotate(${minutesDegrees}deg)`;
  hoursElement.style.transform = `rotate(${hoursDegrees}deg)`;
  secondsDegrees += 6;
  minutesDegrees += 0.1;
  // hoursDegrees += 0.00167;
}, 1000);

function calculateHourDegree (hour, minute) {
  hoursDegrees = hour * 30 + (minute * 0.5);
}

function calculateMinuteDegree (minutes) {
  minutesDegrees = minutes * 6;
}

function calculateSecondDegree (seconds) {
  secondsDegrees = seconds * 6;
}

