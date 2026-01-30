// Observer pour gérer l'historique des températures
class HistoryManager {
  constructor(eventManager) {
    this.eventManager = eventManager;
    this.historyElement = document.getElementById("historyList");

    // S'abonner aux changements de température
    this.eventManager.subscribe(this.update.bind(this));
  }

  update(data) {
    const history = this.eventManager.getHistory();
    this.historyElement.textContent = "Historique des températures : " + history.join("°C, ") + "°C";
  }
}
