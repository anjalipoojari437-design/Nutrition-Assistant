import React from "react";
import "./NewSuggestion.css";

function NewSuggestion() {
  const healthData =
    JSON.parse(localStorage.getItem("healthData")) || {};

  const height = Number(healthData.height || 0);
  const weight = Number(healthData.weight || 0);

  let bmi = 0;

  if (height > 0 && weight > 0) {
    bmi = (
      weight /
      ((height / 100) * (height / 100))
    ).toFixed(1);
  }

  let suggestions = [];

  if (bmi === 0) {
    suggestions = [
      "Please fill your Health Data first.",
    ];
  } else if (bmi < 18.5) {
    suggestions = [
      "🥛 Drink milk daily",
      "🥜 Eat nuts and dry fruits",
      "🍚 Increase healthy carbohydrates",
      "🍗 Consume more protein",
      "🥑 Add healthy fats like avocado",
    ];
  } else if (bmi < 25) {
    suggestions = [
      "🥗 Continue a balanced diet",
      "🍎 Eat fresh fruits",
      "💧 Drink 3 litres of water",
      "🏃 Exercise 30 minutes daily",
      "😴 Sleep 7–8 hours",
    ];
  } else if (bmi < 30) {
    suggestions = [
      "🥦 Eat more vegetables",
      "🚫 Avoid sugary drinks",
      "🍗 Choose lean protein",
      "🚶 Walk 45 minutes daily",
      "💧 Stay hydrated",
    ];
  } else {
    suggestions = [
      "🥗 Follow a calorie deficit diet",
      "🏃 Exercise 60 minutes daily",
      "🍟 Avoid junk food",
      "🍎 Eat fruits and vegetables",
      "👨‍⚕️ Consult a dietitian",
    ];
  }

  return (
    <div className="suggestion-container">

      <div className="suggestion-card">

        <h1>🥗 Nutrition Suggestions</h1>

        <h2>Your BMI : {bmi}</h2>

        <ul>
          {suggestions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

      </div>

    </div>
  );
}

export default NewSuggestion;