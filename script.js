const years = document.getElementById("yearright");
const d = new Date().getFullYear();

years.innerHTML = `${d} - <a href='https://scratch.mit.edu/users/Knightbot63/' target='_blank' style="text-decoration: none;">RadicalOfficial</a> &#x2022; <a href='https://github.com/RadicalOfficial/' style="text-decoration: none;">GitHub</a>`;

setTimeout(function() {
  var a = document.querySelector('.showads'),
  b = a ? (a.offsetHeight ? false : true) : true;
  years.insertAdjacentHTML('beforebegin', "<h4>Seems like you're using an adblocker. You don't have to turn it off, this is for testing purposes.</h4>")
  console.log('ads blocked?', b)
}, 200)
console.log("%cStop!", 'color: red')
console.log("I'd like to tell you that if you import code, you're not going to have fun in this website. Even if it's just a little CSS change. You got that? Or are you just trying to find secrets?")
console.warn("Website Error: Everyone, evacuate! Some hackerman managed to get into js console!!! RUN RUN!!!!!!!!! ")
