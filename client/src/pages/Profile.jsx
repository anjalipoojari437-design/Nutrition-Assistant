import "./Profile.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Profile() {
  return (
    <>
      <Navbar />

      <div className="profile-container">

        <div className="profile-card">

          <div className="profile-top">

            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Profile"
            />

            <h1>Anupama</h1>

            <p>Healthy Living Enthusiast 🌿</p>

          </div>

          <div className="profile-details">

            <div className="detail">
              <span>📧 Email</span>
              <strong>anupama@gmail.com</strong>
            </div>

            <div className="detail">
              <span>🎂 Age</span>
              <strong>20 Years</strong>
            </div>

            <div className="detail">
              <span>⚖ Weight</span>
              <strong>53 kg</strong>
            </div>

            <div className="detail">
              <span>📏 Height</span>
              <strong>158 cm</strong>
            </div>

            <div className="detail">
              <span>❤️ BMI</span>
              <strong>21.2</strong>
            </div>

            <div className="detail">
              <span>🎯 Goal</span>
              <strong>Stay Healthy</strong>
            </div>

          </div>

          <button>Edit Profile</button>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Profile;