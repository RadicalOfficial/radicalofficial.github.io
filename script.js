const years = document.getElementById("yearright");
const d = new Date().getFullYear();

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
