import "./UserDashboard.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function UserDashboard() {
  return (
    <>
      <Navbar />

      <div className="dashboard">

        <h1>Welcome Back 👋</h1>
        <p className="subtitle">
          Track your health and nutrition from one place.
        </p>

        <div className="cards">

          <div className="card">
            <h2>⚖ BMI</h2>
            <h3>22.5</h3>
            <p>Healthy Weight</p>
          </div>

          <div className="card">
            <h2>🔥 Calories</h2>
            <h3>1850 kcal</h3>
            <p>Today's Intake</p>
          </div>

          <div className="card">
            <h2>💧 Water</h2>
            <h3>2.3 L</h3>
            <p>Daily Goal</p>
          </div>

          <div className="card">
            <h2>🥗 Meal Plan</h2>
            <p>Breakfast, Lunch & Dinner</p>
          </div>

          <div className="card">
            <h2>🏃 Exercise</h2>
            <p>45 Minutes</p>
          </div>

          <div className="card">
            <h2>❤️ Health Score</h2>
            <h3>92%</h3>
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default UserDashboard;