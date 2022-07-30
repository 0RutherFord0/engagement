var GFG = document.getElementById("idAudio");
var directionUrl = "https://g.page/anuradhamangalkaryalay?share";
document.getElementById("mymarquee").stop();

function play_Audio() {
  GFG.play();
  document.getElementById("mymarquee").start();
  document.getElementById("btn1").style.display = "none";
  document.getElementById("btn2").style.display = "block";
  document.getElementById("marquee1").style.display = "block ";
}
function pause_Audio() {
  document.getElementById("btn2").style.display = "none";
  document.getElementById("btn1").style.display = "block";
  document.getElementById("mymarquee").stop();
  GFG.pause();
}

window.addEventListener("load", (event) => {
  console.log("Page is fully loaded");
});

function calender(dataurl, filename) {
  var anchor = document.createElement("a");
  anchor.setAttribute("href", "./images/engagment-invite.png");
  anchor.setAttribute("download", "");
  document.body.appendChild(anchor);
  anchor.click();
  anchor.parentNode.removeChild(anchor);
}
