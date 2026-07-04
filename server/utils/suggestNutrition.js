function suggestNutrition(bmi) {
  if (bmi < 18.5) {
    return "You are underweight. Increase protein intake, consume healthy calories, milk, eggs, nuts, and whole grains.";
  }

  if (bmi < 25) {
    return "Your BMI is normal. Continue a balanced diet rich in vegetables, fruits, lean protein and regular exercise.";
  }

  if (bmi < 30) {
    return "You are overweight. Reduce sugary foods, increase vegetables, drink more water and exercise daily.";
  }

  return "Obesity detected. Follow a calorie deficit diet, avoid processed foods, and consult a nutritionist.";
}

module.exports = suggestNutrition;