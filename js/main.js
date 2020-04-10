document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  // var twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 2) + 1;

  // Set up FlipDown

  var d = new Date();
  // months goes from 0 to 11
  d.setFullYear(2020,3,14);
  // hours goes from 0 to 23 
  d.setHours(23);
  d.setMinutes(59);
  d.setSeconds(59);
  // Date set of for 14 April 2020 23:59, according to the time of my computer, in this case Lisbon time
  var secondsDate = d.getTime()/1000;
  var flipdown = new FlipDown(secondsDate)   



    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });

  // Toggle theme
  // var interval = setInterval(() => {
  //   let body = document.body;
  //   body.classList.toggle('light-theme');
  //   body.querySelector('#flipdown').classList.toggle('flipdown__theme-dark');
  //   body.querySelector('#flipdown').classList.toggle('flipdown__theme-light');
  // }, 5000);

  // // Show version number
  // var ver = document.getElementById('ver');
  // ver.innerHTML = flipdown.version;
});
