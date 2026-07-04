import "./UserData.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function UserData() {
  return (
    <>
      <Navbar />

      <div className="userdata-container">

        <div className="userdata-card">

          <h1>👤 Personal Health Information</h1>
          <p>Fill in your details to receive personalized nutrition recommendations.</p>

          <form className="userdata-form">

            <input type="text" placeholder="Full Name" />

            <input type="number" placeholder="Age" />

            <select>
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <input type="number" placeholder="Height (cm)" />

            <input type="number" placeholder="Weight (kg)" />

            <select>
              <option>Activity Level</option>
              <option>Sedentary</option>
              <option>Lightly Active</option>
              <option>Moderately Active</option>
              <option>Very Active</option>
            </select>

            <select>
              <option>Health Goal</option>
              <option>Weight Loss</option>
              <option>Weight Gain</option>
              <option>Maintain Weight</option>
              <option>Muscle Gain</option>
            </select>

            <button>Save Details</button>

          </form>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default UserData;