// Application principale avec architecture Observer
var currentIndex = 0;
var eventManager;
var temperatureDisplay;
var historyManager;

window.addEventListener("load", function () {
  // Initialiser les tabs
  var tablists = document.querySelectorAll("[role=tablist].manual");
  for (var i = 0; i < tablists.length; i++) {
    new TabsManual(tablists[i]);
  }

  // Initialiser le EventManager (Subject)
  eventManager = new EventManager();

  // Créer les observateurs
  temperatureDisplay = new TemperatureDisplay(eventManager);
  historyManager = new HistoryManager(eventManager);

  // Démarrer l'affichage automatique des températures
  const intervalID = setInterval(afficherTemperatureSuivante, 500);
});

function afficherTemperatureSuivante() {
  // Passer à la température suivante
  currentIndex++;
  if (currentIndex >= eventManager.A_tempe.length) {
    currentIndex = 0;
  }

  // Récupérer la température actuelle
  const temperature = eventManager.getTemperature(currentIndex);

  // Ajouter à l'historique
  eventManager.addToHistory(temperature);

  // Notifier tous les observateurs
  eventManager.notify({ temperature: temperature, index: currentIndex });
}
