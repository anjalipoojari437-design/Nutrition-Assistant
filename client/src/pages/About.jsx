import "./About.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="about-container">

        <div className="about-card">

          <h1>🥗 About Nutrition Assistant</h1>

          <p>
            Nutrition Assistant is a smart web application that helps users
            maintain a healthy lifestyle through personalized nutrition
            guidance and health tracking.
          </p>

          <div className="about-grid">

            <div className="about-box">
              <h2>🎯 Our Mission</h2>
              <p>
                To encourage healthy eating habits by providing customized
                nutrition recommendations for everyone.
              </p>
            </div>

            <div className="about-box">
              <h2>💡 Features</h2>
              <ul>
                <li>BMI Calculator</li>
                <li>Nutrition Suggestions</li>
                <li>Meal Planning</li>
                <li>Health Dashboard</li>
                <li>User Profile</li>
              </ul>
            </div>

            <div className="about-box">
              <h2>🛠 Technologies</h2>
              <ul>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB Atlas</li>
                <li>JWT Authentication</li>
              </ul>
            </div>

            <div className="about-box">
              <h2>❤️ Our Vision</h2>
              <p>
                Making healthy living simple, accessible, and personalized
                for everyone.
              </p>
            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default About;