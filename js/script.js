var GFG = document.getElementById("idAudio");
var calendarUrl =
  "https://calendar.google.com/event?action=TEMPLATE&tmeid=MGdya2JuaWtsMHB2dDd1bGxmbTZ1ZWViczkgYWRpdHlhdHdkMEBt&tmsrc=adityatwd0%40gmail.com";
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

const nodemailer = require("nodemailer");
function calender() {
  console.log("Hello Aditya");
  // // location.href = calendarUrl;
  var transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    service: "smtp",
    auth: {
      user: "execuliacompany@gmail.com",
      pass: "xsmtpsib-ddcb1f0c42d7834a05255716a8f836f60530c4799305b5276c4242b8510b03b6-Lpcyn2fSNXWzxQbV",
    },
  });
  var mailOptions = {
    from: "execuliacompany@gmail.com",
    to: "adityatwd0@gmail.com",
    subject: "Hathway Project Presentation",
    text: "Hello Prashant, <br> <br> Kindly work on Hathway Project Presentation. Make a small PPT with workflow diagram",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      console.log("Mail Send Successfully");
    }
  });
}
