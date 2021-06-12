var icn = document.getElementById("icn");

icn.onclick = function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    icn.src = "image/sun.png";
  }
  else
  {
    icn.src = "image/moon.png";

  }
}