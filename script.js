    let countDownDate = new Date("Sep 20, 2022 00:00:00").getTime();
    let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    if (distance === 0 || distance < 0) {
        clearInterval(x);
        document.getElementById("countdownfunc").innerHTML = `has expired`;
        document.getElementById("countdownexpired").innerHTML = ":(";
        document.getElementById("clear").innerHTML = "";
      } else {
        document.getElementById("clear").innerHTML = "is";
        document.getElementById("countdownfunc").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      }
    }, 1000);
    

    