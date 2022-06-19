var GFG = document.getElementById("idAudio");
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
