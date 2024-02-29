  // Set the date we're counting down to
  var countDownDate = new Date("Mar 26, 2024 00:00:00").getTime();

  // Update the countdown every 1 second
  var x = setInterval(function() {
      var now = new Date().getTime();
      var distance = countDownDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      
      document.getElementById("Days").innerHTML = days
      document.getElementById("Hours").innerHTML= hours
      document.getElementById("Minutes").innerHTML= minutes
      document.getElementById("Seconds").innerHTML= seconds
      if (distance < 0) {
          clearInterval(x);
          document.getElementById("countdown").innerHTML = "Giveaway Ended!";
      }

      if (hours < 10){
        document.getElementById("Hours").innerHTML= "0" + hours

      }
  }, 1000);