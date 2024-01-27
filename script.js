const years = document.getElementById("yearright");
const d = new Date().getFullYear();

years.innerHTML = `${d} - <a href='https://scratch.mit.edu/users/Knightbot63/' target='_blank' style="text-decoration: none;">RadicalOfficial</a> &#x2022; <a href='https://github.com/RadicalOfficial/' style="text-decoration: none;">GitHub</a>`;

setTimeout(function() {
  var a = document.querySelector('.showads'),
  b = a ? (a.offsetHeight ? false : true) : true;
  years.insertAdjacentHTML('beforebegin', "<h4>Seems like you're using an adblocker. You don't have to turn it off, this is for testing purposes.</h4>")
  console.log('ads blocked?', b)
}, 200)
