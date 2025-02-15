/*





 ░▒▓██████▓▒░ ░▒▓██████▓▒░        ░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ 
░▒▓█▓▒▒▓███▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓████████▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░  
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░  ░▒▓█▓▒░     
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░  ░▒▓█▓▒░     
 ░▒▓██████▓▒░ ░▒▓██████▓▒░       ░▒▓█▓▒░░▒▓█▓▒░░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░  ░▒▓█▓▒░     
                                                                                              
                                                                                              











*/
const years = document.getElementById("yearright");
const d = new Date().getFullYear();
const datetimer = new Date()
let holiday_class = document.getElementById("holiday");
let skiptimes = 0;
let confirmed = false;

years.innerHTML = `${d} - <a href='https://scratch.mit.edu/users/Knightbot63/' target='_blank' style="text-decoration: none;">RadicalOfficial</a> &#x2022; <a href='https://github.com/RadicalOfficial/' style="text-decoration: none;">GitHub</a>`;
/*
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

function updateCountdown() {
  const countdownDate = new Date("6666-06-06T18:06:06").getTime();
  const now = new Date().getTime();
  const distance = countdownDate - now;

  // Calculate remaining time
  const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0') + "<br><br><p style='font-size: 25px'>Hours</p>";
  document.getElementById("days").innerHTML = days.toString().padStart(2, '0') + "<br><br><p style='font-size: 25px'>Days</p>";
  document.getElementById("second").innerHTML = seconds.toString().padStart(2, '0') + "<br><br><p style='font-size: 25px'>Seconds</p>";
  document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0') + "<br><br><p style='font-size: 25px'>Minutes</p>";


  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(countdownTimer);
    document.querySelector('.countdown').innerHTML = "<span class='countdown-text'>The time might be delayed so please be patient!</span>";
  }
}

// Update the countdown every second
const countdownTimer = setInterval(updateCountdown, 1000);

function formatTime(time) {
  return time.toString().padStart(2, '0');
}
/*
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

function next() {
  skiptimes += 1;
  const messages = ["you can't beat the system.", "i'm sorry. you set it that way.", "if you want to get around something...", "well...", "it's not that easy to do so.", "you most likely blocked a website for whatever reason...", "mostly because of addiction.", "want to break out of it?", "then do these simple steps...", "GET OUT OF THIS WEBSITE", "OR ELSE YOU'RE NEXT...", "...", "...", "...", "why are you still here?", "okay...", "you want me to close everything...", "i'm not joking...", "I can close your window.", "seriously, get off now.", "you're wasting your time.", "...", "and you're wasting mine.", "okay, after 5 messages...", "i will close your window.", "sound good?", "sigh. i shouldn't have to do this.", "this next click will close the window...", "hopefully...", "if it didn't, then they patched it"];
  const newmessage = messages[skiptimes];
  const buttonmessages = ["keep clicking. it'll help.", "actually, it won't.", "you'll just waste your time.", "go on.", "yeah?", "yeah, so what?", "how did you know?", "YES. YESSSSS.", "okay...", "NO. NEVER.", "NEVERRRRR.", " ", "             ", "               ", "you need to stop wasting my time. I don't have all day to write all of these messages.", "okay... please just close the tab. I'm getting very annoyed.", "I know it's you.", "bet.", "no.", "yes i am .", " ", "yes i am...", " ", "positive?", "test me.", "yes . . .", "i'm annoying I know. by clicking this, you'll look like a clown.", "really?", "hopefully what?", "Now close the tab. I have nothing else. Scram."];
  const newbuttonmessage = buttonmessages[skiptimes];
  document.getElementById("SCARY").innerHTML = newmessage;
  document.getElementById("DARK").innerHTML = newbuttonmessage;
  if (skiptimes > 29) {
    let husk = open(location, '_self');
    husk.close();
    return false;
  }

}
function tenderAngel() {
  if (confirmed == 1) {
    window.open("https://drive.google.com/drive/folders/13wyn7XEFBcoOcsEE2awsZGF8MJrhq2Hp?usp=drive_link");
    return
  }
  alert("The guide will help you download the game.");
  let first = confirm("Is your OS a Linux OS?");
  if (first) {
    alert('You can now download the latest Linux version. Please click "Get Prototype" again to get the link, then find the file "Godot Platformer.x86_64"');
    confirmed = 1;
  } else {
    let second = confirm("Is your OS a Windows OS?\n(Note: It's best to have Windows 10 or higher)");
    if (second) {
      alert('You can now download the latest Windows version. Please click "Get Prototype" again to get the link, then download any version of the EXE files.');
      confirmed = 1;
    } else {
      alert("I'm sorry but you need one of these devices to run the prototype.\n\nWhen the game is somewhat complete, a different download button will appear.");
    }
  }
}
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
function play(audio) {

  const soundeffect = new Audio(audio);
  soundeffect.play();
}
