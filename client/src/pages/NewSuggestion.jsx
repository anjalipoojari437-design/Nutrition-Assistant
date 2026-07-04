import "./NewSuggestion.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function NewSuggestion() {
  return (
    <>
      <Navbar />

      <div className="suggestion-page">

        <h1>🥗 Personalized Nutrition Suggestions</h1>
        <p className="subtitle">
          Based on your health profile, here are today's recommendations.
        </p>

        <div className="suggestion-grid">

          <div className="suggestion-card">
            <h2>🍽 Recommended Foods</h2>
            <ul>
              <li>Oats</li>
              <li>Brown Rice</li>
              <li>Eggs</li>
              <li>Chicken Breast</li>
              <li>Broccoli</li>
              <li>Apple</li>
            </ul>
          </div>

          <div className="suggestion-card">
            <h2>🚫 Foods to Avoid</h2>
            <ul>
              <li>Soft Drinks</li>
              <li>Fried Food</li>
              <li>Fast Food</li>
              <li>High Sugar Snacks</li>
            </ul>
          </div>

          <div className="suggestion-card">
            <h2>💧 Daily Water Intake</h2>
            <h3>2.5 Litres</h3>
          </div>

          <div className="suggestion-card">
            <h2>🔥 Calories Needed</h2>
            <h3>2100 kcal/day</h3>
          </div>

          <div className="suggestion-card">
            <h2>🏃 Exercise</h2>
            <p>45 Minutes Walking</p>
            <p>15 Minutes Stretching</p>
          </div>

          <div className="suggestion-card">
            <h2>❤️ Health Tip</h2>
            <p>
              Eat fresh fruits daily, stay hydrated and avoid skipping breakfast.
            </p>
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default NewSuggestion;