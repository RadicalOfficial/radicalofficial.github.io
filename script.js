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
fetch("https://api.allorigins.win/raw?url=https://api.scratch.mit.edu/users/Knightbot63/followers/?limit=1&offset=0")
.then((r) => {
  if (r.ok) {
    return r.json()
  }
  throw new Error("Something went wrong nerd.")
})
.then((data) => {
  console.log(data);
  const datas = JSON.parse(data);
  latestfollower.innerHTML = datas.username
})
.catch((error) => {
  console.error(error)
  latestfollower.inerHTML = "Something went wrong :/"
})
