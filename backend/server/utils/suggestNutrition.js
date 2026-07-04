const suggestNutrition=(disease)=>{

switch(disease.toLowerCase()){

case "diabetes":
return "Eat whole grains, vegetables, avoid sugar.";

case "obesity":
return "Eat fruits, reduce junk food, exercise daily.";

case "anemia":
return "Eat spinach, dates, pomegranate and iron rich foods.";

case "bp":
return "Reduce salt and eat potassium rich foods.";

default:
return "Maintain a balanced healthy diet.";
}

}

module.exports=suggestNutrition;