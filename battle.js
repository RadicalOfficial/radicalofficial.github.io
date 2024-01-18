const flexbox = document.getElementById("battle");
const fu = document.getElementById("firstu");
const su = document.getElementById("secondu");
const fub = document.getElementById("firstuserbattle");
const sub = document.getElementById("seconduserbattle");
const compare = document.getElementById("compare");
flexbox.style.display = "none";

function getIcon(icons, ids) {
  fetch(`https://corsproxy.io/?https://api.scratch.mit.edu/users/${icons}`)
    .then((response) => response.json())
    .then((data) => {
      const userIcon = data.profile.images["90x90"];
      const username = data.username;
      document.getElementById(`${ids}`).src = userIcon;
    });
}

function fetchAndSetCount(icons, classe) {
  return new Promise(async (resolve, reject) => {
    try {
      let responsecatch = false;
      let firstResponse;
      if (responsecatch === false) {
        firstResponse = await fetch(
          `https://corsproxy.io/?https://scratchstats.com/api2/live/getid/${icons}`,
        );
        responsecatch = true;
      }
      const firstData = await firstResponse.json();

      const id = firstData.id;

      const secondResponse = await fetch(
        `https://corsproxy.io/?https://scratchstats.com/api2/live/id/${id}`,
      );
      const secondData = await secondResponse.json();

      const live = secondData.count;

      document.getElementById(classe).innerHTML = live;
      resolve(live);
      return live;
    } catch (error) {
      console.error("Error fetching and setting count:", error);
      reject(error);
    }
  });
}

function fetchDataAndUpdate(scratcher) {
  fetchAndSetCount(scratcher)
    .then((liveValue) => {
      console.log("Live value:", liveValue);
    })
    .catch((error) => {
      console.error("Error from fetchAndSetCount:", error);
    })
    .finally(() => {
      setTimeout(fetchDataAndUpdate, 5000);
    });
}

/*
async function fetchAndSetCount(icons, odid) {
  try {
    const res = await fetch(`https://corsproxy.io/?https://scratchstats.com/api2/live/getid/${icons}`);
    const data = await res.json();
    const id = data.id;
    const reso = await fetch(`https://corsproxy.io/?https://scratchstats.com/api2/live/id/${id}`);
    const outs = await reso.json();
    const live = outs.count;
    document.getElementById(`${odid}`).innerHTML = live;
    return "nerd";
  } catch (error) {
    console.error('Error fetching count:', error);
    return null;
  }
}*/

function first() {
  const username = document.getElementById("firstu").value;
  console.log(username);
  fetch(`https://corsproxy.io/?https://api.scratch.mit.edu/users/${username}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.code == "ResourceNotFound") {
        alert("The user you searched doesn't exist.");
      }
      if (!data.username == "") {
        alert("The user you searched is added!");
        document.getElementById("username").innerHTML = data.username;
      }
    });
}
function second() {
  const username = document.getElementById("secondu").value;
  console.log(username);
  fetch(`https://corsproxy.io/?https://api.scratch.mit.edu/users/${username}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.code == "ResourceNotFound") {
        alert("The user you searched doesn't exist.");
      }
      if (!data.username == "") {
        alert("The user you searched is added!");
        document.getElementById("username2").innerHTML = data.username;
      }
    });
}

function updateDifference(value1, value2) {
  // Calculate and update the difference
  const difference = Math.abs(value2 - value1);
  document.getElementById("difference").innerHTML = difference;
}

function compareUsers() {
  flexbox.style.display = "none";
  const username1 = document.getElementById("username").innerHTML;
  const username2 = document.getElementById("username2").innerHTML;
  const su1 = username1.trim();
  const su2 = username2.trim();
  if (su1 == "Enter a username..." || su2 == "Enter a username...") {
    if (
      !document.getElementById("firstu").value == "" ||
      !document.getElementById("secondu").value == ""
    ) {
      alert("You must click enter on both usernames in order to confirm.");
      return;
    }
    alert(
      "Your usernames are empty. Please enter them in order to start the battle.",
    );
    return;
  }
  console.log("Starting the battle. Please wait...");
  document.getElementById("header").innerHTML =
    "Please wait. <br>We are setting up the comparison...";
  flexbox.style.display = "flex";
  fu.style.display = "none";
  su.style.display = "none";
  fub.style.display = "none";
  sub.style.display = "none";
  compare.style.display = "none";
  document.getElementById("header").style.textTransform = "none";
  getIcon(su1, "user-icon");
  getIcon(su2, "user-icon2");
  /* It does MAX 5 seconds to prevent rate-limits */
  let liveValue1 = 0;
  let liveValue2 = 0;

  setInterval(function () {
    console.log("Upading Counters...");

    // Fetch and set count for su1
    fetchAndSetCount(su1, "odometer")
      .then((value) => {
        liveValue1 = value;
      })
      .catch((error) => {
        console.error("Error from fetchAndSetCount for su1:", error);
      });

    // Fetch and set count for su2
    fetchAndSetCount(su2, "odometer2")
      .then((val2) => {
        liveValue2 = val2;
      })
      .catch((error) => {
        console.error("Error from fetchAndSetCount for su2:", error);
      });
    const difference = Math.abs(liveValue2 - liveValue1);
    document.getElementById("difference").innerHTML = difference;
    if (difference <= 1000) {
      usernameElement = document.getElementById("username2");
      usernameElement.style.color = "lime";
      usernameElement.style.transition = "color 1.5s ease";
      setTimeout(function () {
        usernameElement.style.color = "white";
      }, 1000);
    }
    document.getElementById("header").innerHTML = `${su2} VS. ${su1}`;
  }, 10000);
}
