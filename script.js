var A_tempe=[];
 var I_I= 0;

function setup() {
  for (var i=0;i<20;i++){
    I_t = Math.random() * (40 - (-10)) + (-10); // car Math.random() génère entre 0 et 1 donc pour avoir entre -10 et 40
    I_t = Math.round(I_t);
    A_tempe.push(I_t);
  }

}

function AfficherLaTemperature(){
  ++I_I;
  var O_AfficheTemp = document.getElementById("tempList");
  O_AfficheTemp.textContent = A_tempe[I_I];
}

const intervalID = setInterval(AfficherLaTemperature, 2000);

setup();


