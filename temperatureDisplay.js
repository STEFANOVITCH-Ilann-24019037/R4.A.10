// Observer pour afficher la température actuelle
class TemperatureDisplay {
  constructor(eventManager) {
    this.eventManager = eventManager;
    this.tempElement = document.getElementById("tempList");
    this.messageElement = document.getElementById("message");
    this.categories = ["bleue", "vert", "orange", "rouge"];

    // S'abonner aux changements de température
    this.eventManager.subscribe(this.update.bind(this));
  }

  update(data) {
    const temperature = data.temperature;

    // Afficher la température
    this.tempElement.textContent = temperature + " °C";

    // Appliquer le style et le message selon la température
    if (temperature < 0) {
      this.messageElement.textContent =
        "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
      this.tempElement.className = this.categories[0];
    } else if (temperature >= 0 && temperature <= 20) {
      this.messageElement.textContent = "";
      this.tempElement.className = this.categories[1];
    } else if (temperature > 20 && temperature <= 30) {
      this.messageElement.textContent = "";
      this.tempElement.className = this.categories[2];
    } else {
      this.messageElement.textContent =
        "Caliente ! Vamos a la playa, ho hoho hoho ";
      this.tempElement.className = this.categories[3];
    }
  }
}
