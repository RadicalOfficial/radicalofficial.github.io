function fetchAndSetCount() {
  fetch(`https://mixerno.space/api/twitch-user-counter/user/caseoh_`, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  })
    .then((res) => res.json())
    .then((out) => {
      console.log(out.counts[0].count);
      const live = out.counts.count;
      document.getElementById("odometer").innerHTML = live;
    });
  };

setInterval(fetchAndSetCount, 5000)
