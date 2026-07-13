import React, { useState } from "react";
import "./UserData.css";
import API from "../services/api";

function UserData() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [formData, setFormData] = useState({
    age: user?.age || "",
    gender: user?.gender || "",
    height: user?.height || "",
    weight: user?.weight || "",
    activity: "",
    goal: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const bmi =
    formData.height && formData.weight
      ? (
          formData.weight /
          ((formData.height / 100) * (formData.height / 100))
        ).toFixed(1)
      : 0;

  let bmiStatus = "";

  if (bmi < 18.5) bmiStatus = "Underweight";
  else if (bmi < 25) bmiStatus = "Normal";
  else if (bmi < 30) bmiStatus = "Overweight";
  else bmiStatus = "Obese";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/health/save", {
        userId: user._id,
        age: formData.age,
        gender: formData.gender,
        height: formData.height,
        weight: formData.weight,
        activity: formData.activity,
        goal: formData.goal,
        bmi,
      });

      alert(res.data.message);

    } catch (err) {
      alert(err.response?.data?.message || "Failed to Save");
    }
  };

  return (
    <div className="userdata-container">
      <div className="userdata-card">

        <h1>📊 Health Information</h1>

        <form onSubmit={handleSubmit}>

          <label>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />

          <label>Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <label>Height (cm)</label>
          <input
            type="number"
            name="height"
            value={formData.height}
            onChange={handleChange}
          />

          <label>Weight (kg)</label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
          />

          <label>Activity Level</label>
          <select
            name="activity"
            value={formData.activity}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option>Sedentary</option>
            <option>Lightly Active</option>
            <option>Moderately Active</option>
            <option>Very Active</option>
          </select>

          <label>Goal</label>
          <select
            name="goal"
            value={formData.goal}
            onChange={handleChange}
          >
            <option value="">Select Goal</option>
            <option>Weight Loss</option>
            <option>Maintain Weight</option>
            <option>Weight Gain</option>
          </select>

          <div className="bmi-box">
            <h2>Your BMI</h2>
            <h1>{bmi}</h1>
            <h3>{bmiStatus}</h3>
          </div>

          <button type="submit">
            Save Health Data
          </button>

        </form>

      </div>
    </div>
  );
}

export default UserData;