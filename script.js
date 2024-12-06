/*





 ░▒▓██████▓▒░ ░▒▓██████▓▒░        ░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ 
░▒▓█▓▒▒▓███▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓████████▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░  
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░  ░▒▓█▓▒░     
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░  ░▒▓█▓▒░     
 ░▒▓██████▓▒░ ░▒▓██████▓▒░       ░▒▓█▓▒░░▒▓█▓▒░░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░  ░▒▓█▓▒░     
                                                                                              
                                                                                              












const years = document.getElementById("yearright");
const d = new Date().getFullYear();
const datetimer = new Date()
let holiday_class = document.getElementById("holiday");

years.innerHTML = `${d} - <a href='https://scratch.mit.edu/users/Knightbot63/' target='_blank' style="text-decoration: none;">RadicalOfficial</a> &#x2022; <a href='https://github.com/RadicalOfficial/' style="text-decoration: none;">GitHub</a>`;

const latestfollower = document.getElementById("latestfo");
console.log("Fetching Data... Please wait");
function updateInfo() {
  fetch("https://corsproxy.io/?https://api.scratch.mit.edu/users/Knightbot63/followers/?limit=1&offset=0", {
    method: "GET", // "GET/POST"
    headers: {
      "Content-Type": "application/json"
    },
  })
    .then(r => r.json())
    .then(r => {
      console.log('Response', r)
      console.log(r[0].username)
      latestfollower.innerHTML = r[0].username
    }).catch(error => console.error('Error', error))
}
setInterval(updateInfo(), 15000)
*/
function help() {
  alert("It is recommended that you have brick protection on your Wii. Install Priiloader and BootMii before doing this! If you do not have any brick protection, please be EXTREMELY careful. I am not responsible for any damages caused on your Wii.")
  let wii = confirm("Do you have a Wii?\nIt should be at version 4.3")
  if (wii) {
    let homebrewed = confirm("Is your Wii Homebrewed?")
    if (homebrewed) {
      let wadmanager = confirm("Do you have a WAD manager?\nYAWM Mod Mii Edition, Wad Manager, Wii Mod Lite should work.")
      if (wadmanager) {
        alert("You are ready to install the WADs.\nSteps:\nDownload the WAD you want to install and put it into your SD card. (Recommended to put it into a WAD folder)\nTake your SD card out and put it into the Wii.\nGo to your WAD manager and install the WAD.\nOnce it is installed, you can now see it in the Wii Menu.")
      }
      else {
        alert("You are ready to install the WADs.\nSteps:\nFollow the steps of installing a WAD manager at https://wii.hacks.guide/\nDownload the WAD you want to install and put it into your SD card. (Recommended to put it into a WAD folder)\nTake your SD card out and put it into the Wii.\nGo to your WAD manager and install the WAD.\nOnce it is installed, you can now see it in the Wii Menu.")
      }
    } else {
      alert("Please install the Homebrew Channel to make this work. You can find a guide at https://wii.hacks.guide/")
    }
  } else {
    alert("You need a Wii that is in Version 4.3. Come back when it is updated.")
  }
}
/*
function updateCountdown() {
  const countdownDate = new Date("2024-10-22T11:15:00").getTime();
  const now = new Date().getTime();
  const distance = countdownDate - now;

  // Calculate remaining time
  const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update the odometer values
  document.getElementById("months").innerHTML = formatTime(months);
  document.getElementById("hours").innerHTML = formatTime(hours);
  document.getElementById("days").innerHTML = formatTime(days);
  document.getElementById("second").innerHTML = formatTime(seconds);

  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(countdownTimer);
    document.querySelector('.countdown').innerHTML = "<span class='countdown-text'>RPG Released! Please give Knightbot63 time to release it.</span>";
  }
}

// Update the countdown every second
const countdownTimer = setInterval(updateCountdown, 1000);

// Function to add leading zero if the value is less than 10
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

let month = datetimer.getMonth();
let day = datetimer.getDate();
if (month+1 == 6) {
  holiday_class.innerHTML = "🏳‍🌈 Happy Pride Month! 🏳‍⚧"
}
if (month+1 == 5) {
  holiday_class.innerHTML = "Happy Mothers Day! 🌹"
}
if (month+1 == 11) {
  holiday_class.innerHTML = "Happy Thanksgiving!"
}
if (month+1 == 10) {
  holiday_class.innerHTML = "Happy Halloween!"
}
if (month+1 == 12) {
  holiday_class.innerHTML = "Merry Christmas!"
}
if (month+1 == 4 && day == 25) {
  holiday_class.innerHTML = "Happy Birthday Radical/Knightbot63! Celebrate their Birthday on their Scratch Profile!"
}
if (month+1 == 4 && day == 22) {
  holiday_class.innerHTML = "Let's keep the world clean! Happy Earth Day! 🌎"
}*/
console.log("%c" + "WAIT!", "color: #666666; -webkit-text-stroke: 2px black; font-size: 72px; font-weight: bold;");
console.log("What do you think you are doing snooping in here?")
console.log("THERE'S NOTHING IN HERE")
/*
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⢿⣿⣿⢿⣿⣿⣿⣿⣿⡿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⠀⠀⠀⠀⠀⠴⠶⠶⠤⠤⢄⣴⠟⠉⠉⠉⠉⢉⣿⡏⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⣿⡟⠉⠉⠉⠉⠙⢷⣶⠶⠶⠶⠶⠶⠶⠶⢶⣶⣿⣿⣿⣿⣿⣿⣿⠿⠀⠀⠀⠌
⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⠟⠁⠀⣠⣤⣤⣤⣼⣿⣷⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣾⣿⣧⣤⣤⣤⣤⣀⠀⠹⣦⡀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⡿⠁⠀⠀⠀⠀⠀
⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡾⠋⠀⣠⣾⠟⠉⠉⣹⣿⣿⣿⣿⣍⣁⣩⣾⣯⣵⣄⡀⢀⣸⣿⣿⣿⣇⠀⠀⠈⠻⣦⡀⠈⢻⣄⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣟⠀⠀⠀⠀⠀⠀⠀
⡇⠀⠀⠀⠀⠀⠀⠀⢀⣴⠟⠀⢀⣼⡟⢁⣤⣤⣶⣿⣿⣿⣿⣿⣿⡉⠉⠀⠀⠈⠉⠉⣻⣿⣿⣿⣿⣿⡓⢤⣤⡀⠈⢷⣄⠀⠙⢧⡀⠀⠀⠀⠻⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀
⡇⠀⠀⠀⠀⠀⠀⣠⡾⠃⠀⣠⡿⢏⣠⡿⠋⠠⣾⣿⣿⣿⣿⣿⣿⣇⢀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣷⡄⠈⠻⣦⡀⠻⣧⡀⠈⠻⣄⠀⠀⠀⠈⠻⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀
⡇⠀⠀⠀⠀⢀⣴⠏⠀⢀⣼⢟⣵⠿⠫⠀⠈⠁⣿⣿⠟⢻⣿⣿⣿⣿⣿⣤⣀⣠⣼⣿⣿⡿⢿⣿⡟⠉⣿⡇⠀⠲⢾⣟⠳⣜⢻⣆⠀⠙⢧⡀⠀⠀⠀⠈⠙⠻⢿⣷⠀⠀⠀⠀⠀
⡇⠀⠀⠀⣠⡞⠁⠀⣴⡿⢻⡿⢡⡾⠀⠀⠀⠀⢿⣿⠀⠀⠹⣿⡿⣿⣿⣿⡿⢻⣿⣿⣿⠆⠈⣩⠀⠀⢸⣿⡄⣙⢇⢻⣧⠈⡇⠙⣷⡀⠈⢻⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⡇⠀⢀⡴⠋⠀⣠⣾⠟⢤⣈⣳⡾⠻⠄⣤⡀⠀⢺⣿⡌⢁⣀⠉⠁⢸⡿⠃⠰⠟⠋⠁⡀⠀⠀⣀⠈⠹⠿⣿⣧⣠⣾⠟⠛⣶⣋⣤⠞⠿⣦⠀⠘⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⡇⣰⠟⠁⢀⣴⡿⠁⠀⢀⣼⢿⣅⣀⣤⣼⣿⣶⣾⣿⣿⣆⠀⠰⠀⢀⣀⣤⠂⠀⠀⣀⣤⡀⠀⢀⣀⣤⣶⣾⣿⢿⣤⡀⠀⣾⠻⣦⡀⠀⠘⢷⣄⠈⠻⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⡿⠋⠀⣠⣿⣯⣤⣴⡶⢿⣅⠈⠛⠋⠁⠀⠀⠙⠛⢿⣿⣏⣤⣶⣶⣿⣿⣿⠀⠀⢰⣿⣿⣿⠾⣿⡿⣿⣿⠟⠁⠀⠈⠛⠿⠛⢀⣬⠛⢶⣤⣄⡹⣧⡀⠙⢧⡀⠀⠀⠀⠀⢀⣤⣾
⡇⠀⣾⣿⣉⣭⣭⣽⣷⣮⣉⣻⣷⣦⣀⣀⣀⣀⣀⣾⣿⣿⣿⢀⣿⣿⣿⣿⣧⣤⣿⣿⣿⣿⡟⣿⣿⣟⢁⣀⣀⣀⣀⣠⣴⣾⣋⣵⣶⣋⣉⣉⣀⣙⣿⣄⠈⠻⣄⠀⢀⣾⣿⣿⣿
⣇⣠⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣈⣉⣁⣀⣉⣿⡿⢿⣾⣿⣿⣿⣿⠀⠀⣿⣿⣿⣿⣷⣿⡿⣿⣉⣉⣀⣁⣉⣁⣀⣉⣉⣈⣉⣉⣉⣉⣉⣉⣁⣈⣀⣀⣙⣷⣾⣿⣿⣿⣿
⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⠏⠛⢿⣯⣿⠀⢠⣯⣭⣿⠟⡁⣿⣿⣿⣿⣿⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣽⣿⣿⣿⣿⣿
⠃⣾⡿⢿⡿⠿⠿⠿⠿⠿⠟⠻⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠈⠳⣤⣉⠛⠀⠾⠛⢉⣤⠞⠁⣿⣿⣿⡏⠙⣿⣿⣿⡿⠟⠛⠛⠛⠛⠛⠛⠛⠛⠻⠟⣿⠀⠀⣠⣿⣿⣿⣿⣿⣿
⠀⢻⣧⠀⠀⠀⠀⠈⠁⠁⠀⠀⠈⠀⠛⢿⣿⡿⠛⣿⣿⣿⣿⣷⣄⠀⠉⠳⣦⣀⡴⠋⠁⠀⣴⣿⣿⣿⣤⣀⣿⣿⣿⡇⠀⠀⠀⠀⠉⠀⠀⠈⠀⠀⣰⣿⠀⠀⣿⣿⣿⣿⣿⣿⣿
⠀⠘⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⡇⠀⠈⠻⣿⣿⣟⢻⣷⣄⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠠⠬⠀⠀⠀⢠⣿⡇⠀⣼⣿⣿⣿⣿⣿⣿⣿
⠀⠀⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡇⠀⠀⠀⠈⠻⣿⠈⣿⠻⣷⣄⠀⢠⣶⠟⠉⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠀⠀⠀⠘⠀⠀⠀⠀⠀⣼⣿⠁⣰⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⢸⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⡇⠀⠀⠀⠀⠀⠈⠀⣿⠀⣿⣿⣷⣿⣿⠀⠀⠙⣿⣿⣿⣿⣿⣿⡉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠘⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡿⢿⡿⣦⠀⠀⠀⠀⠀⣸⣿⣷⣿⣿⣿⣿⣿⣿⣇⣀⣸⣿⠟⠉⠉⣿⢳⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠄⠀⠀⢿⣿⣦⣀⡀⠀⠀⠀⣀⣤⡾⠟⠀⣼⡇⠈⢷⣴⣿⡿⢻⣿⡿⣿⣿⣿⣿⣿⣿⢿⣿⣿⠛⣿⣷⠀⠐⣿⠀⠙⢷⣤⣀⠀⠀⠀⠀⣠⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⢸⣿⣿⣿⠿⠿⠾⢿⣿⣿⢷⣶⠶⣿⡷⠶⣶⣿⣿⣷⡾⢫⣾⣿⣿⣿⣿⣿⣿⣷⡝⢿⣶⣿⡿⠶⢾⣿⠶⠛⠷⢪⣿⡿⠖⠶⠟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⠀⣿⣿⠁⠀⠀⠀⠀⠈⠙⢷⣄⠀⣿⣇⣴⠟⣹⣿⣿⣷⡶⣺⣿⡿⢿⣿⢿⣿⣅⢶⣾⣿⣿⡀⣦⣰⣿⠀⣰⡾⠛⠁⠀⠀⠀⠀⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⠀⢿⣿⠀⠀⠀⠀⠀⠀⠀⠈⢿⡄⢹⣿⠇⣴⣿⣿⣿⣿⣘⢿⣿⣿⣿⣿⣿⣿⣿⢷⣿⣿⣿⣿⣄⢼⣿⢸⡿⠁⠀⠀⠀⠀⡀⢾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⢸⣿⡗⠀⠀⠀⠀⠀⠀⠀⠀⢻⣾⡏⣰⣿⣿⡿⠁⠹⣿⣮⡻⣿⣿⣿⣿⣿⣵⣿⣿⠙⣿⣿⣿⣿⣿⡿⠁⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠈⢿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⡿⠁⠀⠀⠹⣿⣿⣾⣿⣿⣿⣿⣿⣿⡟⠀⠈⢿⣿⣿⣿⡁⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⢸⣿⠆⠀⠀⠀⠀⠀⠀⠀⢠⣾⣿⣿⠟⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⢿⣿⠇⠀⠀⠈⢿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡀⠀⢀⠀⠀⠀⣿⡆⠀⠀⠀⠀⠀⠀⣴⣿⣿⣿⠟⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣾⣿⠀⠀⠀⠀⠀⢻⣿⣿⣿⡄⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⢸⡆⠀⠀⢿⣇⠀⠀⠀⠀⠀⣼⣿⣿⣿⣯⣤⣀⣀⣀⡞⠀⠀⣿⣾⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⣀⣀⣼⣿⣿⣿⣿⣦⠀⠀⣀⣤⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠘⣇⠀⠀⠸⣿⣅⠀⠀⠀⠚⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⣿⠀⠀⠀⣿⣧⠀⠀⠀⠀⠀⠀⠈⢻⡿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠋⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⢸⡆⠀⠀⢻⣿⡖⠀⠀⠀⠀⠀⠀⢸⡇⠀⢸⡟⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⢿⡟⠉⢸⣿⠀⠀⠀⠀⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⠀⣧⠀⠀⠸⣿⣧⠀⠀⠀⠀⠀⢀⣾⡇⠀⡼⠗⠲⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⢸⡇⠀⢸⣿⠀⠀⠀⠀⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⠀⢻⡄⠀⠀⣿⣿⡄⠀⠀⢀⣴⠏⢻⡇⠸⣅⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⠀⠀⠸⣿⠀⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⠀⢸⡇⠀⠀⢸⣿⣇⠀⢠⡾⠁⠀⢻⡇⠀⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⣿⠀⢠⠟⣼⣿⣿⣿⣿⣿⡿⠻⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠃⠀⠀⠀⠀⣿⠀⠀⠘⣿⣿⡀⠋⠀⠀⠀⢸⣇⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣿⠀⠀⣰⣿⣿⣿⣿⣿⠏⠀⣸⢶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⠀⠀⢸⡄⠀⠀⢿⣿⣟⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣰⣿⣿⣿⣿⣿⠃⠀⠀⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⠀⠀⠘⣧⠀⠀⢸⣿⡿⠀⠀⠀⢺⣿⣿⣿⣿⣿⣿⣿⠿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⢰⡇⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⠀⠀⠀⣿⡀⠀⠀⣿⣷⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⠃⠀⣸⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⣾⢱⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⠀⠀⠀⢸⡇⠀⠀⢸⣿⡄⠀⣠⣿⣿⣿⣿⣿⣿⠇⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡿⢸⣏⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⠀⠀⠀⠈⣧⠀⠀⠸⣿⣆⣀⣿⣿⣿⣿⣿⣿⡏⠀⠀⣠⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣿⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⠀⠀⠀⠀⢿⡄⠀⠀⣿⣿⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠈⣿⣿⣿⣸⣿⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⠀⠀⠀⠀⢸⣇⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⠟⠋⠉⠉⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠉⠉⠙⠻⣿⣿⣿⣿⣿⣿⣿⡏⠀⢹⣿⣿⣿⡏⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⠀⠀⠀⠀⠈⣿⠀⠀⠀⣿⣏⢻⣿⣿⣿⠏⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⠁⠀⠈⣿⣿⣿⢣⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⠀⠀⠀⠀⠀⢻⡆⠀⠀⢻⡏⣾⣿⣿⡟⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⡿⠀⠀⢀⣿⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⠀⠀⠀⠀⠀⠘⣧⠀⠀⢸⣷⣿⣿⣿⡇⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠰⣿⣿⣿⣿⣿⡇⠀⠀⢸⡇⣾⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣇⣀⣀⣀⣀⣀⣀⣠⣤⣿⠀⠀⠀⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⠀⠀⠀⣿⢠⣿⢸⣿⠋⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣷⣷⣶⣶⣿⣿⣷⣶⣿⣿⡇⠀⠀⢸⣿⣿⢸⡇⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⢸⣿⢹⣿⡏⠀⠀⢸⡿⣼⡏⣾⠇⠰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠿⠿⠿⠿⠿⠿⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡷⠿⠿⠿⠿⠿⠿⠿⠿⠿⠁⠀⠀⣼⣇⣿⣧⣿⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⢻⣿⣸⡟⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡟⠀⠙⠿⣷⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⢿⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡄⢀⣤⣤⣤⣤⣤⣤⣤⣤⣾⣇⡀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠿⣤⡀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣦⡄⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⡄⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡴⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⢰⠷⢤⣀⣠⠴⠶⣼⡇⢸⣿⢸⣿⣿⠿⠿⣿⣿⣿⡏⠽⢿⡇⠸⠦⣤⢀⣠⠶⢦⣤⡴⠶⢤⣤⠴⠦⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⢰⣿⠀⣿⠁⣞⣃⣹⡇⢸⣿⢸⣿⠁⣿⣦⢹⣿⣿⡇⢸⣿⡇⢸⣷⠈⣿⢰⣟⣇⣽⠀⢼⢻⠁⣛⣓⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣸⣿⣄⣿⢦⣝⣛⣿⣧⣘⣿⣌⣻⣤⣛⣧⣾⣿⣿⣧⣚⣹⣇⣾⣧⣀⠻⣬⣙⣋⣿⣄⡼⠘⢦⣝⣋⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣆⡀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠻⠿⠿⠿⠿⠏⠙⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣀⡀⣀⣀⣀⣀⡀⣀⢀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿*/
