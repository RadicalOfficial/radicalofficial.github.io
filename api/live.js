const params = new URLSearchParams(window.location.search);
let scratchUser;

if (params.get('user') === null) {
  scratchUser = "griffpatch";
}
else if (params.get('user')){
  scratchUser = params.get('user');
}

// Snowflakes

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
          const livejson = {"count": live}
          document.getElementById("data").innerHTML = livejson;
        });
    });
}
