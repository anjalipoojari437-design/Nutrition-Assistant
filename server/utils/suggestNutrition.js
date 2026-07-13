function suggestNutrition(disease) {
  disease = disease.toLowerCase();

  if (disease === "fever") {
    return "Drink plenty of fluids, eat fruits, soups, and light nutritious foods.";
  }

  if (disease === "diabetes") {
    return "Avoid sugary foods. Eat whole grains, vegetables, and high-fiber foods.";
  }

  if (disease === "bp") {
    return "Reduce salt intake. Eat fruits, vegetables, and low-fat dairy products.";
  }

  if (disease === "anemia") {
    return "Eat iron-rich foods like spinach, dates, beans, and pomegranate.";
  }

  if (disease === "obesity") {
    return "Follow a calorie-controlled diet and increase physical activity.";
  }

  return "Maintain a balanced healthy diet.";
}

module.exports = suggestNutrition;