
// var para=document.createElement("p");

// para.innerHTML = "HAPPY INDEPENDENCE DAY";

// document.body.append(para);

var div = document.createElement("div");
div.setAttribute("id","countdown");
div.align = "center";
div.style.fontSize = "45px";

var timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "HAPPY INDEPENDENCE DAY";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);
var br=document.createElement("br");
var br1=document.createElement("br");
var br2=document.createElement("br");
var br3=document.createElement("br");
var br4=document.createElement("br");
var br5=document.createElement("br");
document.body.append(br,br1,br2,br3,br4,br5);
document.body.append(div);