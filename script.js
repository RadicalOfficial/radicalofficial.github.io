const years = document.getElementById("yearright");
const d = new Date().getFullYear();

years.innerHTML = `${d} - <a href='https://scratch.mit.edu/users/Knightbot63/' target='_blank' style="text-decoration: none;">RadicalOfficial</a> &#x2022; <a href='https://github.com/RadicalOfficial/' style="text-decoration: none;">GitHub</a>`;

let adsWidth = document.getElementByClassName('ads').offsetWidth;

if (adsWidth == 0){
	console.log("Adblock is detected")
  years.insertAdjacentHTML("beforebegin", "<h4>Seems like you're using an adblocker. We don't use cookies either but it's fine if you have it on. It's just a test</h4>")
} else {
	console.log("Adblock isn't detected")
}
