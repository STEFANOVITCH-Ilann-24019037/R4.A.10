class TemperatureDisplay {

  constructor(eventManager) {
    this.eventManager = eventManager;
    this.O_AfficheTemp = document.getElementById("tempList");
    this.O_HistoryTableBody = document.getElementById("historyList");
    this.O_AfficheMesage = document.getElementById("message");

    // S'abonner à l'EventManager
    this.eventManager.subscribe(this.update.bind(this));
  }

  // Méthode appelée par l'EventManager quand le state change
  update(state) {
    this.displayCurrentTemperature(state);
    this.updateHistoryTable();
  }

  // Afficher la température actuelle
  displayCurrentTemperature(state) {
    this.O_AfficheTemp.textContent = state.currentTemperature + " °C";
    this.O_AfficheTemp.className = state.category;
    this.O_AfficheMesage.textContent = state.message;
  }

  // Mettre à jour le tableau d'historique
  updateHistoryTable() {
    var A_History = this.eventManager.getHistory();

    // Vider le tableau
    this.O_HistoryTableBody.innerHTML = "";

    // Remplir le tableau avec l'historique
    A_History.forEach((entry) => {
      var row = this.O_HistoryTableBody.insertRow();
      var cellTime = row.insertCell(0);
      var cellTemp = row.insertCell(1);

      cellTime.textContent = entry.time;
      cellTemp.textContent = entry.temperature + " °C";

      // Ajouter la classe de couleur à la ligne
      if (entry.temperature < 0) {
        row.className = "bleue";
      } else if (entry.temperature >= 0 && entry.temperature <= 20) {
        row.className = "vert";
      } else if (entry.temperature > 20 && entry.temperature <= 30) {
        row.className = "orange";
      } else {
        row.className = "rouge";
      }
    });
  }

  // Méthode pour se désabonner si nécessaire
  unsubscribe() {
    this.eventManager.unsubscribe(this.update.bind(this));
  }
}
