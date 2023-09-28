//your JS code here. If required.
 function updateTimer() {
      const timerElement = document.getElementById("timer");
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleDateString();
      const formattedTime = currentDate.toLocaleTimeString();

    
      timerElement.textContent = `Date: ${formattedDate} | Time: ${formattedTime}`;
    }

  
    updateTimer();

    
    setInterval(updateTimer, 1000);