import "./Contact.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <div className="contact-container">

        <div className="contact-left">

          <h1>📞 Contact Us</h1>

          <p>
            Have questions, suggestions, or feedback? We'd love to hear from
            you.
          </p>

          <div className="contact-info">

            <div className="info-card">
              <h3>📍 Address</h3>
              <p>Chittoor, Andhra Pradesh, India</p>
            </div>

            <div className="info-card">
              <h3>📧 Email</h3>
              <p>support@nutritionassistant.com</p>
            </div>

            <div className="info-card">
              <h3>📱 Phone</h3>
              <p>+91 98765 43210</p>
            </div>

          </div>

        </div>

        <div className="contact-right">

          <form>

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
            ></textarea>

            <button>
              Send Message
            </button>

          </form>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Contact;