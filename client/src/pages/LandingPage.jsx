import React from "react";
import "./LandingPage.css";

const features = [
  {
    icon: "📊",
    title: "BMI Tracking",
    description:
      "Monitor your Body Mass Index over time with easy-to-read insights and personalized health indicators.",
  },
  {
    icon: "🍽️",
    title: "Meal Planning",
    description:
      "Get customized daily and weekly meal plans tailored to your goals, preferences, and activity level.",
  },
  {
    icon: "🥗",
    title: "Nutrition Suggestions",
    description:
      "Receive smart, data-driven nutrition suggestions and doctor-recommended tips for a healthier lifestyle.",
  },
  {
    icon: "❤️",
    title: "Health Dashboard",
    description:
      "Track calories, protein, water intake, and progress — all in one clean, unified dashboard.",
  },
];

function LandingPage() {
  return (
    <div className="landing-page">
      <nav
        style={{
          background: "#2E7D32",
          color: "white",
          padding: "15px",
          fontSize: "22px",
          fontWeight: "bold",
        }}
      >
        🥗 Nutrition Assistant
      </nav>

      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-badge">🌿 Your Personal Nutrition Partner</span>

          <h1 className="hero-title">
            Eat Smarter. <span className="highlight">Live Healthier.</span>
          </h1>

          <p className="hero-description">
            Nutrition Assistant helps you track your health, plan balanced
            meals, and get personalized nutrition suggestions.
          </p>

          <div className="hero-buttons">
            <a href="#" className="btn btn-primary">
              Get Started
            </a>

            <a href="#" className="btn btn-outline">
              Login
            </a>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="section-heading">
          <h2>Everything You Need for a Healthier You</h2>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="landing-footer">
        <p style={{ textAlign: "center", padding: "20px" }}>
          © {new Date().getFullYear()} Nutrition Assistant
        </p>
      </footer>
    </div>
  );
}

export default LandingPage;