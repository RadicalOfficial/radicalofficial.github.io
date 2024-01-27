const years = document.getElementById("yearright");
const d = new Date().getFullYear();

years.innerHTML = `${d} - <a href='https://scratch.mit.edu/users/Knightbot63/' target='_blank' style="text-decoration: none;">RadicalOfficial</a> &#x2022; <a href='https://github.com/RadicalOfficial/' style="text-decoration: none;">GitHub</a>`;

setTimeout(function() {
  var a = document.querySelector('.showads'),
  b = a ? (a.offsetHeight ? false : true) : true;
  years.insertAdjacentHTML('beforebegin', "<h4>Seems like you're using an adblocker. You don't have to turn it off, this is for testing purposes.</h4>")
  console.log('ads blocked?', b)
}, 200)
const latestfollower = document.getElementById("latestfo");
console.log("Fetching Data... Please wait");
fetch("https://api.allorigins.win/raw?url=https://api.scratch.mit.edu/users/Knightbot63/following/?limit=1&offset=0", {
    method: "GET", // "GET/POST"
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
})
.then(r => r.json())
.then(r => {
   console.log('Response', r)
}).catch(error => console.error('Error', error))
