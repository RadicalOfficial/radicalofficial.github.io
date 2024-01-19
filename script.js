const years = document.getElementById("yearright");
const d = new Date().getFullYear();

years.innerHTML = `${d} - <a href='https://scratch.mit.edu/users/Knightbot63/' target='_blank' style="text-decoration: none;">RadicalOfficial</a> &#x2022; <a href='https://github.com/RadicalOfficial/' style="text-decoration: none;">GitHub</a>`;
let fakeAd = document.createElement("div"); 
fakeAd.className = "textads banner-ads banner_ads ad-unit ad-zone ad-space adsbox"
fakeAd.style.height = "1px"
document.body.appendChild(fakeAd) 
let x_width = fakeAd.offsetHeight; 
let msg = document.getElementById("msg") 
if(x_width){ 
  console.log("No AdBlocker Detected") 
}else{ 
  console.log("AdBlocker detected")
  const html_insert = "<h4>Seems like you're using an adblocker. We don't run ads and it's fine if you use one. Just testing</h4>"
  years.insertAdjacentHTML("beforeend", html_insert)
} 
