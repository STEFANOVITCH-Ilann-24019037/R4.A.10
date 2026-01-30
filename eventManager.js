class EventManager {
  constructor() {
    this.A_tempe = [];
    this.A_HistoireTemperatures = [];
    var I_t;
    this.subscribers = [];

      for (var i = 0; i < 20; i++) {
        I_t = Math.random() * (40 - -10) + -10; // car Math.random() génère entre 0 et 1 donc pour avoir entre -10 et 40
        I_t = Math.round(I_t);
        this.A_tempe.push(I_t);
      }
  }

  subscribe(callback) {
    this.subscribers.push(callback);
  }

  notify(data) {
    this.subscribers.forEach(callback => callback(data));
  }

  unsubscribe(callback) {
    this.subscribers = this.subscribers.filter(sub => sub !== callback);
  }

  getTemperature(index) {
    return this.A_tempe[index];
  }

  addToHistory(temperature) {
    this.A_HistoireTemperatures.push(temperature);
  }

  getHistory() {
    return this.A_HistoireTemperatures;
  }


}


