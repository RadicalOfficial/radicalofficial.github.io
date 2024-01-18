const params = new URLSearchParams(window.location.search);
let scratchUser;

if (params.get('user') === null) {
  scratchUser = "griffpatch";
}
else if (params.get('user')){
  scratchUser = params.get('user');
}
var interval;
let nointerval = false;
var inputs = document.getElementById("search");

// Snowflakes

inputs.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    logData(inputs.value);
  }
});

function checkWidth() {
  if (window.innerWidth < 1336) {
    alert("Warning: Displaying this website in this size may be buggy.")
  }
}


function roundDownAndSubtract(integer) {
  let roundedDown = Math.floor(integer / 100000) * 100000;
  let addValue = roundedDown + 100000;
  return addValue - integer;
}

function fetchAndSetCount() {
  const icons = scratchUser
  fetch(
    `https://corsproxy.io/?https://scratchstats.com/api2/live/getid/${icons}`,
  )
    .then((res) => res.json())
    .then((out) => {
      const id = out.id;
      fetch(`https://corsproxy.io/?https://scratchstats.com/api2/live/id/${id}`)
        .then((res) => res.json())
        .then((out) => {
          const live = out.count;
          document.getElementById("odometer").innerHTML = live;
        });
    });
}

/* User Icons */
function getIcon(icons) {
  fetch(`https://corsproxy.io/?https://api.scratch.mit.edu/users/${icons}`)
    .then((response) => response.json())
    .then((data) => {
      try {
        const userIcon = data.profile.images["90x90"];
        const username = data.username;
        document.getElementById("user-icon").src = userIcon;
        document.getElementById("username").innerHTML = username;
      }
      catch(error) {
        const iconsss = document.getElementById("user-icon");
        iconsss.parentNode.removeChild(iconsss);
        const odometer = document.getElementById("odometer");
        odometer.parentNode.removeChild(odometer);
        document.getElementById("username").innerHTML = "Not Found";
        document.getElementById("nofoundul").innerHTML = "The user you searched isn't in the Scratch Database..."
        document.getElementById("nofoundul").style.textTransform = "capitalize";
        nointerval = true;
      }
    });
}

function logData() {
  const response = document.getElementById("search").value;
  const trimmedResponse = response.trim().toUpperCase();
  if (
    trimmedResponse ==
    document.getElementById("username").innerHTML.toUpperCase()
  ) {
    console.log("The data is already inserted");
    alert("The data is already inserted. Please use another user.");
  } else {
    if (trimmedResponse == "") {
      alert("Data cannot be empty.");
    } else {
      let url = new URL(window.location.href);
      url.searchParams.set("user", response);
      console.log(url.href)
      window.location.replace(url.href);
    }
  }
}

getIcon(scratchUser);
setInterval(fetchAndSetCount, 5000)
