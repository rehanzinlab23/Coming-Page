let countDownDate = new Date('Oct 20, 2025 00:00:00').getTime(); 

let x = setInterval(function() {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".countdown").innerHTML = "🎉 We're Live!";
    return; 
  }

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;

}, 1000);
