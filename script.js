// Créer l'EventManager
var O_EM = new EventManager();

// Créer le TemperatureDisplay qui s'abonne automatiquement à l'EventManager
var O_TempDisplay = new TemperatureDisplay(O_EM);

// Fonction qui déclenche la mise à jour du state
function updateTemperature() {
  O_EM.updateState();
}

const intervalID = setInterval(updateTemperature, 500);
